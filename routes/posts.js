import express from 'express';
import { createPost, deletePost, getPost, getPosts, updatePost } from '../controllers/postController.js'
const router = express.Router();


//middleware is function that runs between incoming requests and outgoing response
//we are making a static folder


let posts = [
    {id: 1, title: 'Post one'},
    {id: 2, title: 'Post one'},
   
    {id: 3, title: 'Post one'},
    {id: 4, title: 'Post one'},


 ]




 //getting specific post
 router.get('/:id', getPost)

 //getting all posts
router.get('/',getPosts )
//UPDATE

router.put('/:id',updatePost )

//POST
router.post('/', createPost)


//delete

router.delete('/:id', deletePost )



export default router;