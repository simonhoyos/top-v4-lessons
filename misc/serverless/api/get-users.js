import { db } from './_utils/db';

export default async (req, res) => {
  const client = await db.connect();
  const users =
    await client
      .db('Users')
      .collection('users')
      .find({})
      .toArray();

  res.json(users)
}
