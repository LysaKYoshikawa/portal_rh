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

const getPosts = async(req,res)=>{

    try {

        const posts = await Post.find({});
        res.status(200).send({sucess:true, msg: 'Posts Data',data:posts});
        
    } catch (error) {
        res.status(400).send({sucess:false, msg:error.message});
        
    }
}

const deletePost = async(req,res)=>{

    try {

        const id = req.params.id;

        await Post.deleteOne({_id:id});
        res.status(200).send({sucess:true, msg:'Funcionario deletado com Sucesso!!!'});
        
    } catch (error) {
        res.status(400).send({sucess:false, msg:error.message});
        
    }
}

const updatePost = async(req,res)=>{
    try {

        if(req.file !== undefined){

            let id = req.body.id;
            let title = req.body.title;
            let date = req.body.date;
            let rg = req.body.rg;
            let cpf = req.body.cpf;
            let filename = req.body.filename;

            await Post.findByIdAndUpdate({_id:id},{ $set:{title:title, date:date, rg:rg, cpf:cpf,image:filename}});
            res.status(200).send({sucess:true, msg:'Funcionario ATUALIZADO com Sucesso!!!'});
        }

        else{

            let id = req.body.id;
            let title = req.body.title;
            let date = req.body.date;
            let rg = req.body.rg;
            let cpf = req.body.cpf;

            await Post.findByIdAndUpdate({_id:id},{ $set:{title:title, 
                date:date, 
                rg:rg, 
                cpf:cpf,
                msg:error.message}});
            res.status(200).send({sucess:true, msg:'Funcionario ATUALIZADO com Sucesso!!!'});

        }


        
    } catch (error) {
        res.status(400).send({sucess:false, msg:error.message});
    }
}

module.exports = {
    createPost,
    getPosts,
    deletePost,
    updatePost
};