const express = require("express");
const db = require("./models");
const app = express();
//const session = require("express-session");
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
require("dotenv").config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(async (req, res, next) => {
  const user = await db.user.findFirst({where: { id:  req.session.userId }})
  req.user = user
  next()
})

app.use("/", routes);



db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
});

