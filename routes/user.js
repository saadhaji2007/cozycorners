const express = require("express");
const router = express.Router();
const User = require("../models/user"); 
const passport = require("passport");
const LocalStrategy = require("passport-local");
const { saveRedirectUrl } = require("../middleware");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs"); 
}) 

router.post("/signup", (req,res) => {
    let {username, email, password} = req.body; 
    const newUser = new User({email, username});
    const registredUser = User.register(newUser, password); 
    console.log(registredUser);
    req.flash("success", "Welcome to Cozycorners");
    res.redirect("/listings"); 
})

router.get("/login", (req,res) => {
    res.render("users/login.ejs"); 
})

router.post(
    "/login",
    saveRedirectUrl, 
    passport.authenticate("local", {
    failureRedirect: "/login", 
    failureFlash: true
}),   
async (req, res) => {
    req.flash("Welcome to CozyCorners... You are logged in!!!!"); 
    let redirectUrl = res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}
); 

router.get("/logout",(req, res, next) => {
    req.logout((err) => {
        if(err){
            return next(err);
        }
        req.flash("success", "you are logged out!");
        res.redirect("/listings"); 
    })
}) 

module.exports = router; 