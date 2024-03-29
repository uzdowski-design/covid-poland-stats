const fs = require('fs');

// writing files for testing
const saveFile = (data, fileName) => {
  let jsonData = JSON.stringify(data);

  fs.writeFile(fileName, jsonData, (err) => {
    if (err) throw err;
    console.log(`${fileName} saved.`)
  })
}

// check if data is already in database (to avoid overwriting already existing data multiple times)
const isDataAlreadyInDB = (newData, dbData) => {
  let dbStatsDays = []
  dbData.forEach((item) => dbStatsDays.push(item.statsDay));
  return dbStatsDays.includes(newData.statsDay) ? true : false;
}


// check if new data scrapped is complete (no nulls or undefined caused by issues with scrapping)
const testNewDataComplete = (data) => {
  if (Object.values(data).some(val => (val === null || val === undefined ))) return false;
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

function isValidDate(d) {
  return d instanceof Date && !isNaN(d);
}


// remove Polish signs from regionName to use as keys in data object
function removePolishSigns(string) {
  string = string.replace("ę", "e");
  string = string.replace("ó", "o");
  string = string.replace("ą", "a");
  string = string.replace("ś", "s");
  string = string.replace("ł", "l");
  string = string.replace("ż", "z");
  string = string.replace("ź", "z");
  string = string.replace("ć", "c");
  string = string.replace("ń", "n");
  return string;
}

module.exports = { isDataAlreadyInDB, saveFile, testNewDataComplete, removePolishSigns, isValidDate }