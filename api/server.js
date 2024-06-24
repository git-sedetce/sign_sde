const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const cookieParser = require('cookie-parser')
require ('dotenv').config()

const app = express()
app.use(cookieParser())
app.use(express.json())

/*app.use(cors({
    credentials: true,
    origin: ['https://gestaorh.sde.ce.gov.br/', 'https://localhost:2823', 'http://gestaorh.sde.ce.gov.br/', 'http://localhost:2823']
}))*/

var corsOptions = {
    credentials: true,
    origin: ['https://gestaorh.sde.ce.gov.br', 'https://localhost:2823', 'http://gestaorh.sde.ce.gov.br/', 'http://localhost:2823'],
    optionsSuccessStatus: 200,
    methods: "GET, PUT, POST, DELETE",
    allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Access-Control-Allow-Origin"],
  };
  
app.use(cors(corsOptions))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const port = process.env.PORT

routes(app)

app.listen(port, () => console.log(`O servidor está On`))

module.exports = app