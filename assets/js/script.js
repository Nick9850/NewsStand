<<<<<<< HEAD
var url = 'https://api.currentsapi.services/v1/latest-news?' +
'language=us&' +
'apiKey=FMFdCCVwVZ-6TYYMhaG4j_62G-wT-ftp_Dx00FgCgtekS6Wz';
var req = new Request(url);
fetch(req)
.then(function(response) {
    console.log(response.json());
})

// News API
var requestOptions = {
    method: 'GET'
};

var params = {
    api_token: 'hCFrFJecxlYxm8RgxEGwDdaJlZFDNkgw5ZU6vf6j',
    categories: 'business,tech',
    search: 'apple',
    limit: '50'
};

var esc = encodeURIComponent;
var query = Object.keys(params)
    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
    .join('&');

fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
