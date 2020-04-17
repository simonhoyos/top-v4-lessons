import { ObjectId } from 'mongodb';
import { db } from './_utils/db';

export default async (req, res) => {
  const client = await db.connect();
  const {id, ...updates} = req.body;
  const _id = new ObjectId(id);

  const usersCollection =
    await client.db('Users').collection('users');

  await usersCollection.update({ _id }, { $set: { ...updates }});

  const user =
    await usersCollection.find({ _id }).toArray();

  res.json(user);
}
