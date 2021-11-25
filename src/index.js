const cron = require('node-cron')
const crawler = require('./crawler');
const compareAndSaveResults = require('./resultCheck');

cron.schedule('* */4 * * *', function () {
  crawler()
    .then(data => {
      compareAndSaveResults(data)
    })
    .catch(err => console.log(err))
})