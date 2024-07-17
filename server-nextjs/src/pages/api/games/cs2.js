const axios = require('axios');
const { parse } = require('node-html-parser');

export default async function handler(req, res) {
  const apiUrl = 'https://www.counter-strike.net/news/updates';

  try {
    // Make a GET request
    const response = await axios.get(apiUrl);
    const html = response.data;

    // Log the fetched HTML
    console.log(html);

    const content = parseHTML(html);

    console.log(content);

    res.json(html);
  } catch (error) {
    // Handle any errors that occurred during the request
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}

function parseHTML(html) {
  const root = parse(html);

  // Verify the correct selector by inspecting the HTML structure
  const updatesBox = root.querySelectorAll('.blogoverviewpage_SubUpdates_31uv5');

  // Log the updatesBox to check if elements are selected
  console.log('updatesBox:', updatesBox);

  const extractedHTML = [];

  // updatesBox.forEach((update, index) => {
  //   // Log each update to inspect its structure
  //   console.log(`Update ${index}:`, update.toString());

  //   const dateElement = update.querySelector('.updatecapsule_Title_13NfC');
  //   const date = dateElement ? dateElement.textContent : 'No date found';

  //   const dataList = {
  //     date: date,
  //   };

  //   extractedHTML.push(dataList);
  // });

  return updatesBox;
}
