const express = require("express");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
const session = require("express-session");
require("dotenv").config();

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "SECRET",
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", routes);

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
});

