//creating middle ware function

const notFound = (req,res,next)=>{
    const error = new Error(`ERROR! not found`)
    
    error.status= 404;
    
    next(error);
    
    }

export default notFound;

