var newslist = []
var startnum = 0 
var endnum = 4


function showdata(direction){
  document.querySelector("#news-box") .innerHTML = ""
   const html = newslist
     .map((artical, i) => {
      //  if (i >= endnum && i <= startnum) {
      //    // Limiting the string of news
      //    return;
      //  }
       return `
              <div class="box">
                  <h1 class = " article-title">${artical.title}</h1>
                  <p class = " article-description" >${artical.description}</p>
                  <img  class="img" src= "${artical.image}">
              </div>
              `;
     })
     .slice(startnum, endnum)
     //.filter((item) => item) // filtering out empty items
     .join("");
     if (direction === "next" && endnum + 4 < newslist.length){
      startnum += 4
      endnum += 4
      
      
     }
     else if(direction === "prev" && startnum -4 >= 0){
       startnum -= 4;
       endnum -= 4;
       
     }

   document.querySelector("#news-box").insertAdjacentHTML("afterbegin", html);
}

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
      newslist = data.news
      showdata()
      // const html = data.news
      //   .map((artical, i) => {
      //     if( i >= 4){ // Limiting the string of news
      //       return;
      //     }
      //     return `
      //         <div class="box">
      //             <h1>${artical.title}</h1>
      //             <p>${artical.description}</p>
      //             <img  class="img" src= "${artical.image}">
      //         </div>
      //         `;
      //   })
      //  .filter(item => item) // filtering out empty items
      //   .join("");
      // document
      //   .querySelector("#news-box")
      //   .insertAdjacentHTML("afterbegin", html);
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

//Moment JS- for the current day in the trending session
var trending = document.querySelector(".currentday");
var currentDay = moment().format("LLLL");
console.log(currentDay);
trending.textContent = currentDay
console.log(currentDay)

//Nav buttons for Currents API - scrolls through the articles

var nextbtn = document.querySelector("#next");
var prevbtn = document.querySelector("#prev");

nextbtn.addEventListener("click", function(){
showdata("next")

})
prevbtn.addEventListener("click", function(){
  showdata("prev")
})

//Weather API
function searchFromApi() {
  var inputs = document.querySelector("#weather-input");
  console.log(inputs);
  var inputValue = inputs.value;
  var apiKey = "041178dcf4de97eb135ec7c055f2f00a";
  var queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    inputValue +
    "&appid=" +
    apiKey;

  //Fetch function
  fetch(queryURL) // Fetch Data
    .then(function (response) {
      // Promise has been resolve sucessfully
      return response.json(); // parse the response to be an object/promise
    })

    .then(function (data) {
      // new promise has been resolved
      console.log(data);
      searchFromCoordinate(data.coord.lon, data.coord.lat); // data holds the responses from the API
    });
}

// //Current Weather- Calling the current weather
// function searchFromCoordinate(lon, lat) {
//   var apiKey = "041178dcf4de97eb135ec7c055f2f00a";
//   var inputs = document.querySelector("#weather-input");
//   fetch(
//     "https://api.openweathermap.org/data/2.5/onecall?lat=" +
//       lat +
//       "&lon=" +
//       lon +
//       "&appid=" +
//       apiKey +
//       "&units=imperial"
//   )
//     .then(function (response) {
//       // Promise has been resolve sucessfully
//       return response.json(); // parse the response to be an object/promise
//     })

//     .then(function (data) {
//       // new promise has been resolved
//       console.log(data);
//       document.querySelector("#temp-display").textContent =
//         data.current.temp + "°F";
//       document.querySelector("#city-display").textContent = inputs.value;
//       document.querySelector("#humidity").textContent =
//         "Humidity " + data.current.humidity + "%";
//       document.querySelector("#wind-speed").textContent =
//         "Wind Speed " + data.current.wind_speed + " mph ";
//       document.querySelector("#uvindex").textContent =
//         "UVI " + data.current.uvi;
//     });
// }