const baseURL = 'https://coolorsparty.herokuapp.com/'
const coolorsurl = 'https://coolors.co/generate'

let d = new Date();
document.body.innerHTML += "<h1>Today's date is " + d + "</h1>"



// const xhr = new XMLHttpRequest();
// const url = 'https://bar.other/resources/public-data/';
//
// xhr.open('GET', baseURL);
// xhr.onreadystatechange = someHandler;
// xhr.send();

getColors = () => {
  fetch(baseURL+coolorsurl)
    .then(response => response.json())
    .then(data => {
      console.log(data)
    })

  }

getColors()
