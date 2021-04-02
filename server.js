const express = require("express");
const db = require("./models");
const app = express();
const session = require("express-session");
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
require("dotenv").config();

app.set("view engine", "ejs");

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

app.get("/", function (req, res) {
  res.render("pages/auth");
});

db.sequelize.sync().then((req) => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });
});

const passport = require('passport');
var userProfile;
console.log (userProfile);

app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

app.get('/success', (req, res) => res.send(userProfile));
app.get('/error', (req, res) => res.send("error logging in"));

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = '341203008031-9plv62cjqc2uj6qbg2aqmv8dk17amd0l.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'JW0_z2E2nNDjni_pb0cd83K4';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, done) {
      userProfile=profile;
      return done(null, userProfile);
  }
));
 
app.get('/auth/google', 
  passport.authenticate('google', { scope : ['profile', 'email'] }));
 
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/error' }),
  function(req, res) {
    // Successful authentication, redirect success.
    res.redirect('/success');
  });