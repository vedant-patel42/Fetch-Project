const { CustomAPIError } = require("../errors/custom-error")

const errorHandlerMiddleware = (err,req,res,next) =>{
    if(err instanceof CustomAPIError){
        return res.status(err.statusCode).json({message:err.message})
    }
    else if(err instanceof SyntaxError && err.status==400 && 'body' in err){
        return res.status(400).json({message:'Invalid JSON in the request payload'});
    }
    return res.status(500).json({message:'Try again'})
}

module.exports = errorHandlerMiddleware