var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fileUpload = require('express-fileupload');

require('dotenv').config();
var session = require('express-session');

var indexRouter = require('./routes/index'); //llama a index.js
var usersRouter = require('./routes/users'); //llama a user.js
var nosotrosRouter = require('./routes/nosotros'); //llama a nosotros.js
var novedadesRouter = require('./routes/novedades');
var contactoRouter = require('./routes/contacto');
var empresaRouter = require('./routes/empresa');
var loginRouter = require('./routes/admin/login'); //llama a admin/login.js
var novedadesAdminRouter = require('./routes/admin/novedades'); //llama a admin/novedades.js


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: '15sajdfhsjdfhhurewhfjsdhfasdfhiruejsdhfjahsjfhashf23kkj344',
  resave: false,
  saveUninitialized: true
}));

secured = async (req, res, next) => {
  try {
    console.log(req.session.id_usuario);
    if (req.session.id_usuario) {
      next();
    } 
    else {
      res.redirect('/admin/login');
    }

  } catch (error) {
    console.log(error);
  }
}

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'/tmp/'
}));


app.use('/', indexRouter); // llamar al modulo js > hbs
app.use('/users', usersRouter);
app.use('/nosotros', nosotrosRouter);
app.use('/novedades', novedadesRouter);
app.use('/contacto', contactoRouter);
app.use('/empresa', empresaRouter);
app.use('/admin/login', loginRouter);
app.use('/admin/novedades', secured, novedadesAdminRouter);


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
