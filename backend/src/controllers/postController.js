const Post = require('../models/postModel');

const createPost = async(req, res)=>{

    try {

        const post = new Post({
            title: req.body.title,
            date: req.body.date,
            rg: req.body.rg,
            cpf: req.body.cpf,
            image: req.file.filename

        });
        const postData = await post.save();

        res.status(200).send({sucess:true, msg: 'Post Data', data:postData});

        

        
    } catch (error) {
        res.status(400).send({sucess:false, msg:error.message});
        
    }

};

module.exports = {
    createPost
};