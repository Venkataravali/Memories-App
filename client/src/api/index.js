import axios from 'axios';

const url = 'http://localhost:5000/posts';//it's pointing backend server 

export const fetchPosts = ()=>axios.get(url);

//adding redux capabilities all actions towars backend cone using redux 
//dispatch those actions 

//sending api request to post request 

export const createPost = (newPost)=> axios.post(url,newPost);