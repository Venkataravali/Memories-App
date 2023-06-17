import mongoose from "mongoose";

//need to create mongoose schema 
//that's gonna be function and it has object in it 

const postSchema = mongoose.Schema({
  title:String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount:{
    type: Number,
    default: 0
  },
  createdAt:{
    type:Date,
    default:new Date()
  },
});

//need to turn schema to model 
const postMessage = mongoose.model('PostMessage',postSchema)

export default postMessage;
