var url = 'https://api.currentsapi.services/v1/latest-news?' +
'language=us&' +
'apiKey=FMFdCCVwVZ-6TYYMhaG4j_62G-wT-ftp_Dx00FgCgtekS6Wz';
var req = new Request(url);
fetch(req)
.then(function(response) {
    console.log(response.json());
})