const crawler = require('./crawler');
const compareAndSaveResults = require('./resultCheck');
// const { saveFile } = require('./helpers')

crawler()
  .then(data => {
    // saveFile(data, 'data.json')
    compareAndSaveResults(data)
  })
  .catch(err => console.log(err))
