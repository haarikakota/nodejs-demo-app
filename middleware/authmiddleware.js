//writing a middleware function

//create protected routes

//create a functionto check if user is loggedIn

//exort the functions


// module.exports = {
//     loggedIn: function(req,res,next){
//         console.log('midldleware',req)
//         if(req.isAuthenticated()){
//             return next;
//         }else{
//             res.redirect('/users/login')
//         }
//     }
// }


    const loggedIn = (req,res,next)=>{
        if(req.isAuthenticated()){
             next();
        }else{
            res.redirect('/users/login')
        }
    }

module.exports = loggedIn