


exports.LoginUser=(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;  
    
    if(username == "" || password == ""  ){
        return res.json({
            msg : 'Please Enter Your Information',
            state : 0
        })
    }

    if(username == "Manar" && password == "2212"){
        return  res.json({
            msg : 'Wellcome',
            state : 1
        })
    
    }

    res.json({
        msg : 'username or password is wrong',
        state : 0
    })

},


exports.SignUpUser=(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const phone = req.body.phone;

    if(!username || !password  || !email  || !phone ){
        return res.json({
            msg : ' Please Enter Your Information',
            state : 0
        })
    }
    if(username.trim() === "" || password.trim() === "" || email.trim() === "" || phone.trim() === "" ){
        return res.json({
            msg : ' Please Enter Your Information ',
            state : 0
        })
    }
    res.json({
        msg : "Sgin Up Successful",
        state : 1
    })
}