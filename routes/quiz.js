// const express = require('express')
// const router = express.Router()
// const db = require('../models')
// const loggedIn = require('../middleware/authmiddleware')
// // //pathe -/products
// // //method - GET all products @find
// // router.get('/',loggedIn,(req,res)=>{
// //     db.PRODUCTS.find()
// //     .then((data)=>res.render('products',{data:data}))
// //     // .then((data)=>res.json(data))
// //     .catch((err)=>res.send(err))
// // })


// router.get('/',loggedIn, (req,res)=>{
//     res.render('index.ejs')
// })


// module.exports = router


const express = require('express')
const router = express.Router()


router.get('/',(req,res)=>{
    res.render('index.ejs')
})


module.exports = router