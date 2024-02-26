import express from "express";
import morgan from "morgan";
import session from "express-session";
import ViteExpress from "vite-express";
import cors from 'cors';
import nodemailer from 'nodemailer';

const router = express.Router()
// const transporter = nodemailer.createTransport({
//   host: 'sandbox.smtp.mailtrap.io',
//   port: 2525,
//   auth: {
//     user: 'e5797655c31f5d',
//     pass: '5c813c3a85c62d'
//   }
  
// })

const transport = {
  host: 'sandbox.smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'e5797655c31f5d',
    pass: '5c813c3a85c62d'
  }
  
}

const transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages')
  }
})

router.post('/send', (req, res) => {
  let name = req.body.name
  let email = req.body.email
  let message = req.body.message
  let content = `name: ${name} \n email: ${email} \n message: ${message} `
  let mail = {
    from: name,
    to: 'webdev.lincolnbunker@gmail.com',  // Change to email address that you want to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})

const app = express();


app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router)
app.use(
  session({
    secret: 'mySpecialLilSecret',
    saveUninitialized: false,
    resave: false,
  })
);

import handlerFunctions from './controller.js'
//Routes

//login/logout routes

app.get('/api/session-check', handlerFunctions.sessionCheck)
app.post('/api/login', handlerFunctions.login)
app.get('/api/logout', handlerFunctions.logout)

app.post('/testimonial/add', handlerFunctions.addTestimonial)
app.get('/api/testimonials', handlerFunctions.getTestimonials)
app.get('/api/services', handlerFunctions.getServices)

//Run server
ViteExpress.listen(app, 8008, () => console.log("server running on http://localhost:8008"))

