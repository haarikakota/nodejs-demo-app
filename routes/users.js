const express = require('express')
const router = express.Router()
const db = require('../models')
const passport = require('passport')

router.get('/signup',(req,res)=>{
    res.render('signup')
})

router.get('/login',(req,res)=>{
    res.render('login')
})

//auth routes
//users/signup

router.post('/signup',(req,res)=>{
    db.User.register(new db.User({username: req.body.username}),req.body.password)
    // console.log("line 19")
    .then(()=>{
        passport.authenticate("local")(req,res,function(){
            console.log("LINE 22")
            res.redirect('/quiz')
        })
    })
    .catch((err)=> res.render('signup'))
})


//login router
//path - /user/login
router.post('/login', passport.authenticate('local',{
    successRedirect: '/quiz',
    failureRedirect:'/user/login'
}),(req,res)=>{})

//logout
//path - / user/logout
router.get('/logout',(req,res)=>{
    req.logout()
    res.redirect('/users/login')
})






// // get 
// router.get('/',(req,res)=> {
//     db.User.find()
//     .then((data)=> res.json(data))
//     .catch((err)=> res.send(err))
// })

// router.post('/',(req,res)=>{
//     db.User.create(req.body)
//     .then((data)=> res.json(data))
//     .catch((err)=> res.send(err))
// })

module.exports = router 