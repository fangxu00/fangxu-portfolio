const path = require('path');

exports.downloadResume = (req, res) => {
  const filePath = path.join(__dirname, '../public/resumes/resume.pdf');
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');
  res.sendFile(filePath, (err) => {
    if (err) {
      console.error('Error sending the file:', err);
      res.status(500).send({ message: 'Error sending the file.' });
    }
  });
};
