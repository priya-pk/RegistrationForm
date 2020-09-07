const express = require('express');
const router = express.Router();
const Admin = require ('../models/admin');
const Student = require('../models/student');
const mongoose = require('mongoose');
const db = "mongodb://localhost:27017/StudentDetails"


mongoose.connect(db,err=>{
  if(err){
    console.error("Error!"+ err)
  }
  else{
    console.log('Connected to MongoDB')
  }
})

router.get('/',(req,res)=>{
  res.send('From Api')
})

router.post('/register',(req,res)=>{
  let adminData = req.body;
  let admin = new Admin(adminData);
  admin.save((err,registeredAdmin)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send(registeredAdmin)
    }
  })
})

router.post('/login',(req,res)=>{
  let adminData = req.body
  Admin.findOne({userName: adminData.userName},(err,admin)=>{
    if(err){
      console.log(err)
    }
    else{
      if(!admin){
        res.status(401).send('Invalid UserName')
      }
      else if(admin.password !== adminData.password){
        res.status(401).send('Invalid password')
      }
      else{
        res.status(200).send(admin)
      }
    }
  })
})

//get details

router.get('/students',(req,res)=>{
  Student.find((err,students)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send(students)
    }
  })
})


//add details
router.post('/insert',(req,res)=>{
  var student = new Student({
    studentName: req.body.studentName,
    rollNo: req.body.rollNo,
    class: req.body.class,
    address: req.body.address,
    phone: req.body.phone,
    gender: req.body.gender
  })
  student.save((err,student)=>{
    if(err){
      console.log(err)
    }
    else{
      res.status(200).send(student)
    }
  })
})

//update details
router.put('/:id',(req,res)=>{
  const id = req.params.id;
  console.log(req.body,id)
  if(!id){
    return res.status(400).send('Not found')
  }
  var student = {
    studentName: req.body.studentName,
    rollNo: req.body.rollNo,
    class: req.body.class,
    address: req.body.address,
    phone: req.body.phone,
    gender: req.body.gender
  }
  Student.findByIdAndUpdate(id,student)
  .then((student)=>{
      student.save();
      console.log("Updated")
    })
    .catch((err)=>{
      console.log(err)
    
  })
})


//delete details

router.delete('/:id',(req,res)=>{
  const id = req.params.id
  if(!id){
    return res.status(400).send('Not found')
  }
  Student.findByIdAndDelete(id,(err,student)=>{
    if(err){
      console.log(err)
    }
    else{
      res.send(student)
    }
  })
})


module.exports = router