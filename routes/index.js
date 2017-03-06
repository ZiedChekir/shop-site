var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');
// var csrfProtection = csrf();
var user = require('../models/user');
// var products = require('../models/product');
//
// // router.use(csrfProtection);
//
// /* GET home page. */
// router.get('/', function(req, res, next) {
//   products.find(function(err, doc){
//     res.render('shop/index', { Products: doc });
//   });
// });





//============= Display Signup PAge with Flash messages as a Var
router.get('/signup', function(req, res, next) {

    // res.render('user/signup',{csrfToken:req.csrfToken(),messages:req.flash('signupMessage')});
    res.render('user/signup',{messages:req.flash('signupMessage')});
});

router.get('/login', function(req, res, next) {
  res.render('user/login', {messages:req.flash('loginMessage')});
});


//router.post('/signup', do all our passport stuff here);
router.get('/profile', isLoggedIn, function(req, res) {
     res.render('user/profile', {
         user : req.user // get the user out of session and pass to template
     });
 });

 // =====================================
 // LOGOUT ==============================
 // =====================================
 router.get('/logout', function(req, res) {
     req.logout();
     res.redirect('/');
 });

function isLoggedIn(req, res, next) {

// if user is authenticated in the session, carry on
if (req.isAuthenticated())
   return next();

// if they aren't redirect them to the home page
res.redirect('/');
}

router.post('/signup', passport.authenticate('local-signup', {
successRedirect : '/profile', // redirect to the secure profile section
failureRedirect : '/signup', // redirect back to the signup page if there is an error
failureFlash : true // allow flash messages
}));

router.post('/login', passport.authenticate('local-login', {
 successRedirect : '/profile', // redirect to the secure profile section
 failureRedirect : '/login', // redirect back to the signup page if there is an error
 failureFlash : true // allow flash messages
}));

module.exports = router;
