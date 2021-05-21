const baseURL = 'https://coolors.co/generate';

let d = new Date();
document.body.innerHTML = "<h1>Today's date is " + d + "</h1>"

getColors = () => {
  fetch(baseURL)
    .then(response => response.json())
    .then(data => {

    })

  }
