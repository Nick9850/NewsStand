// Currents API
function fetchData() {
  console.log("inside fetch data");
  var url =
    "https://api.currentsapi.services/v1/latest-news?apiKey=FMFdCCVwVZ-6TYYMhaG4j_62G-wT-ftp_Dx00FgCgtekS6Wz";
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const html = data.news
        .map((artical) => {
          return `
              <div class="trending">
                  <p>${artical.title}</p>
                  <p>${artical.description}</p>
              </div>
              `;
        })
        .join("");
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
  console.log("hello");
}

function postData() {
  var url =
    "https://api.currentsapi.services/v1/latest-news?" +
    "language=us&" +
    "apiKey=FMFdCCVwVZ-6TYYMhaG4j_62G-wT-ftp_Dx00FgCgtekS6Wz";
  var req = new Request(url);
  fetch(req, {
    method: "POST",
    headers: {
      "Content-Type:": "application/json",
    },
    body: {
      name: "",
      job: "",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
// News API
var requestOptions = {
  method: "GET",
};

var params = {
  api_token: "hCFrFJecxlYxm8RgxEGwDdaJlZFDNkgw5ZU6vf6j",
  categories: "business,tech",
  search: "apple",
  limit: "50",
};

fetchData();
//postData();
// Moment JS- for the current day in the trending session
// var trending = document.querySelector(".currentday");
// var currentDay = moment().format("MMM Do YY");
// console.log(currentDay);
// trending.innerHTML = currentDay
// console.log(currentDay)

//var esc = encodeURIComponent;
//var query = Object.keys(params)
//    .map(function(k) {return esc(k) + '=' + esc(params[k]);})
//    .join('&');

//fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
//  .then(response => response.text())
//  .then(result => console.log(result))
//  .catch(error => console.log('error', error));
