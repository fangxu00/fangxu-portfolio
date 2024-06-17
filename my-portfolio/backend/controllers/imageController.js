const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Save files to the 'uploads' directory
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({ storage });

const uploadImage = (req, res) => {
    const file = req.file;
    const description = req.body.description;

    if (!file) {
        console.log('No file uploaded');
        return res.status(400).send('No file uploaded.');
    }

    res.send(`File uploaded and saved with filename: ${file.filename}`);
};

const getImages = (req, res) => {
    const directoryPath = path.join(__dirname, '../uploads');
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return res.status(500).send('Unable to scan directory');
        }
        const fileInfos = files.map((file) => ({
            name: file,
            url: `https://my-portfolio-backend-55efc7b8f88d.herokuapp.com/uploads/${file}` // Ensure the URL is correct
        }));
        res.json(fileInfos);
    });
};

module.exports = {
    upload,
    uploadImage,
    getImages,
};
