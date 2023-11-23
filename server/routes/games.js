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
          const title = detail.querySelector('summary').textContent;

          // making my array
          const detailData = {
            patchNumber: title,
            content: detail.innerHTML,
          };
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
      const datePost = inner_post.querySelector('.post_date');
      const imgDate = datePost.innerHTML;

      const p = inner_post.querySelectorAll('p');
      p[0].remove();

      const pp = p.map((p) => {
        return p.innerText;
      });

      const newArray = splitStringArrayOnDelimiter(pp);
      const sec = splitStringArrayOnDelimiter(newArray, '&#8211');

      sendArray.push({
        patchNumber: patchNumber,
        csLogo: imgDate.slice(15),
        info: pp,
      });
    });

    return sendArray;
  }
});

router.get('/cs2', function (req, res) {
  const apiUrl = 'https://www.counter-strike.net/news/updates?l=english';

  // Make a GET request
  axios
    .get(apiUrl)
    .then((response) => {
      const html = response.data;
      const content = parseHTML(html);

      res.json(content);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });

    function parseHTML(html) {

      var sendArray = [];
  
      const root = parse(html);
      root.querySelectorAll('.updatecapsule_UpdateCapsule_-Eouv').map((inner_post) => {

        const title = inner_post.querySelector('.updatecapsule_Title_13NfC')
        console.log(title);
      
      sendArray.push({
        title: 'hej',
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
      console.log(content);
      res.send(content);

      function parseHTML(html) {
        const root = parse(html);
        const details = root.querySelector('.PatchNotes-body');

        // looping ever detail html tag
        const extractedHTML = [];

        const patchnotes = details.querySelectorAll('.PatchNotes-live');

        patchnotes.forEach((patchnote) => {

          // taking out the head title in every sector
          const title = patchnote.querySelector(
            '.PatchNotes-patchTitle'
          ).innerText;

          const patchnotesSections = patchnote.querySelectorAll('.PatchNotes-section')
          const patchnotesSection = patchnotesSections.forEach((patchnotesection)=>{

            var sectionList = []
            
            const PatchNotesSectionTitle = patchnotesection.querySelector('.PatchNotes-sectionTitle').innerText

            const detailData = {
              patchNotesTitle: PatchNotesSectionTitle
            }
            sectionList.push(detailData)
            return sectionList

          })

          // making my array
          const detailData = {
            content: patchnote.toString(),
            title: title,
            sections: 'section'
          };
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

module.exports = router;
