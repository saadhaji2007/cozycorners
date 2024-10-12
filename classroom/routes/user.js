const express = require("express");
const router = express.Router();

//Index - users
router.get("/", (req,res) => {
    res.send("get for users");
})

//show route 
router.get("/:id", (req,res) => {
    res.send("Get for show users");
})

//post route
router.post("/", (req,res) => {
    res.send("Post for users"); 
})

//delete route
router.delete("/:id", (req, res) => {
    res.send("Delete for users"); 
})

module.exports = router;