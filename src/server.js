const express = require('express');
const bodyParser = require('body-parser');
const chalk = require('chalk');
const cors = require('cors');
const app = express();
const pack = require('../package');
const mysql = require('mysql');
const path = require('path');
// if NODE_ENV value not define then dev value will be assign 
mode = process.env.NODE_ENV || 'dev';
// mode can be access anywhere in the project
const config = require('config').get(mode);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

// use only when you want to see the metric related to express app
// app.use(require('express-status-monitor')());

require('./routes')(app);
const dir = path.join(__dirname, 'assets');
app.use('/upload', express.static(dir));


const start = () => (
  app.listen(config.port, () => {
    console.log(chalk.yellow('.......................................'));
    console.log(chalk.green(config.name));
    console.log(chalk.green(`Port:\t\t${config.port}`));
    console.log(chalk.green(`Mode:\t\t${config.mode}`));
    console.log(chalk.green(`App version:\t${pack.version}`));
    console.log(chalk.green("database connection is established"));
    console.log(chalk.yellow('.......................................'));
  })
);

dbConnection = () => {

  // When you try to connect database please comment bellow start method
  start();

  // MYSQL database connection start

  // const databaseConfig = config.database;
  // con can be access anywhere in the project
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