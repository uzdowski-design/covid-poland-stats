require('dotenv').config()

const mongoURI = process.env.MONGODB_URI

const mongoose = require('mongoose')
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected."))
  .catch(err => console.log(err))

const compareAndSaveResults = dataObj => {
  try {
    const Stats = require('./models/Stats')
    const newStats = new Stats(dataObj);
    return newStats.save().catch(err => console.log(err))
  } catch (err) {
    console.log(err)
  }
}

module.exports = compareAndSaveResults;