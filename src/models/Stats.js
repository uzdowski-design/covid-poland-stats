const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statsSchema = new Schema({
  statsDate: { type: Date },
  statsDay: { type: String },
  updated: { type: Date, default: Date.now },
  sourceDate: { type: String },
  infected: { type: Number },
  deceased: { type: Number },
  recovered: { type: Number },
  dailyInfected: { type: Number },
  dailyTested: { type: Number },
  dailyPositiveTests: { type: Number },
  dailyDeceased: { type: Number },
  dailyDeceasedCovidOnly: { type: Number },
  dailyDeceasedCovidWithOtherDiseases: { type: Number },
  dailyRecovered: { type: Number },
  dailyQuarantine: { type: Number },
  regions: { type: Array }
})

module.exports = mongoose.model('Stats', statsSchema, 'polandDaily');