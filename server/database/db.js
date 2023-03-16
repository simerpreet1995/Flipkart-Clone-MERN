import mongoose from "mongoose"

 const Connection = async(username, password) => {
    const URL = `mongodb+srv://${username}:${password}@flipkartcluster.sln5ycd.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log("database connected successfully")
    } catch (error) {
        console.log("Error while connecting with database is ", error.message)
    }
}

export default Connection

