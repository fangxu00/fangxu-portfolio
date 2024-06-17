const express = require('express');
const { upload, uploadImage, getImages } = require('../controllers/imageController');
const router = express.Router();

router.post('/upload', upload.single('image'), uploadImage);
router.get('/', getImages);

module.exports = router;
