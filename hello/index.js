const express = require('express')
const path = require('path')
const router = express.Router()
const bodyParser = require('body-parser');
const logger = require('morgan');
const nunjucks = require('nunjucks')
const app = express()
const port = process.env.PORT || 3000

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

nunjucks.configure('views', {
    autoescape: true,
    cache: false,
    express: app,
    watch: true
})

app.set('views', nunjucks.render);
app.set('view engine', 'html');

app.get('/', (req,res) => {
    res.render('hello.html')
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error.html');
});

app.listen(port , () => {
    console.log('app listen port : ' + port)
})