var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

const { 
  customerRouter, 
  factoryRouter, 
  orderRouter, 
  orderdetailsRouter, 
  productRouter, 
  productlineRouter, 
  productRecallRouter, 
  servicecenterRouter, 
  storeRouter, 
  warrantyRouter 
} = require('./routers/index')

var app = express();

// const sequelize = new Sequelize('sql12579153', 'sql12579153', 'PyRh4gTzdP', {
//   host: 'sql12.freesqldatabase.com',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */ 'mysql'
// });

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

const PORT = process.env.PORT || 8080

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin','*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type,Accept'
  );
  next();
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

const sequelize = require('./config/db.config')


app.use('/api/customer', customerRouter)
app.use('/api/factory', factoryRouter)
app.use('/api/order', orderRouter)
app.use('/api/orderdetails', orderdetailsRouter)
app.use('/api/product', productRouter)
app.use('/api/productline', productlineRouter)
app.use('/api/productRecall', productRecallRouter)
app.use('/api/store', storeRouter)
app.use('/api/servicecenter', servicecenterRouter)
app.use('/api/warranty', warrantyRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// module.exports = app;


sequelize.sync()
app.listen(PORT, () => {
    console.log(`Listening on: http//localhost:${PORT}`);
});