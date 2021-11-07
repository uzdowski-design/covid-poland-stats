const puppeteer = require('puppeteer');

(async () => {

  // define URLs
  let detailsDataUrl = 'https://rcb-gis.maps.arcgis.com/apps/dashboards/e496f00bd8b947099ff95d9e26418a2c';
  const regionDataUrl = 'https://rcb-gis.maps.arcgis.com/apps/opsdashboard/index.html#/a0dd36f27d8c4fd895f4c1c78a6757f0';

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
      txtDate: $('div.external-html:contains(Dane pochodzą z Ministerstwa Zdrowia z dnia )').find('strong').text(),
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

  let data = {
    ...allData,
  };

  // Extract region data
  await page.goto(regionDataUrl, { waitUntil: 'networkidle0', timeout: 1000 * 120 });
  await page.waitForTimeout(10000);
  await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' });

  const infectedByRegion = await page.evaluate(function () {
    return $('div.widget.flex-vertical:contains(Osoby zakażone w województwach)')
      .find('div.external-html')
      .map(function () { return { infectedCount: $(this).find('strong').eq(0).text().trim(), region: $(this).find('span').eq(1).text().trim() }; })
      .get();
  });
  data.infectedByRegion = infectedByRegion;
  // In case infected and deceased not found, calculte it from region data
  if (!data.infected) {
    data.infected = data.infectedByRegion.map(({ infectedCount }) => infectedCount)
      .reduce((prev, cur) => {
        return prev + cur;
      }, 0);
  }


  console.log(data);

  // close browser at finish
  await browser.close();

})();