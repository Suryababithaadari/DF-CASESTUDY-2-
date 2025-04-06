const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());

app.post('/analyze', upload.single('file'), (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const filename = file.originalname;
  const ext = path.extname(filename).toLowerCase();

  // Simulated file scan logic
  let result, status;
  if (ext === '.exe' || ext === '.bat') {
    status = 'infected';
    result = 'Threat detected: Suspicious file type';
  } else {
    status = 'clean';
    result = 'No threats detected';
  }

  res.json({
    filename,
    status,
    result
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
