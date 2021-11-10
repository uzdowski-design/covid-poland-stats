const data = {
  statsDate: '2021-11-10',
  lastUpdateDate: '2021-11-10 00:06',
  sourceDate: '09.11.2021 10:30',
  infected: 3125179,
  deceased: 77980,
  recovered: 2758458,
  dailyInfected: 13644,
  dailyTested: 76080,
  dailyPositiveTests: 14881,
  dailyDeceased: 220,
  dailyRecovered: 7587,
  dailyQuarantine: 381895,
  detailsByRegion: {
    opolskie: {
      regionName: 'opolskie',
      population: 986506,
      cases: 205,
      deceased: 3,
      casesPer10K: 209,
      deceasedCovidOnly: 1,
      deceasedWithOtherDiseases: 2,
      quarantied: 7273,
      testsDone: 1438,
      testsPositive: 233,
      testesNegative: 1201,
      testsFromPOZ: 862,
      testsOthers: 4,
      recovered: 147
    },
    swietokrzyskie: {
      regionName: 'świętokrzyskie',
      population: 1241546,
      cases: 264,
      deceased: 6,
      casesPer10K: 215,
      deceasedCovidOnly: 1,
      deceasedWithOtherDiseases: 5,
      quarantied: 6657,
      testsDone: 1921,
      testsPositive: 295,
      testesNegative: 1612,
      testsFromPOZ: 897,
      testsOthers: 14,
      recovered: 110
    },
    'kujawsko-pomorskie': {
      regionName: 'kujawsko-pomorskie',
      population: 2077775,
      cases: 770,
      deceased: 14,
      casesPer10K: 372,
      deceasedCovidOnly: 0,
      deceasedWithOtherDiseases: 14,
      quarantied: 15395,
      testsDone: 4315,
      testsPositive: 839,
      testesNegative: 3444,
      testsFromPOZ: 2106,
      testsOthers: 32,
      recovered: 258
    },
    mazowieckie: {
      regionName: 'mazowieckie',
      population: 5403412,
      cases: 2823,
      deceased: 28,
      casesPer10K: 52,
      deceasedCovidOnly: 7,
      deceasedWithOtherDiseases: 21,
      quarantied: 91570,
      testsDone: 13247,
      testsPositive: 3135,
      testesNegative: 9961,
      testsFromPOZ: 7206,
      testsOthers: 151,
      recovered: 1764
    },
    pomorskie: {
      regionName: 'pomorskie',
      population: 2333523,
      cases: 858,
      deceased: 2,
      casesPer10K: 366,
      deceasedCovidOnly: 0,
      deceasedWithOtherDiseases: 2,
      quarantied: 26218,
      testsDone: 4421,
      testsPositive: 912,
      testesNegative: 3470,
      testsFromPOZ: 2298,
      testsOthers: 39,
      recovered: 289
    },
    slaskie: {
      regionName: 'śląskie',
      population: 4533565,
      cases: 859,
      deceased: 20,
      casesPer10K: 191,
      deceasedCovidOnly: 10,
      deceasedWithOtherDiseases: 10,
      quarantied: 25753,
      testsDone: 6349,
      testsPositive: 947,
      testesNegative: 5353,
      testsFromPOZ: 3581,
      testsOthers: 49,
      recovered: 415
    },
    'warminsko-mazurskie': {
      regionName: 'warmińsko-mazurskie',
      population: 1428983,
      cases: 607,
      deceased: 11,
      casesPer10K: 427,
      deceasedCovidOnly: 2,
      deceasedWithOtherDiseases: 9,
      quarantied: 15986,
      testsDone: 3063,
      testsPositive: 646,
      testesNegative: 2397,
      testsFromPOZ: 1915,
      testsOthers: 20,
      recovered: 225
    },
    zachodniopomorskie: {
      regionName: 'zachodniopomorskie',
      population: 1701030,
      cases: 699,
      deceased: 5,
      casesPer10K: 413,
      deceasedCovidOnly: 0,
      deceasedWithOtherDiseases: 5,
      quarantied: 20269,
      testsDone: 3778,
      testsPositive: 779,
      testesNegative: 2962,
      testsFromPOZ: 2282,
      testsOthers: 37,
      recovered: 455
    },
    dolnoslaskie: {
      regionName: 'dolnośląskie',
      population: 2901225,
      cases: 704,
      deceased: 8,
      casesPer10K: 243,
      deceasedCovidOnly: 3,
      deceasedWithOtherDiseases: 5,
      quarantied: 20473,
      testsDone: 4695,
      testsPositive: 781,
      testesNegative: 3885,
      testsFromPOZ: 2465,
      testsOthers: 29,
      recovered: 415
    },
    wielkopolskie: {
      regionName: 'wielkopolskie',
      population: 3493969,
      cases: 783,
      deceased: 9,
      casesPer10K: 224,
      deceasedCovidOnly: 1,
      deceasedWithOtherDiseases: 8,
      quarantied: 28797,
      testsDone: 4755,
      testsPositive: 815,
      testesNegative: 3895,
      testsFromPOZ: 3357,
      testsOthers: 45,
      recovered: 394
    },
    lodzkie: {
      regionName: 'łódzkie',
      population: 2466322,
      cases: 795,
      deceased: 14,
      casesPer10K: 325,
      deceasedCovidOnly: 5,
      deceasedWithOtherDiseases: 9,
      quarantied: 24891,
      testsDone: 5435,
      testsPositive: 873,
      testesNegative: 4525,
      testsFromPOZ: 2673,
      testsOthers: 37,
      recovered: 433
    },
    podlaskie: {
      regionName: 'podlaskie',
      population: 1181533,
      cases: 640,
      deceased: 10,
      casesPer10K: 544,
      deceasedCovidOnly: 0,
      deceasedWithOtherDiseases: 10,
      quarantied: 21844,
      testsDone: 2511,
      testsPositive: 700,
      testesNegative: 1799,
      testsFromPOZ: 2256,
      testsOthers: 12,
      recovered: 619
    },
    malopolskie: {
      regionName: 'małopolskie',
      population: 3400577,
      cases: 1011,
      deceased: 23,
      casesPer10K: 296,
      deceasedCovidOnly: 12,
      deceasedWithOtherDiseases: 11,
      quarantied: 19637,
      testsDone: 5315,
      testsPositive: 1087,
      testesNegative: 4196,
      testsFromPOZ: 2555,
      testsOthers: 32,
      recovered: 386
    },
    lubuskie: {
      regionName: 'lubuskie',
      population: 1014548,
      cases: 264,
      deceased: 2,
      casesPer10K: 261,
      deceasedCovidOnly: 0,
      deceasedWithOtherDiseases: 2,
      quarantied: 9191,
      testsDone: 1952,
      testsPositive: 300,
      testesNegative: 1640,
      testsFromPOZ: 1015,
      testsOthers: 12,
      recovered: 96
    },
    podkarpackie: {
      regionName: 'podkarpackie',
      population: 2129015,
      cases: 606,
      deceased: 1,
      casesPer10K: 285,
      deceasedCovidOnly: 0,
      deceasedWithOtherDiseases: 1,
      quarantied: 15853,
      testsDone: 4229,
      testsPositive: 660,
      testesNegative: 3550,
      testsFromPOZ: 1842,
      testsOthers: 19,
      recovered: 350
    },
    lubelskie: {
      regionName: 'lubelskie',
      population: 2117619,
      cases: null,
      deceased: 64,
      casesPer10K: 763,
      deceasedCovidOnly: 16,
      deceasedWithOtherDiseases: 48,
      quarantied: 32006,
      testsDone: 5976,
      testsPositive: 1716,
      testesNegative: 4222,
      testsFromPOZ: 4081,
      testsOthers: 38,
      recovered: 1174
    }
  }
}

// check if object has all data (no nulls or undefined)
const checkObjHasData = (obj) => {
  let result = true;
  for (let [key, value] of Object.entries(obj)) {
    if (value === null || value === undefined) result = false
  }
  return result
}

// check if one object has data
// let result = checkObjHasData(data.detailsByRegion.opolskie)
// console.log(result)

// check if all regions have all data
for (let key in data.detailsByRegion) {
  console.log(checkObjHasData(data.detailsByRegion[key]))
}
// if all data is there we can update database (so we don't overwrite legitimate data with corrupted data)