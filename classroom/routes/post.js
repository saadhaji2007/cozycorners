const express = require("express");
const router = express.Router();

//Posts 
//index

router.get("/", (req,res) => {
    res.send("get for post");
})

//show route 
router.get("/:id", (req,res) => {
    res.send("Get for show posts");
})

//post route
router.post("/", (req,res) => {
    res.send("Post for posts"); 
})

//delete route
router.delete("/:id", (req, res) => {
    res.send("Delete for posts"); 
}) 

module.exports = router;