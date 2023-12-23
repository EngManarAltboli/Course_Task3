const posts = require('../helper/posts.json')


exports.GetAllPosts=(req,res) =>{
    res.json({
        msg:posts,
        })
    }