const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing");

//Connecting to database
const MONGO_URL = "mongodb://127.0.0.1:27017/cozycorners";

//Calling main function 
main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log("error");
});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/cozycorners");
} 

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "66eed744329655c7feb2cbbd"}))
    await Listing.insertMany(initData.data);
    console.log("data was initialized"); 
} 

initDB();