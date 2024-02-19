import express from "express";
import morgan from "morgan";
import session from "express-session";
import ViteExpress from "vite-express";

const app = express();

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(
  session({
    secret: 'mySpecialLilSecret',
    saveUninitialized: false,
    resave: false,
  })
);

//Routes

//Run server
ViteExpress.listen(app, 8008, () => console.log("server running on http://localhost:8008"))

