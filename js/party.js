// const baseURL = 'https://coolors.co/242038-9067c6-8d86c9-cac4ce-f7ece1';

let d = new Date();
document.body.innerHTML += "<h1>Today's date is " + d + "</h1>"

getColors = () => {
  fetch(baseURL)
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

}


// getColors();