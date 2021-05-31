
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

fetch("/colors")
    .then(response => {
        return response.json()
    })
    .then(data => {

        data.forEach((color, i) => {
          color = "background-color: #" + color
          console.log(color)
          data[i] = color

        });

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

            data.forEach((color, i) => {
              color = "background-color: #" + color
              console.log(color)
              data[i] = color

            });

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
