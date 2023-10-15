export default function handler(req, res) {
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
  }
  