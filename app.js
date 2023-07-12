const express = require("express");
const app = express();
const path = require("path");
const PORT = 3030;

app.use(express.static("public"));
app.listen(PORT, () => console.log("Servidor corriendo en http://localhost" + PORT));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "views", "home.html")));
app.get("/*", (req, res) => res.sendFile(path.join(__dirname, "views", "404.html")));