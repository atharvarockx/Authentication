const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');

router.get("/",verify,(req,res)=>{
    res.send("This is a secret route");
})
module.exports=router;