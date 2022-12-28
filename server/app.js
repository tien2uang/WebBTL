const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors");
const app = express();

const dbConfig = require('./config/db.config')
const { RoleModel } = require("./models/index");
const { 
  adminRouter,
  customerRouter, 
  factoryRouter, 
  orderRouter, 
  orderdetailsRouter, 
  productRouter, 
  productlineRouter, 
  productRecallRouter, 
  servicecenterRouter, 
  storeRouter, 
  warrantyRouter,
  CredentialRouter,
  AuthRouter 
} = require('./routers/index')


// view engine setup


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

// database
dbConfig.sync().then(() => {
  console.log('Successfully connect to DB');
  // initial();
});


// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use('/api/customer', customerRouter)
app.use('/api/factory', factoryRouter)
app.use('/api/admin', adminRouter)
app.use('/api/order', orderRouter)
app.use('/api/orderdetails', orderdetailsRouter)
app.use('/api/product', productRouter)
app.use('/api/productline', productlineRouter)
app.use('/api/productRecall', productRecallRouter)
app.use('/api/store', storeRouter)
app.use('/api/servicecenter', servicecenterRouter)
app.use('/api/warranty', warrantyRouter)
app.use('/api/auth', AuthRouter) 
app.use('/api/board', CredentialRouter)

// set port, listen for requests 
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


function initial() {
  RoleModel.create({
    id: 1,
    name: "admin"
  });
 
  RoleModel.create({
    id: 2,
    name: "factory"
  });
 
  RoleModel.create({
    id: 3,
    name: "store"
  });

  RoleModel.create({
    id: 4,
    name: "service center"
  });
}

