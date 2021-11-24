const crawler = require('./crawler');
const compareAndSaveResults = require('./resultCheck');
// const fs = require('fs');

crawler()
  .then(data => {
    // saveTestFile(data)
    // console.log(data)
    compareAndSaveResults(data)
  })
  .catch(err => console.log(err))

// const saveTestFile = (data) => {
//   let jsonData = JSON.stringify(data);

//   fs.writeFile('data.json', jsonData, (err) => {
//     if (err) throw err;
//     console.log('File saved')
//   })

// }