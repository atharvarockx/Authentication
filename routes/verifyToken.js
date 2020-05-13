const jwt=require('jsonwebtoken');

module.exports=function(req,res,next){
    
    //Get token from header
    const token=req.header('auth-token');
    
    //If token is unavailble Access is denied
    if(!token){
        return res.status(401).send("Access Denied");
    }
    try{
        //Verify token using jwt 
        const verified=jwt.verify(token,"thisisasecretcode");
        req.user=verified;
        next();
    }
    catch(error){
        return res.status(400).send("Invalid Token");
    }
}