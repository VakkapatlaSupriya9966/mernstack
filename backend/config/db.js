
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connection success");
    }
    catch (error) {
        console.error("MongoDB connection fail");
        process.exit(1);
    }
}
module.exports = connectDB;


