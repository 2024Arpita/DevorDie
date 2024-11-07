import mongoose from 'mongoose'; // provides a straightforward way to interact
//  with MongoDB in a Node.js environment.

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "devordie",
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

export default connectDb;


