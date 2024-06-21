// db.js
import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';



const Connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION_AS_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        mongoose.connection.on('connected', () => {
            console.log('Successfully connected to MongoDB Atlas');
        });

        mongoose.connection.on('error', (err) => {
            console.error('Failed to connect to MongoDB Atlas', err);
        });

    } catch (err) {
        console.error('Failed to connect to MongoDB Atlas', err);
        process.exit(1);
    }
};

export { Connectdb };
