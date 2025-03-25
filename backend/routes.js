const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const processVideo = require('./processVideo');

// Configure Multer for video upload
const storage = multer.diskStorage({
  destination: './backend/uploads',
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});
const upload = multer({ storage });

router.post('/upload', upload.single('video'), async (req, res) => {
  try {
    const videoPath = req.file.path;
    const outputPath = path.join(__dirname, 'outputs', `output-${Date.now()}.mp4`);

    await processVideo(videoPath, outputPath);

    res.json({ message: 'Video processed successfully', outputPath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
