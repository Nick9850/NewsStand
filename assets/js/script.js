<<<<<<< HEAD
var url = 'https://api.currentsapi.services/v1/latest-news?' +
'language=us&' +
'apiKey=FMFdCCVwVZ-6TYYMhaG4j_62G-wT-ftp_Dx00FgCgtekS6Wz';
var req = new Request(url);
fetch(req)
.then(function(response) {
    console.log(response.json());
})
=======



// Moment JS- for the current day in the trending session
var trending = document.querySelector(".currentday");
var currentDay = moment().format("MMM Do YY");
console.log(currentDay);
trending.innerHTML = currentDay
//console.log(currentDay)
>>>>>>> 2a309411a382110173676d8ab40abd7f892abf3d
