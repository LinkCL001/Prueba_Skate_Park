const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const front = require("./rutas/front");
const apiget = require("./rutas/apiget");
const apipost = require("./rutas/apipost");

const port = process.env.PORT || 3000
const app = express()


app.listen(port, () => {
  console.log(`El servidor está inicializando en el puerto ${port}`)
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set("view engine", "handlebars");

app.use("/", express.static(__dirname + "/Assets/"));

app.engine(
  "handlebars",
  exphbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/component/",
    helpers: {
      mensajeBienvenida: () => `Bienvenido a Skate Park`,
    },
  })
);

app.get("/", (_, res) => {
  res.render("Dashboard", {});
});

app.use(apiget);
app.use(apipost)

app.use(front);


