//create server 
const express = require('express')
//import mongooose
const mongoose = require("mongoose")
// import schema design
const noteModel = require("./Model/noteModel")
// cors
const app = express()
const cors = require('cors')
app.use(cors())

app.use(express.json())
  //connect mongodb to node js copy link from mongodb campus
mongoose.connect("mongodb://localhost:27017/NoteProject").then(()=>{
    console.log("Database Has been Connected Successfuly")
}).catch((error) =>{
    console.log(error)  // err throw error 
})

// creating a get API data 
app.get("/get", async(req, res) =>{
  const getData = await noteModel.find()
  if(getData)
  res.send(getData)
})

// creating a post API data 
app.post('/note/create' , async(req,res) =>{
 const newData = noteModel(req.body)
 const saveData = await newData.save()
 if(saveData){
    res.send(saveData)
 }
})
// display data by id and pass the throught route use default id 
// app.get("/display/get/:id", async (req, res) => {
//   const  {id} = req.params
//   const displayData = await noteModel.findById(id)
//   if(displayData)
//   res.send(displayData)
// })
// // another way
app.get("/findid/:id", async (req, res) => {
  const singleData = await noteModel.find({_id : req.params.id})
  if(singleData)
  res.send(singleData)
})

// creating update API data
app.put("/note/update/:id", async(req,res) =>{
   const updateData = await noteModel.updateOne(
    {_id: req.params.id},
    {$set: req.body}
   )
if(updateData){
  res.send(updateData)
}
})

// Delete API data

app.delete("/note/delete/:id", async (req,res) => {
  const deleteData = await noteModel.deleteOne(
    {_id: req.params.id}
  )
  if(deleteData){
    res.send(deleteData)
  }
})





// listen port whether server is working or not
app.listen(5000 , () => console.log ('server is runnung on 5000'))