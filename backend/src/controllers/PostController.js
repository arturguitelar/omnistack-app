const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const Post = require('../models/Post');

module.exports = {

    async index(req, res) {
        const posts = await Post.find().sort('-createdAt'); // o "-" na frente do nome = DESC

        return res.json(posts);
    },

    async store(req, res) {
        const {
            author, place, description, hashtags
        } = req.body;
        const { filename: image } = req.file;

        // para mudar a extensão da imagem
        const [name] = image.split('.');
        const fileName = `${name}.jpg`;

        // define configurações e faz o resize da imagem
        await sharp(req.file.path)
            .resize(500)
            .jpeg({ quality: 70 })
            .toFile(
                path.resolve(req.file.destination, 'resized', fileName)
            );

        // deleta a imagem original
        fs.unlinkSync(req.file.path);

        const post = await Post.create({
            author, place, description, hashtags, image: fileName
        });

        req.io.emit('post', post);

        return res.json(post);
    }
};
