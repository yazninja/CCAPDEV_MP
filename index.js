const express = require("express");
const app = express();
const Handlebars = require('handlebars');
const { engine } = require("express-handlebars");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access')
// Routers
const appRouter = require('./routes/appRoutes');
const authRouter = require('./routes/auth');
const { isPublic } = require('./middlewares/checkAuth');
const session = require('express-session');
const flash = require('connect-flash');
const MongoStore = require('connect-mongo');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname = "./public"));
// Session  
app.use(session({
    secret: '47594fcfb4557e880d9158b01fa75e2b1c1dfe725da5000001fabc472244de2c', // secret key= SHA256(pesotrack)
    store: MongoStore.create({ mongoUrl: 'mongodb://localhost:27017/pesotrack' }),
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 7 }
}));
// Flash
app.use(flash());

// Global messages vars
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

app.set("view engine", "hbs");
app.engine("hbs", engine({ extname: "hbs", handlebars: allowInsecurePrototypeAccess(Handlebars) }));

app.get("/", isPublic, function (req, res) {
    console.log("#Home Page");
    res.render("index", { title: 'PesoTrack', layout: 'start' });
});
app.use("/", appRouter);
app.use("/", authRouter);

const port = 3000;
app.listen(port, function () {
    console.log("Listening on port " + port);
});
