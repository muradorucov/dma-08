const express = require('express');
const config = require('./config');
const router = require('./routers');
const dbConnection = require('./db');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();


var corsOptions = {
  origin: function (origin, callback) {
    if (config.whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}


app.use(cors(corsOptions));

dbConnection();
// proxy
app.set('trust proxy', 1);
// x-forwarded-proto middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", router)

module.exports = app;