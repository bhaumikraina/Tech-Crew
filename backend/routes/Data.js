const express = require('express')
const router = express.Router()


router.post("/foodData",(req,res)=>{
    try{   
        res.send([ global.food_sample, global.food_categories, global.food_types])
    }
    catch(error){
console.log(error.message)
res.send("Error")   
    }
});
router.patch("/foodData",(req,res)=>{
    try{   
        res.send([ global.food_sample, global.food_categories, global.food_types])
    }
    catch(error){
console.log(error.message)
res.send("Error")   
    }
});

module.exports=router;