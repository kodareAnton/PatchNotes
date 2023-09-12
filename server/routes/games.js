var express = require('express');
var router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const { parse } = require('node-html-parser');

router.get('/', function (req, res, next) {
  const Html = `
  <h1>Välkommen till min Patchnotes backend!</h1>
  `;
  res.send(Html);
});

// Diablo 4 end tag
router.get('/d4', function (req, res, next) {
  const apiUrl =
    'https://news.blizzard.com/en-us/diablo4/23964909/diablo-iv-patch-notes';

  // Make a GET request
  axios
    .get(apiUrl)
    .then((response) => {
      const htmlContent = response.data;

      // const $ = cheerio.load(htmlContent)
      // const patchnotes = $('.ResponsiveBlogs').html();
      // const p = $('summary').html();
      // console.log(p);

      res.json('D5');
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
});

// CounterStrike end tag
router.get('/cs', function (req, res) {
  const apiUrl = 'https://blog.counter-strike.net/index.php/category/updates/';

  // Make a GET request
  axios
    .get(apiUrl)
    .then((response) => {
      const html = response.data;
      const content = parseHTML(html);

      console.log(content);

      res.json(content);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });

  function parseHTML(html) {
    var sendArray = [];

    const root = parse(html);
    root.querySelectorAll('.inner_post').map((inner_post) => {
      const patchNumber = inner_post.querySelector('a').innerText;
      const p = inner_post.querySelectorAll('p');

      const pp = p.map((p) => {
        console.log(p.innerText);
        return p.innerText;
      });

      const newArray = splitStringArrayOnDelimiter(pp);
      const sec = splitStringArrayOnDelimiter(newArray, '&#8211')

      console.log(sec);

      sendArray.push({
        patchNumber: patchNumber,
        info: sec,
        date: sec[0].slice(0, 10),
        title: sec[1],
      });
    });

    return sendArray;
  }
});

function splitStringArrayOnDelimiter(strArr, delimiter = '\n') {

  const splitArr = []

  strArr.forEach((ele) => {
    const split = ele.split(delimiter);
    splitArr.push(...split)
  });

  return splitArr
}

// OverWatch 2 end tag
router.get('/overwatch', function (req, res, next) {
  apiUrl = 'https://overwatch.blizzard.com/en-us/news/patch-notes/';

  // Make a GET request
  axios
    .get(apiUrl)
    .then((response) => {
      const htmlContent = response.data;

      res.send(htmlContent);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
});

module.exports = router;
