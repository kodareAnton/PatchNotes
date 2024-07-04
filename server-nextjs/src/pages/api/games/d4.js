const axios = require('axios');
const { parse } = require('node-html-parser');
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 360000 });

export default function handler(req, res) {
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
  }
  

  async function StoringCache(){
    const cacheKey = 'my-api-data';

  // Try to get data from cache
  let data = cache.get(cacheKey);

  if (data) {
    return res.status(200).json(data);
  }
  // If not in cache, fetch from API
  try {
    const response = await fetch('https://news.blizzard.com/en-us/diablo4/23964909/diablo-iv-patch-notes');
    data = await response.json();

    // Store the data in cache
    cache.set(cacheKey, data);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
  }