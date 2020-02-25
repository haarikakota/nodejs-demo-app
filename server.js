const express = require('express');
const app = express();
const PORT = 3000
const path = require('path')
const bodyParser = require('body-parser')
var methodOverride = require('method-override')
const session = require('express-session')
//
const db = require('./models')
//passport config
var passport= require('passport')
var LocalStrategy = require('passport-local')

//user session
app.use(session({
    secret: "ast u",
    resave: false,
    saveUninitialized: false
}))

//passoprt session
app.use(passport.initialize());
app.use(passport.session());
//use static authenticate method of model in LocalStrategy
passport.use(new LocalStrategy(db.User.authenticate()));
 
// use static serialize and deserialize of model for passport session support
passport.serializeUser(db.User.serializeUser());
passport.deserializeUser(db.User.deserializeUser());


//view engine
app.set('view engine','ejs')
app.set('views' ,path.join(__dirname,'views'))
//public - serving static - method express.static - middleware
app.use(express.static(path.join(__dirname,'public')))

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

//route config
const indexRouter = require('./routes/index')
const aboutRouter = require('./routes/about')
const contactRouter = require('./routes/contact')
// const quizRouter = require('./routes/index')

const userRouter = require('./routes/users')
app.use('/', indexRouter)
app.use('/about', aboutRouter)
app.use('/contact', contactRouter)
app.use('/quiz', indexRouter)

app.use('/users', userRouter)



// //route
// app.get('/',(req,res)=>{
//     res.render('index', {products:products})
// })



// app.get('/home/:id',(req,res)=>{
//     let user = req.params.id
//     res.send(`hello ${user}`)
// })


app.listen(PORT, ()=>console.log(`app is at ${PORT}`))