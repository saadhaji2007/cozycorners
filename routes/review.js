const express = require("express");
const router = express.Router();
const { listingSchema } = require("../schema.js");
const { reviewSchema } = require("../models/review.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { validateReview, isLoggedIn} = require("../middleware.js");

//Reviews
//Post Route
router.post("/",isLoggedIn, async(req, res) => {
    let listing = await Listing.findById(req.params.id)
    let newReview = new Review(req.body.review); 
    newReview.author = req.user._id; 
    console.log(newReview); 
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save(); 
    req.flash("sucesss", "New review created");
    res.redirect(`/listings/${listing._id}`);
});  


module.exports = router; 