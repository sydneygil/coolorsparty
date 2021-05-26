// const baseURL = 'https://coolors.co/242038-9067c6-8d86c9-cac4ce-f7ece1';

public static void main(String[] args) throws ScriptException, IOException {

    StringWriter writer = new StringWriter(); //ouput will be stored here

    ScriptEngineManager manager = new ScriptEngineManager();
    ScriptContext context = new SimpleScriptContext();

    context.setWriter(writer); //configures output redirection
    ScriptEngine engine = manager.getEngineByName("python");
    engine.eval(new FileReader("getCoolors.py"), context);
    System.out.println(writer.toString());
}


// getColors();
