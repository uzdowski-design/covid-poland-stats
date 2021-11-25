const puppeteer = require('puppeteer');
// const moment = require('moment');

const crawler = async () => {

  // define URLs
  const detailsDataUrl = 'https://rcb-gis.maps.arcgis.com/apps/dashboards/e496f00bd8b947099ff95d9e26418a2c';
  const regionDetailedDataUrl = 'https://experience.arcgis.com/experience/b7e217abee754b68ba0e0113be9f0219/';

  // create browser and page instances
  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  // go to page, wait for it to load, inject jQuery into page
  await page.goto(detailsDataUrl, { waitUntil: 'networkidle0' });
  // await page.waitForSelector('full-container');
  await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' });


  // get general data functions
  const allData = await page.evaluate(async () => {
    // parsing helpers
    const toNumber = (str) => parseInt(str.replace(/\D+/g, ''));
    const toString = (str) => str.replace(/\d+|:+|,+/g, '').trim();

    // return data (find on page, extract data needed and return as object values)
    return {
      sourceDate: $('div.external-html:contains(Dane pochodzą z Ministerstwa Zdrowia z dnia )').find('strong').text(),
      infected: toNumber($('div.external-html:contains(osoby zakażone)').eq(0).find('p').last().text()),
      deceased: toNumber($('div.external-html:contains(przypadki śmiertelne)').eq(0).find('p').last().text()),
      recovered: toNumber($('div.external-html:contains(osoby, które wyzdrowiały)').eq(0).find('p').last().text()),
      // activeCase: toNumber(),
      dailyInfected: toNumber($('div.external-html:contains(osoby zakażone)').eq(1).find('p').last().text()),
      dailyTested: toNumber($('div.external-html:contains(wykonane testy:)').find('p').last().text()),
      dailyPositiveTests: toNumber($('div.external-html:contains(testy z wynikiem pozytywnym)').find('p').last().text()),
      dailyDeceased: toNumber($('div.external-html:contains(przypadki śmiertelne)').eq(1).find('p').last().text()),
      // dailyDeceasedDueToCovid: allData.ZGONY_COVID || "",
      dailyRecovered: toNumber($('div.external-html:contains(osoby, które wyzdrowiały)').eq(1).find('p').last().text()),
      dailyQuarantine: toNumber($('div.external-html:contains(osoby na kwarantannie)').find('p').last().text()),
    };
  });


  // go to page, wait for it to load and inject jQuery into page
  await page.goto(regionDetailedDataUrl, { waitUntil: 'networkidle0', timeout: 1000 * 120 });
  await page.waitForTimeout(10000);
  await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' });


  // get details funcion
  const regions = await page.evaluate(function () {
    const toNumber = (str) => parseInt(str.replace(/\D+/g, '')); // number parser

    // define keys for each region data
    const dataHeaders = ['name', 'population', 'cases', 'deceased', 'casesPer10K', 'deceasedCovidOnly', 'deceasedWithOtherDiseases', 'quarantied', 'testsDone', 'testsPositive', 'testsNegative', 'testsFromPOZ', 'testsOthers', 'recovered'];

    regionsDetails = [];
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
      regionsDetails.push(region)
      // regionsDetails[removePolishSigns(region["regionName"])] = region; // nested objects method
    }

    return regionsDetails;

  });

  // create date only field
  const statsDay = allData.sourceDate.split(" ")[0].split(".").reverse().join("-")
  const statsDate = new Date(statsDay)

  // putting all data into one 'data' object
  let data = {
    statsDate, statsDay, ...allData, regions
  };

  // close browser at finish
  await browser.close();
  return data

};

module.exports = crawler;