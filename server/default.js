
import { products } from "./constants/data.js"
import Product from "./model/product-schema.js"

const DefaultData =  async () => {
    try{
       await Product.insertMany(products);
        console.log("successfully uploaded data into database")
    } catch (err) {
        console.log('Error while inserting data is ', err.message)
    }
}

export default DefaultData