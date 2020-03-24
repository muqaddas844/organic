require('./models/db');
const express= require('express');
const path= require('path');
const exphbs= require('express-handlebars');
const bodyparser= require('body-parser');
const ordercontroller= require('./controllers/ordercontroller');

var app=express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname,'/public')));
app.set('views',path.join(__dirname,'views'));
app.engine('hbs',exphbs({
    extname: 'hbs',
    defaultLayout: 'mainlayout',
    layoutsDir: __dirname+ '/views/'
}));
app.set('view engine', 'hbs');
app.listen(3000,()=>{
    console.log('server on port:3000');
});
app.use('/',ordercontroller);