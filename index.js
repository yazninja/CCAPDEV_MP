const express = require("express");
const app = express();
const Handlebars = require('handlebars');
const { engine } = require("express-handlebars");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
const res = require("express/lib/response");
// Mongoose
const mongoose = require('mongoose');
const dbURL = 'mongodb://localhost:27017/pesotrack';
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(dbURL, options, function () {
    console.log("Connected to DB @ " + dbURL);
});
const appRouter = require('./routes/appRoutes');
// const session = require('express-session');
// const flash = require('connect-flash');
// const MongoStore = require('connect-mongo')(session);
// var user = new User();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname = "./public"));
// Session  
// app.use(session({
//     secret: 'somegibberishsecret',
//     store: new MongoStore({ mongooseConnection: mongoose.connection }),
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 }
// }));
// Flash
// app.use(flash());

// Global messages vars
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   next();
// });

app.set("view engine", "hbs");
app.engine("hbs", engine({ extname: "hbs", handlebars: allowInsecurePrototypeAccess(Handlebars) }));

app.get("/", function (req, res) {
    console.log("#Home Page");
    res.render("index", { title: 'PesoTrack', layout: 'start' });
});
app.use("/app", appRouter);

const port = 3000;
app.listen(port, function () {
    console.log("Listening on port " + port);
});
