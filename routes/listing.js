const express = require("express");
const router = express.Router();
const { listingSchema } = require("../schema.js");
// const { listingSchema } = require("..");
const Listing = require("../models/listing.js");
const flash = require("connect-flash"); 
const wrapAsync = require("../utils/wrapAsync.js");
const {isLoggedIn, isOwner } = require("../middleware.js"); 
const { validateListing } = require("../middleware.js");

const listingController = require("../controllers/listings.js"); 

//Index Route
router.get("/", (listingController.index)); 

//New Route 
router.get("/new", isLoggedIn, listingController.renderNewForm);  

//Show Route
router.get("/:id", listingController.showListing);

//Create Route
router.post("/",isLoggedIn, listingController.create ); 

//Edit Route
router.get("/:id/edit", isLoggedIn, listingController.renderedit);


//Update Route
router.put("/:id", isLoggedIn, listingController.updateListing); 

//Delete Route
router.delete("/:id", isLoggedIn, listingController.delete); 

module.exports = router; 