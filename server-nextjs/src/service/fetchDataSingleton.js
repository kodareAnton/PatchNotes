const axios = require('axios');
const { parse } = require('node-html-parser');

export const fetchDataSingleton = {

  finalsData: [],
  
  async fetchData() {
    while (true) {
      console.log("24 hours");
      this.finalsData = this.fetchFinals();
      await new Promise((_) => setTimeout(_, 100000));
    }
  },

  async fetchFinals() {
    const BaseApi = `https://www.reachthefinals.com/patch-notes-`;

    // looping throu number and checking when 404 status comes to get out all of the updates
    let i = 0;
    let content = [];

    while (true) {
      try {
        const response = await axios.get(BaseApi + ++i);
        content.push(parseHTML(response.data));
      } catch (error) {
        console.log(typeof(error));
        if (error.response === undefined || error.response.status === 404) {
          break;
        }
      }
    }
    return content

    function parseHTML(html) {
      const root = parse(html);
      const pachnote = root.querySelector(".sqs-html-content").toString();

      const patchnote = {
        content: pachnote.replace(
          '<h1 style="white-space:pre-wrap;">GAME UPDATES</h1>',
          ""
        ),
      };
      return patchnote;
    }
  },
};
