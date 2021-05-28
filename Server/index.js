
const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');
const { username, pass, myCluster } = require('./config');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', express.static('./public'));
app.use(express.static(path.join(__dirname, 'public')));

//data sanitization against noSQL query injection
app.use(mongoSanitize());


const url = `mongodb+srv://${username}:${pass}${myCluster}.mongodb.net/project?retryWrites=true&w=majority`;
mongoose.connect(url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const studentRouter = require('./routes/Student');


//User Routes
app.use('/users', studentRouter);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
