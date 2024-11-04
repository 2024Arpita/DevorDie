import mongoose from 'mongoose';

const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            dbName: "spotifyClone",
        });
        console.log('MongoDB connected...');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
        process.exit(1);
    }
};

export default connectDb;


