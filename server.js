const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

// app.get('/', (_, res) => {
//   res.send('API is running......');
// });
// ---------------------------------
// ---------- deployment -----------
__dirname = path.resolve();
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')));

  app.get('*', (_, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
} else {
  app.get('/', (_, res) => {
    res.send('API notes backend is running......');
  });
}
// ---------------------------------
// ---------------------------------

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
