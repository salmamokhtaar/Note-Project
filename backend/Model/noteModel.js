const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
   
  
    title:{
        type : String,
        required : true
    },
    description:{
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Note", noteSchema) //export garey file kan mongoose ka model noo abuur "Note" Waxa weye table noo sameey xogtaan ku shub waye intaan sadar ka ah 