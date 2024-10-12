if(process.env.NODE_ENV != "production"){
    require("dotenv").config();
}
console.log(process.env.secret);

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override"); 
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js"); 
const { listingSchema } = require("./schema.js");
const Review = require("./models/review.js");
const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js"); 
const session = require("express-session");
const flash = require("connect-flash"); 
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user");

const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");

//Connecting to database
const MONGO_URL = "mongodb://127.0.0.1:27017/cozycorners";
// const dburl = process.env.ATLASDB_URL;

//Calling main function 
main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log("error");
});  

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/cozycorners"); 
} 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method")); 
app.engine('ejs', ejsMate); 
app.use(express.static(path.join(__dirname, "/public"))); 
app.use(express.static('public')); 
// const flash = require("connect-flash"); 

const sessionOptions = {
    secret: "saadsecretcode",
    resave: false,
    saveUninitialized: true,
    cookie: {
        expires: Date.now() + 7 * 24 * 60 * 60 * 1000 ,
        maxAge: 7 * 24 * 60 * 60 * 1000,
        httpOnly: true,
    }
};

//API 
app.get("/", (req,res) => {
    res.send("hi i am root");
}); 

app.get("/works",async(req,res) => {
    res.send("hi"); 
    // let fakeUser = new User({
    //     email: "student0@gmail.com",
    //     username: "delta-00", 
    // });
    
    // let registredUser =await User.register(fakeUser, "hello00"); 
    // res.send(registredUser);
}) 

app.use(session(sessionOptions)); 
app.use(flash());

app.use(passport.initialize()); 
app.use(passport.session()); 
passport.use(new LocalStrategy(User.authenticate())); 

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

app.use((req,res,next) => {
    res.locals.success = req.flash("Success"); 
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next(); 
}) 

app.use("/listings", listingRouter);
app.use("/listings/:id/reviews", reviewRouter); 
app.use("/", userRouter); 

app.get("/listings/new", (req, res) => {
    res.render("listings/new.ejs"); 
}); 

//Update Route
// app.put("/listings/:id", async (req, res) => {
//     let { id } = req.params;
//     await Listing.findByIdAndUpdate(id, {...req.body.listing });
//     res.redirect("/listings"); 
// }); 

// app.get("/testListing", async (req,res) => {
//     let sampleListing = new Listing({
//         title : "My new villa",
//         description : "By the beach",
//         price : 1200,
//         location : "calungate, goa",
//         country : "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("sucessful testing"); 
// }); 

// app.use((err, req, res, next) => {
//     res.send("something went wrong"); 
// });

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something went wrong!");
});

app.listen(8000, () => {
    console.log("server is listening to port 8000");
});    