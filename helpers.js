const fs = require('fs');

// check if data is already in database (to avoid overwriting already existing data multiple times)
const isDataAlreadyInDB = (newData, dbData) => {
  let dbStatsDates = []
  dbData.forEach((item) => dbStatsDates.push(item.statsDate));
  return dbStatsDates.includes(newData.statsDate) ? true : false;
}

const saveDBFile = (data) => {
  let jsonData = JSON.stringify(data);

  fs.writeFile('dataFromDB.json', jsonData, (err) => {
    if (err) throw err;
    console.log('DB data file saved')
  })
}

// check if new data scrapped is complete (no nulls or undefined caused by issues with scrapping)
const testNewDataComplete = (data) => {
  // check if region object has all data (no nulls or undefined)
  const checkObjHasData = (obj) => {
    let result = true;
    for (let [key, value] of Object.entries(obj)) {
      if (value === null || value === undefined) result = false
    }
    return result
  }

  // check if all regions have all data
  let testPassed = true;
  for (let key in data.regions) {
    if (!checkObjHasData(data.regions[key])) testPassed = false
  }
  // if all data is there we can update database (so we don't overwrite legitimate data with corrupted data)

  return testPassed
}


module.exports = { isDataAlreadyInDB, saveDBFile, testNewDataComplete }