const axios = require('axios');

export default function handler(req, res){
    const apiUrl = "https://mentalmars.com/guides/maurices-black-market-location-guide-borderlands-3/"

    axios
    .get(apiUrl)
    .then((response) => {
      const html = response.data;
      const content = parseHTML(html);
    //   console.log(content);

      res.json(content);
    })
    .catch((error) => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}

function parseHTML(html) {

    const root = parse(html)
    const info = root.querySelectorAll('')

    console.log(info);

  }