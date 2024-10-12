const Listing = require("../models/listing"); 

module.exports.index = async (req, res) => {
    const allListings =  await Listing.find({});
    res.render("listings/index.ejs", { allListings }); 
}

module.exports.renderNewForm = async (req, res) => {
    res.render("listings/new.ejs");
}

module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
    .populate({path: "reviews", 
        popuate: {
            path: "author", 
        }, 
    })
    .populate("owner");
    if (!listing) {
        req.flash("error", "Listing you requested deos not exsist");
        res.redirect("/listings"); 
    }
    console.log(listing);  
    res.render("listings/show.ejs", { listing });
}

module.exports.create = async (req, res) => {
    validateListing,
    async(req,res,next) => {
    const newListing = new Listing(req.body.listing);
    console.log(req.user); 
    newListing.owner = req.user._id; 
    await newListing.save();
    req.flash("success", "New Listing Created"); 
    res.redirect("/listings"); 
}}

module.exports.renderedit = async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}

module.exports.updateListing = async (req, res) => {
await Listing.findByIdAndUpdate(id, { ...req.body.listing });
req.flash("success", "Listing Uodate!!");
res.redirect(`/listings/${id}`); 
}

module.exports.delete = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings"); 
}

