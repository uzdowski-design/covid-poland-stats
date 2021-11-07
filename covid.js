// This script crawls for Polish COVID data detailed by region (wojewodztwo)

const puppeteer = require('puppeteer');
const moment = require('moment');

(async () => {

  // define URLs
  const regionDetailedDataUrl = 'https://experience.arcgis.com/experience/b7e217abee754b68ba0e0113be9f0219/';

  // create browser and page instances
  let browser = await puppeteer.launch();
  let page = await browser.newPage();


  // go to page, wait for it to load and inject jQuery into page
  await page.goto(regionDetailedDataUrl, { waitUntil: 'networkidle0', timeout: 1000 * 120 });
  await page.waitForTimeout(3000);
  await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' });


  // get details funcion
  const detailsByRegion = await page.evaluate(function () {
    const toNumber = (str) => parseInt(str.replace(/\D+/g, '')); // number parser

    // get table headers (used for preview only)
    // let headers = [...$('.esri-field-column__header-content')];
    // headers = headers.map(header => header.textContent);
    // console.log(headers)

    // define keys for each region data
    const dataHeaders = ['regionName', 'population', 'cases', 'deceased', 'casesPer10K', 'deceasedCovidOnly', 'deceasedWithOtherDiseases', 'quarantied', 'testsDone', 'testsPositive', 'testesNegative', 'testsFromPOZ', 'testsOthers', 'recovered'];

    regionsDetails = {};
    let currCellIndex = 42;

    // get data for 16 regions
    for (let i = 0; i < 16; i++) {
      let region = {};
      // get all the cells in row for each region
      for (let j = 0; j < 14; j++) {
        if (j == 0) {
          region[`${dataHeaders[j]}`] = $(`[slot="vaadin-grid-cell-content-${currCellIndex++}"]`).text();
        } else
          region[`${dataHeaders[j]}`] = toNumber($(`[slot="vaadin-grid-cell-content-${currCellIndex++}"]`).text());
      }
      // assign regionName as key for each region
      regionsDetails[removePolishSigns(region["regionName"])] = region;
    }

    return regionsDetails;

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

  });

  // add a date for data gathering
  const date = moment().format("YYYY/MM/DD hh:mm");

  // putting all data into one 'data' object
  let data = {
    ...detailsByRegion, date
  };

  // preview all data (regions info + run date)
  console.log(data);

  // close browser at finish
  await browser.close();

})();