const express = require('express');
const router = express.Router();
const resumeController = require('../controllers/resumeController');

// Route to download the resume PDF
router.get('/download', resumeController.downloadResume);

module.exports = router;
