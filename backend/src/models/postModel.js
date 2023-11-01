const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    date:{
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
    image:{
        type:String,
        required:true
    }

});

// image:{
//     type:Buffer,
//     required:true
// }

module.exports = mongoose.model("Post", postSchema);