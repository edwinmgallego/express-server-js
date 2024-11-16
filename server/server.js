const express = require("express");
const app = express();

app.use(express.static("public"));

// Ruta básica
app.get("/", (req, res) => {
  res.sendFile("index.html", { root: __dirname });

  console.log("estoy en  index.html");
});
/*
app.get("/", (req, res) => {
  /*res.sendFile("index.html", {
    root: "..",
  });
  res.sendFile("index.html", {
    root: "../public",
  });
  res.end("hola  esta es un servidor de express");
  console.log("servidor encontrado");
});*/

app.get("/skills", (req, res) => {
  res.sendFile("skills.html", {
    root: "../public",
  });
  //res.send("acerca de");
  //console.log("servidor encontrado");
});
app.get("/contact", (req, res) => {
  res.sendFile("contact.html", {
    root: "../public",
  });
  //res.send("acercade");
  //console.log("servidor encontrado");
});

app.use((req, res) => {
  res.status(404).send("404 usuario no encontrado");
});
app.listen(3000);
console.log(`Server en el puerto ${3000}`);
