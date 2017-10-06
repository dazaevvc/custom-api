const mongoose = require('mongoose');
require('dotenv').config();
// TODO: include all model files here (and export models together below)

// connect to Mongo DB
mongoose.connection.openUri(process.env.DB_CONN, {}, function(err, conn) {
  if (err) {
    console.log('Error connecting to Mongo DB.', err);
  } else {
    console.log('Mongoose successfully connected to Mongo DB.');
  }
});

module.exports = {
  // TODO: add references to all models here
};