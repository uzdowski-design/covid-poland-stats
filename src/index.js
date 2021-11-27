const crawler = require('./crawler');
const compareAndSaveResults = require('./resultCheck');

crawler()
  .then(data => {
    compareAndSaveResults(data)
  })
  .catch(err => console.log(err))
