import postMessage from "../models/postMessage.js";
//now we need to implement re-logic for getting and creating posts by importing model 

export const getPosts = async (req,res)=>{
    //when user hists get request every time with path / callback function will execute
    //    res.send('THI WORKS!');
    try{
        //if everything is successful 
        const postMessages = await postMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages)

    }
    catch(error){
        //if we get any error it will execute 
        res.status(404).json({message:error.message});
    }
    }
    //now getting empty array need to implement creating posts


    export const createPost = async (req,res)=>{
        // res.send('Post Creation ')

        const post = req.body;
        //we don't have way to send post req yet need to move frontend to create form for making it possible
        const newPost = new postMessage(post) //we call it inside passing post 
        try{
            await newPost.save(); //saved into db 
            res.statuc(201).json(newPost)
           


        }
        catch(error){
            res.status(409).json({message: error.message})

        }

    }