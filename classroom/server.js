const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash"); 
const path = require("path"); 

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "secretstring", 
    resave:false,
    saveUninitialized: true,
};

app.use(session(sessionOptions)); 
app.use(flash()); 

app.get("/register", (req,res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    req.flash("success", "user registered sucessfully"); 
    res.redirect("/hello"); 
    // console.log(req.session.name); 
    // console.log(req.session);
    // res.send(name);
}); 

app.get("/hello", (req,res) => {  
    res.locals.messages = req.flash("success"); 
    res.render("page.ejs", {name: req.session.name, msg: req.flash("success") }); 
    // res.send(`Hello! ${req.session.name}`);
}); 


const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode")); 

app.get("/getsignedcookies", (req,res) => {
    res.cookie("madeIn", "India", {signed: true});
    res.send("signed cookies sent"); 
})

app.get("/verify", (req,res) => {
    console.log(req.signedCookies); 
    console.log(req.cookies);
})

app.get("/getcookies", (req,res) => {
    res.cookie("greet", "hello"); 
    res.cookie("madeIn", "india");
    res.send("sent you some cookies");
});

app.get("/greet", (req,res) => {
    let {name = "anonyms"} = req.cookies;
    
})

app.get("/",(req,res) => {
    console.dir(req.cookies); 
    res.send("Hi, Iam root");
}); 

// app.use("/users", users); 
// app.use("/posts",posts);

// app.use(session({ 
//     secret: "secretstring", 
//     resave:false,
//     saveUninitialized: true  
// })
// ); 

app.get("/reqcount", (req,res) => {
    if(req.session.count) {
        req.session.count++;
    } else {
        req.session.count = 1;
    }

}); 

app.get("/test", (req,res) => {
    res.send("test sucessful"); 
})


app.listen(8000, () => {
    console.log("server is listening to port 3000");
});    