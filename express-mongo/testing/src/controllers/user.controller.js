const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
  async signup(req, res) {
    const { email, password } = req.body;
    const encPassword = await bcrypt.hash(password, 8);
    const user = await User.create({ email, password: encPassword });

    const token = jwt.sign(
      { user },
      process.env.SECRET,
      {
        expiresIn: 1000 * 60 * 60 * 24
      }
    );

    res.status(200).json({ token });
  },
  async signin(req, res) {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    const isValid = await bcrypt.compare(password, user.password);

    if(!isValid) {
      res.status(401).json('Incorrect password or email');
      return;
    }

    const token = jwt.sign(
      { user },
      process.env.SECRET,
      {
        expiresIn: 1000 * 60 * 60 * 24
      }
    );

    res.status(200).json({ token });
  }
}
