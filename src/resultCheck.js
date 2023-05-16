require('dotenv').config();

const { isDataAlreadyInDB, testNewDataComplete } = require('./helpers');

const mongoURI = process.env.MONGODB_URI;

const mongoose = require('mongoose');
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected."))
  .catch(err => console.log(err));

const compareAndSaveResults = dataObj => {
  try {
    const Stats = require('./models/Stats');

    Stats.find()
      .then(stats => {
        console.log(dataObj);
        // if scrapped data is incomplete throw error
        if (!testNewDataComplete(dataObj)) throw 'Scrapped data is corrupted - not saved in database.';
        // if no documents exists or todays date not in current documents then create new documents with today's data
        if (stats == "" || !isDataAlreadyInDB(dataObj, stats)) {
          console.log(`New stats data created.`);
          // console.log(`New stats data created:\n${JSON.stringify(dataObj)}`)
          const newStats = new Stats(dataObj);
          return newStats.save().catch(err => console.log(err));
        } else console.log('Current day stats already found in database.');
      })
      .then(() => mongoose.disconnect())
      .then(() => console.log('MongoDB Disconnected.'))
      .catch(err => {
        console.log(err);
        mongoose.disconnect();
      });
  } catch (err) {
    console.log(err);
  }
};


module.exports = compareAndSaveResults;