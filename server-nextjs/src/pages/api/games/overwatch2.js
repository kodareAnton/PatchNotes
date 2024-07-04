import { fetchDataSingleton } from '@/service/fetchDataSingleton';

const axios = require('axios');
const { parse } = require('node-html-parser');

export default function handler(req, res) {

        const apiUrl = 'https://overwatch.blizzard.com/en-us/news/patch-notes/';
      
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
}