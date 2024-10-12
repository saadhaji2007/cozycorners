const Listing = require("./models/listing"); 
const express = require("express");
const router = express.Router();
const { listingSchema } = require("./models/listing");
const { reviewSchema } = require("./models/review.js");

module.exports.isLoggedIn = (req, res, next) => { 
    // console.log(req.path, "..", req.originalUrl);
    if (!req.isAuthenticated()) {
        //redirect url
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in to create listing ");
        return res.redirect("/listings"); 
    }
    next(); 
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.local.redirectUrl = req.session.redirectUrl;
    }
    next(); 
}; 

module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let Listing = await Listing.findById(id);
    if(!listing.owner._id.equals(currUser._id)) {
        req.flash("error", "you dont have permission to edit"); 
        res.redirect(`/listings/${id}`); 
    }

    next(); 
}; 

module.exports.validateListing = (req,res,next) => {
    let { error } = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
    };

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    } }; 