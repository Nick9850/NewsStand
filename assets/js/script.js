


// Moment JS- for the current day in the trending session
var trending = document.querySelector(".currentday");
var currentDay = moment().format("MMM Do YY");
console.log(currentDay);
trending.innerHTML = currentDay
//console.log(currentDay)
