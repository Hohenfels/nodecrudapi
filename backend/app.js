const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const stuffRoute = require("./routes/stuff");
const authRoute = require("./routes/auth");

const app = express();

/* Connection a la base de donnees */
mongoose
  .connect(
    "mongodb+srv://Hohenfels:abcd@cluster0.agvzi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

/* Implementation du CORS avec les permissions pour API CRUD */
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.json());

/* Routing pour dossier static /images */
app.use("/images", express.static(path.join(__dirname, "images")));

/* Routing pour les pages communes */
app.use("/api/stuff", stuffRoute);

/* Routing pour l'authentification */
app.use("/api/auth", authRoute);

module.exports = app;
