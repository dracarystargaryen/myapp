require('dotenv').config()

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require("mongoose"); 

const passport = require('./passport/index');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const PORT = process.env.PORT || 3000;
const log = console.log; 
const app = express();

// connect to mongodb atlas cloud database using mongoose 
const mongooseAccess = async () => {
  const URL = 'mongodb+srv://admin:Illuminorz27@cluster0-vm8dw.mongodb.net/test?retryWrites=true&w=majority'
  
  try {
      await mongoose.connect(URL, {
          useNewUrlParser: true, 
          useUnifiedTopology: true
      });
      console.log("Database Request Successful!");
    
    } catch (e) {
      console.log(e);
      throw e;
    }
  };

mongooseAccess();
//verify connection using mongoose
mongoose.connection.on('connected', () => {
  console.log('You Are Connected To MongoDB Atlas!'); 
});

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOD_URI ||
  'mongodb://localhost/myapp');



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/', indexRouter);
app.use('/authentication', usersRouter);
app.use(passport.initialize());
//app.use(passport.session());

app.listen(PORT, () => {
  log(`Server is listening on PORT ${PORT}`); 
});

const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
