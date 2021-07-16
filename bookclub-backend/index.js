const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const functions = require('firebase-functions')
const bookclubRouter = require('./routes/bookclubRoutes');
const decodeIDToken = require('./authenticateToken');
const atlasPassword = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(decodeIDToken);
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

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

exports.api = functions.https.onRequest(app);
<<<<<<< HEAD
// module.exports = app;
=======
// module.exports = app;
>>>>>>> 1abe9f68f2287dcc27a0e167430b4cc5d57c462b
