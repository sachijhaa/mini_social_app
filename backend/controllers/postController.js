const Post = require("../models/Post");

exports.createPost = async(req,res)=>{
    console.log("BODY = ",req.body);
    console.log("FILE = ",req.file);
    console.log("USER = ",req.user);

    try{

        const text = req.body.text || "";

        let image = "";

        if(req.file){
            image = req.file.filename;
        }

        if(!text && !image){
            return res.status(400).json({
                message:"Text or Image required"
            });
        }

        const post = await Post.create({

            userId:req.user.id,

            username:req.user.username,

            text,

            image

        });

        res.status(201).json(post);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

exports.getPosts = async(req,res)=>{

    try{

        const posts = await Post.find()
            .sort({createdAt:-1});

        res.status(200).json(posts);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

exports.likePost = async(req,res)=>{

    try{

        const post = await Post.findById(req.params.id);

        if(!post){
            return res.status(404).json({
                message:"Post not found"
            });
        }

        const alreadyLiked = post.likes.find(
            like => like.userId === req.user.id
        );

        if(alreadyLiked){
            return res.status(400).json({
                message:"Already liked"
            });
        }

        post.likes.push({
            userId:req.user.id,
            username:req.user.username
        });

        await post.save();

        res.json(post);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};

exports.commentPost = async(req,res)=>{

    try{

        const post = await Post.findById(
            req.params.id
        );

        post.comments.push({

            userId:req.user.id,

            username:req.user.username,

            text:req.body.text

        });

        await post.save();

        res.json(post);

    }
    catch(error){

        res.status(500).json({
            message:error.message
        });

    }
};