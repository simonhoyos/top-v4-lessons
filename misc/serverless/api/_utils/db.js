import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

export const db = new MongoClient(process.env.MONGO_URI, options);
