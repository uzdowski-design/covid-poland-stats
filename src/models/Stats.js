const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statsSchema = new Schema({
  statsDate: { type: Date },
  statsDay: { type: String },
  updated: { type: Date, default: Date.now },
  sourceDate: { type: String },
  totalInfected: { type: Number },
  newlyInfected: { type: Number },
  reInfected: { type: Number },
  deceased: { type: Number },
  recovered: { type: Number },
  dailyTotalInfected: { type: Number },
  dailyNewlyInfected: { type: Number },
  dailyReInfected: { type: Number },
  dailyTested: { type: Number },
  dailyPositiveTests: { type: Number },
  dailyDeceased: { type: Number },
  dailyDeceasedCovidOnly: { type: Number },
  dailyDeceasedCovidWithOtherDiseases: { type: Number },
  dailyRecovered: { type: Number },
  dailyQuarantine: { type: Number },
  regions: { type: Array }
})

module.exports = mongoose.model('Stats', statsSchema, 'polandDailyNew');