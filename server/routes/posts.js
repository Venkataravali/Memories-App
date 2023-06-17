import express from 'express';
import { getPosts ,createPost} from '../controllers/posts.js';  //in react not need .js extension
//here we need .js extension 

const router = express.Router()

//it reach localhost:5000/posts tested in browser 
router.get('/',getPosts);
router.post('/',createPost);

export default router;