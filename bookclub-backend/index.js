const express = require('express');
const mongoose = require('mongoose');
const functions = require('firebase-functions')
const cors = require('cors');
const path = require('path');

const app = express();

const bookclubRouter = require('./routes/bookclubRoutes');
const atlasPassword = require('./config');
const decodeIDToken = require('./authenticateToken');

app.use(cors());
app.use(express.json());
app.use(decodeIDToken);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', bookclubRouter);

mongoose.connect(
  `mongodb+srv://saltystartup:${atlasPassword}@Bookclub.mgvz6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
  })
  .catch((err) => {
    console.log('Error connecting to DB', err.message);
  });

const PORT = 4200;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

//module.exports = app;
exports.api = functions.https.onRequest(app);
