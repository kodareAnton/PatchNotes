const axios = require('axios');
const { parse } = require('node-html-parser');

export default function handler(req, res) {

  const apiUrl = 'https://www.counter-strike.net/news/updates';

  // Make a GET request
  axios
    .get(apiUrl)
    .then((response) => {
      const html = response.data;
      const content = parseHTML(html);

      console.log(content);

      res.json(html);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
  }

  function parseHTML(html) {

    const root = parse(html)
    const info = root.querySelectorAll('.updatecapsule_UpdateCapsule_-Eouv')

    console.log(info);

  }