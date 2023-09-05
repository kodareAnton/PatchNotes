var express = require('express');
var router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
var HTMLParser = require('node-html-parser');
const { parse } = require('node-html-parser')

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

      var sendArray = []

      const html = response.data
      const content = parseHTML(html)

      
      res.send(content)
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });

    function parseHTML(html){
      const root = parse(html);
      const contentElement = root.querySelector('#post_container');

      if (contentElement){
        return contentElement.innerHTML
      } else{
        return 'content not found'
      }
    }
});

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
