const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const config = require('config');
const app = express();
const pack = require('../package');
const mysql = require('mysql');
const path = require('path');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(require('express-status-monitor')());

require('./routes')(app);
const dir = path.join(__dirname, 'assets');
app.use(express.static(dir));

app.use(haltOnTimedout);
function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}


// var mode = env.env().mode;
const mode = process.env.NODE_ENV;

const start = () => (
  app.listen(config.get(`${mode}.port`), () => {
    console.log(chalk.yellow('.......................................')); //eslint-disable-line
    console.log(chalk.green(config.get(`${mode}.name`))); //eslint-disable-line
    console.log(chalk.green(`Port:\t\t${config.get(`${mode}.port`)}`)); //eslint-disable-line
    console.log(chalk.green(`Mode:\t\t${config.get(`${mode}.mode`)}`)); //eslint-disable-line
    console.log(chalk.green(`App version:\t${pack.version}`)); //eslint-disable-line
    console.log(chalk.green("database connection is established"));
    console.log(chalk.yellow('.......................................')); //eslint-disable-line
  })
);

dbConnection = () => {
  start();

  // MYSQL database connection start

  // con = mysql.createPool({
  //   multipleStatements: true,
  //   host: config.get(`${mode}.database.host`),
  //   user: config.get(`${mode}.database.username`),
  //   password: config.get(`${mode}.database.password`),
  //   database: config.get(`${mode}.database.name`),
  // });

  // con.getConnection((error) => {
  //   if (error) {
  //     console.error(error);
  //     setTimeout(dbConnection, 5000);
  //   } else {
  //     app.set('con', con);
  //     start();
  //   }
  // });

  // con.on('error', (error) => {
  //   connection.on('error', function (err) {

  //     //- The server close the connection.
  //     if (err.code === "PROTOCOL_CONNECTION_LOST") {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //       connection = dbConnection();
  //     }

  //     //- Connection in closing
  //     else if (err.code === "PROTOCOL_ENQUEUE_AFTER_QUIT") {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //       connection = dbConnection();
  //     }

  //     //- Fatal error : connection variable must be recreated
  //     else if (err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR") {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //       connection = dbConnection();
  //     }

  //     //- Error because a connection is already being established
  //     else if (err.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE") {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //       connection = dbConnection();
  //     }

  //     //- Anything else
  //     else {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //       connection = dbConnection();
  //     }

  //   });
  // });
}

dbConnection();