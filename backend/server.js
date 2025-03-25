const express = require('express');
const cors = require('cors');
const multer = require('multer');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
