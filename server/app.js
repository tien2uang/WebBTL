const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const app = express();
const dbConfig = require('./config/db.config')
const { 
  adminRouter,
  factoryRouter, 
  servicecenterRouter, 
  storeRouter, 
  AuthRouter,
} = require('./routers/index')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var corsOptions = {
  origin: "http://localhost:8080"
};

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type,Accept'
  );
  next();
});

app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

dbConfig.sync().then(() => {
  console.log('Successfully connect to DB');
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use('/api/factory', factoryRouter)
app.use('/api/admin', adminRouter)
app.use('/api/store', storeRouter)
app.use('/api/servicecenter', servicecenterRouter)
app.use('/api/auth', AuthRouter) 

// set port, listen for requests 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
