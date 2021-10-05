/**
 * This is the file where we run the automatic tests
 * See responses in a comment at the end of the file
 */

let data = [
    {
      "WORD": "HELLO",
      "Ln": "en",
      "Res": "hello"
    },
    {
      "WORD": "WORLD",
      "Ln": "en-US",
      "Res": "world"
    },
    {
      "WORD": "cAmEl",
      "Ln": "en-IE",
      "Res": "camel"
    },
    {
      "WORD": "---OK",
      "Ln": "en-Latn",
      "Res": "---ok"
    },
    {
      "WORD": "tAcht",
      "Ln": "ga",
      "Res": "t-acht"
    },
    {
      "WORD": "tACHT",
      "Ln": "ga",
      "Res": "t-acht"
    },
    {
      "WORD": "TACHT",
      "Ln": "ga",
      "Res": "tacht"
    },
    {
      "WORD": "nAthair",
      "Ln": "ga",
      "Res": "n-athair"
    },
    {
      "WORD": "nATHAIR",
      "Ln": "ga",
      "Res": "n-athair"
    },
    {
      "WORD": "NATHAIR",
      "Ln": "ga",
      "Res": "nathair"
    },
    {
      "WORD": "nÓg",
      "Ln": "ga-IE",
      "Res": "n-óg"
    },
    {
      "WORD": "nÕg",
      "Ln": "ga-IE",
      "Res": "nõg"
    },
    {
      "WORD": "nÕg",
      "Ln": "ga-IE",
      "Res": "nõg"
    },
    {
      "WORD": "KASIM",
      "Ln": "tr",
      "Res": "kasım"
    },
    {
      "WORD": "KASIM",
      "Ln": "en",
      "Res": "kasim"
    },
    {
      "WORD": "ΠΌΛΗΣ",
      "Ln": "el",
      "Res": "πόλης"
    },
    {
      "WORD": "官话",
      "Ln": "zh-Hans",
      "Res": "官话"
    },
    {
      "WORD": "ภาษาไทย",
      "Ln": "th",
      "Res": "ภาษาไทย"
    }
  ]

  let resultString = '';
  console.log('Running tests--------------------------');
  for(let y = 0; y < data.length; y++){
    let word = lowerCaseWord(data[y].WORD, data[y].Ln, true);
    resultString += data[y].WORD + ' | ' + data[y].Ln + ' | ' + data[y].Res + ' == '+word;
    if(word === data[y].Res){
        resultString += ' | Passed &#x2713;';
    } else {
        resultString +=' | Failed &#x2717;';
    }

    console.log(resultString);
    resultString += '<br>'
  }
  console.log('Finishing tests--------------------------');

  document.getElementById('testResults').innerHTML = '<hr>'+ 'Test Results: <br><br>' + resultString;


  /**
   * Result:
    HELLO | en | hello == hello | Passed ✓
    WORLD | en-US | world == world | Passed ✓
    cAmEl | en-IE | camel == camel | Passed ✓
    ---OK | en-Latn | ---ok == ---ok | Passed ✓
    tAcht | ga | t-acht == t-acht | Passed ✓
    tACHT | ga | t-acht == t-acht | Passed ✓
    TACHT | ga | tacht == tacht | Passed ✓
    nAthair | ga | n-athair == n-athair | Passed ✓
    nATHAIR | ga | n-athair == n-athair | Passed ✓
    NATHAIR | ga | nathair == nathair | Passed ✓
    nÓg | ga-IE | n-óg == n-óg | Passed ✓
    nÕg | ga-IE | nõg == nõg | Passed ✓
    nÕg | ga-IE | nõg == n-õg | Failed ✗
    KASIM | tr | kasım == kasım | Passed ✓
    KASIM | en | kasim == kasim | Passed ✓
    ΠΌΛΗΣ | el | πόλης == πόλης | Passed ✓
    官话 | zh-Hans | 官话 == 官话 | Passed ✓
    ภาษาไทย | th | ภาษาไทย == ภาษาไทย | Passed ✓
   */
