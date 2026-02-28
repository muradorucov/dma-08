const express = require('express');
const config = require('./src/config');
const router = require('./src/routers');
const dbConnection = require('./src/db');
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();
const path = require("path");



var corsOptionsDelegate = function (req, callback) {
  console.log(config.whitelist.indexOf(req.header('Origin')) !== -1);

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

app.use("/uploads", express.static(path.join(__dirname, '/src/uploads')));

app.listen(config.port, () => {
  console.log(`Server is running`);
});