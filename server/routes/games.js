var express = require("express");
var router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');

// Diablo 4 end tag
router.get('/d4', function (req, res, next){
apiUrl = 'https://news.blizzard.com/en-us/diablo4/23964909/diablo-iv-patch-notes'

// Make a GET request
axios.get(apiUrl)
.then(response => {
    const htmlContent = response.data;
    
    res.send(htmlContent)
})
.catch(error => {
  // Handle any errors that occurred during the request
  console.error('Error:', error);
});



})

// CounterStrike end tag
router.get('/cs', function (req, res, next){
    apiUrl = 'https://blog.counter-strike.net/index.php/category/updates/'
    
    // Make a GET request
    axios.get(apiUrl)
    .then(response => {
        const htmlContent = response.data;
        
        res.send(htmlContent)
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
})

// OverWatch 2 end tag
router.get('/overwatch', function (req, res, next){
                apiUrl = 'https://overwatch.blizzard.com/en-us/news/patch-notes/'
                
                // Make a GET request
                axios.get(apiUrl)
                .then(response => {
                  const htmlContent = response.data;
                  
                  res.send(htmlContent)
                })
                .catch(error => {
                // Handle any errors that occurred during the request
                console.error('Error:', error);
                });
})

module.exports = router;