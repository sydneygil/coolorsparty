
// const baseURL = 'https://coolors.co/242038-9067c6-8d86c9-cac4ce-f7ece1';

// public static void main(String[] args) throws ScriptException, IOException {

//     StringWriter writer = new StringWriter(); //ouput will be stored here

//     ScriptEngineManager manager = new ScriptEngineManager();
//     ScriptContext context = new SimpleScriptContext();

//     context.setWriter(writer); //configures output redirection
//     ScriptEngine engine = manager.getEngineByName("python");
//     engine.eval(new FileReader("getCoolors.py"), context);
//     System.out.println(writer.toString());
// }


// getColors();

let colorArr = [];

fetch("/colors")
    .then(response => {
        return response.json()
    })
    .then(data => {

        let data1 = [];

        data.forEach((color, i) => {
          data1[i] = "#" + color
          color = "background-color: #" + color
          console.log(color)
          data[i] = color
        });

        // copies the colors generated into a global variable 
        for (let i=0; i < data1.length; i++ ) {
            colorArr[i] = data1[i];
        }

        document.querySelector('#color-table').innerHTML = `
            <thead>
                <th id="color-1" style="${data[0]}"></th>
                <th id="color-2" style="${data[1]}"></th>
                <th id="color-3" style="${data[2]}"></th>
                <th id="color-4" style="${data[3]}"</th>
                <th id="color-5" style="${data[4]}"></th>
            </thead>
        `;
    })


document.querySelector('#generate-button').onclick = ev => {
    fetch("/colors")
        .then(response => {
            return response.json()
        })
        .then(data => {

            let data1 = []

            data.forEach((color, i) => {
              data1[i] = "#" + color
              color = "background-color: #" + color
              console.log(color)
              data[i] = color

            });

            // copies the colors generated into a global variable 
            for (let i=0; i < data1.length; i++ ) {
                colorArr[i] = data1[i];
            }

            document.querySelector('#color-table').innerHTML = `
                <thead>
                    <th id="color-1" style="${data[0]}"></th>
                    <th id="color-2" style="${data[1]}"></th>
                    <th id="color-3" style="${data[2]}"></th>
                    <th id="color-4" style="${data[3]}"</th>
                    <th id="color-5" style="${data[4]}"></th>
                </thead>
            `;
        })
}

document.querySelector('#apply-button').onclick = ev => {
    console.log("apply button clicked", colorArr)

    h1 = document.styleSheets[0].cssRules[0].style;
    h6 = document.styleSheets[0].cssRules[1].style;
    background = document.styleSheets[0].cssRules[2].style;
    apply = document.styleSheets[0].cssRules[3].style;
    generate = document.styleSheets[0].cssRules[4].style;
    highlight = document.styleSheets[0].cssRules[5].style;


    h1.setProperty('color', `${colorArr[4]}`, 'important')
    h6.setProperty('color', `${colorArr[3]}`, 'important')

    h1.setProperty('background-color', `${colorArr[2]}`)
    background.setProperty('background-color', `${colorArr[2]}`)

    apply.setProperty('background-color', `${colorArr[1]}`)
    generate.setProperty('background-color', `${colorArr[1]}`)

    highlight.setProperty('background',   `${colorArr[0]}`)



}
