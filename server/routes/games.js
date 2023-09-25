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
      const html = response.data;
      const content = parseHTML(html);

      res.send(content);

      function parseHTML(html) {
        const root = parse(html);
        const details = root.querySelectorAll('details');

        // looping ever detail html tag
        const extractedHTML = [];
        
        details.forEach((detail) => {
          const title = detail.querySelector('summary').textContent
   
          // making my array
          const detailData = {
            patchNumber: title,
            content: detail.innerHTML,
          }
          extractedHTML.push(detailData);
        });

        return extractedHTML;
        
        // const AllPatchNotes = article.querySelector('details')
      }
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
      const datePost = inner_post.querySelector('.post_date')
      const date = datePost.innerText
      const imgDate = datePost.innerHTML


      const p = inner_post.querySelectorAll('p');
      p[0].remove();

      console.log(p);


      const pp = p.map((p) => {
        
        return p.innerText;
      });

      const newArray = splitStringArrayOnDelimiter(pp);
      const sec = splitStringArrayOnDelimiter(newArray, '&#8211');

      console.log(sec);

      sendArray.push({
        patchNumber: patchNumber,
        postDate: date,
        csLogo: imgDate,
        info: pp
      });
    });

    return sendArray;
  }
});

function splitStringArrayOnDelimiter(strArr, delimiter = '\n') {
  const splitArr = [];

  strArr.forEach((ele) => {
    const split = ele.split(delimiter);
    splitArr.push(...split);
  });

  return splitArr;
}

// OverWatch 2 end tag
router.get('/overwatch2', function (req, res, next) {
  apiUrl = 'https://overwatch.blizzard.com/en-us/news/patch-notes/';

  // Make a GET request
  axios
    .get(apiUrl)
    .then((response) => {
      const html = response.data;
      const content = parseHTML(html);

      res.send(content);

      function parseHTML(html) {
        const root = parse(html);
        const details = root.querySelectorAll('.PatchNotes-body');

        // looping ever detail html tag
        const extractedHTML = [];
        
        details.forEach((detail) => {
          const patchnotesBox = detail.querySelectorAll('PatchNotes-patch PatchNotes-live')
          // patchnotesBox.map((patchnote)=>{

          //   const title = patchnote.querySelector('.PatchNotes-patchTitle')

          //   // making my array
          //   const detailData = {
          //     patchNumber: title,
          //   // content: detail.innerHTML,
          // }
          // extractedHTML.push(detailData);
          // })
        });

        return extractedHTML;
        // const AllPatchNotes = article.querySelector('details')
      }
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
});

module.exports = router;
