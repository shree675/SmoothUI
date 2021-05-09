const express=require('express');
const router=express.Router();
var User=require('../models/user.model');

router.route('/getusers').get((req,res)=>{
    User.find().then((e)=>res.json(e)).catch(err=>res.status(400).json('notfound'));
});

router.route('/createuser').post((req,res)=>{
    const username=req.body.username;
    const email=req.body.email;
    const phone=req.body.phone;
    const description=req.body.description;
    const user=new User({username,email,phone,description});
    user.save().then(()=>res.json('Added new user!')).catch(err=>res.status(400).json('Error: ' + err));
});

module.exports=router;