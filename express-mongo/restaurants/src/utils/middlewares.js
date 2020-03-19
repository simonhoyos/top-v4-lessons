const jwt = require('jsonwebtoken');

module.exports = {
  auth(req, res, next) {
    try {
      const token = req.headers.authorization;
      req.user = jwt.verify(token, process.env.SECRET).user;
      next();
    } catch (error) {
      res.status(401).json({ error });
    }
  },
  permissions(allowedUsers) {
    return function(req, res, next) {
      try {
        if(!allowedUsers.includes(req.user.type)) {
          throw new Error({ message: 'You don\'t have enough permissions' });
        }

        next();
      } catch (error) {
        res.status(401).json({ error: 'You don\'t have enough permissions' });
      }
    }
  }
}
