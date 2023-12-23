const express=require('express');
const router = express.Router();

const PostsController=require('../controller/PostsController')
const productController=require('../controller/ProductController')
const UsersController=require('../controller/UsersController')


router.post('/login',UsersController.LoginUser)
router.post('/sgin',UsersController.SignUpUser)
router.get('/add-product',productController.addProduct)
router.get('/posts',PostsController.GetAllPosts)



module.exports = router;