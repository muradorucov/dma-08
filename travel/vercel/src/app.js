const express = require('express');
const config = require('./config');
const router = require('./routers');
const dbConnection = require('./db');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();


var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (config.whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, credentials: true }
  } else {
    corsOptions = { origin: false }
  }
  callback(null, corsOptions)
}
app.use(cors(corsOptionsDelegate))


dbConnection();
// proxy
app.set('trust proxy', 1);
// x-forwarded-proto middleware

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/api", router)

module.exports = app;