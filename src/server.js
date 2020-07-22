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
app.use('/upload', express.static(dir));

app.use(haltOnTimedout);
function haltOnTimedout(req, res, next) {
  if (!req.timedout) next();
}


// mode can be access anywhre in the project
mode = process.env.NODE_ENV;

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

  // When you try to connect database please comment bellow start method
  start();

  // MYSQL database connection start

  // const databaseConfig = config.get(`${mode}.database`);
  // con can be access anywhre in the project
  // con = mysql.createPool(databaseConfig);

  // con.getConnection((err) => {
  //   if (err) {
  //     //- The server close the connection.
  //     if (err.code === "PROTOCOL_CONNECTION_LOST") {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //     }

  //     //- Connection in closing
  //     else if (err.code === "PROTOCOL_ENQUEUE_AFTER_QUIT") {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //     }

  //     //- Fatal error : connection variable must be recreated
  //     else if (err.code === "PROTOCOL_ENQUEUE_AFTER_FATAL_ERROR") {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //     }

  //     //- Error because a connection is already being established
  //     else if (err.code === "PROTOCOL_ENQUEUE_HANDSHAKE_TWICE") {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //     }

  //     //- Anything else
  //     else {
  //       console.error("/!\\ Cannot establish a connection with the database. /!\\ (" + err.code + ")");
  //     }

  //     setTimeout(dbConnection, 5000);
  //   } else {
  //     app.set('con', con);
  //     start();
  //   }
  // });
}

dbConnection();