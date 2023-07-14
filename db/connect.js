const mongoose = require("mongoose");
const connectString = "mongodb+srv://admin:Ronit2000@cluster0.d2mabeg.mongodb.net/Todo?retryWrites=true&w=majority"
const connectDB=(url)=>{
 return mongoose.connect(url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
}

module.exports=connectDB