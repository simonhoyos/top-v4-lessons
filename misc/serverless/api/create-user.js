import { db } from './_utils/db';

export default async (req, res) => {
  const client = await db.connect();
  const { name, email } = req.body;

  const userCollection =
    await client.db('Users').collection('users');

  const user = await userCollection.insertOne({ name, email });

  res.json(user.ops);
}
