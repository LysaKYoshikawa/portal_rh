const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    rg:{
        type:Number,
        required:true
    },
    cpf:{
        type:Number,
        required:true
    },
    fileDoc:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    fileAddress:{
        type:String,
        required:true
    },
    fileEmployContract:{
        type:String,
        required:true
    },
    fileResume:{
        type:String,
        required:true
    },
    cel:{
        type:Number,
        required:true
    }

});


module.exports = mongoose.model("Post", postSchema);