import { ObjectId } from 'mongodb';
import { db } from './_utils/db';

export default async (req, res) => {
  const client = await db.connect();
  const _id = new ObjectId(req.body.id);

  const usersCollection =
    await client.db('Users').collection('users');

  const user = usersCollection.find({ _id }).toArray();

  return res.json(user);
}
