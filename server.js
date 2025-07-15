import express from 'express';
import dotenv from 'dotenv';
import { MongoClient, ObjectId } from 'mongodb';

dotenv.config();
const PORT = process.env.PORT;

const dbClient = new MongoClient(process.env.MONGODB_URI)
const connectDB = async () => {
    try {
        await dbClient.connect();
        console.log("✅ Connected to MongoDB");
    } catch (error) {
        console.error("⚠ Error connecting to MongoDB:", error);
    }
}

const db = dbClient.db(process.env.DB_NAME);
const collection = db.collection('users');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Database URI: ${process.env.MONGODB_URI}`);
  console.log(`Database Name: ${process.env.DB_NAME}`);
  connectDB();
});

app.get('/users', async (req, res) => {
    try {
        const users = await collection.find().toArray();
        console.log("🚀 ~ app.get ~ users.length:", users.length)
        console.log("🚀 ~ app.get ~ users:", users)
        return res.status(200).json(users);
    } catch (error) {
        console.error("⚠ Error fetching users:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const user = await collection.findOne(
            { _id: new ObjectId(id) },
            { projection: { name: 1, _id: 0 } }
        );
        console.log("🚀 ~ app.get ~ user:", user)

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("⚠ Error fetching user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.post('/users', async (req, res) => {
    try {
        const { name, age, email } = req.body;
        console.log("🚀 ~ app.post ~ name, age, email:", name, age, email)

        const result = await collection.insertOne({...req.body, createdAt: new Date()});
        console.log("🚀 ~ app.post ~ result:", result)

        return res.status(201).json(result);
    } catch (error) {
        console.error("⚠ Error creating user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.put('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;

        const result = await collection.updateOne(
            { _id: new ObjectId (id) },
            { $set: { ...data, updatedAt: new Date() } }
        );
        console.log("🚀 ~ app.put ~ result:", result)

        if (result.matchedCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json({ message: 'User updated successfully', matchedCount: result.matchedCount, modifiedCount: result.modifiedCount });
    } catch (error) {
        console.error("⚠ Error updating user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.delete('/users/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const result = await collection.deleteOne({ _id: new ObjectId(id) });
        console.log("🚀 ~ app.delete ~ result:", result)

        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'User not found' });
        }
        return res.status(200).json({ 
            message: 'User deleted successfully',
            id, 
            deletedCount: result.deletedCount 
        });
    } catch (error) {
        console.error("⚠ Error deleting user:", error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
});