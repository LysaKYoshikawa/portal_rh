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
        type:String,
        required:true
    },
    cpf:{
        type:String,
        required:true
    },
    office:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    skills:{
        type:String,
        required:true
    },
    profileLinkedin:{
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