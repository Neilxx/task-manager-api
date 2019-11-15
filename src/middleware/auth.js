const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
  try {
    const token  = req.cookies.authToken
    const decoded = jwt.verify(req.cookies.authToken, process.env.JWT_SECRET)
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

    if (!user) {
      throw new Error()
    }

    req.token = token
    req.user = user
    next()
  } catch (e) {
    console.log(e)
    res.status(401).send('Please Authenticate')
  }

}
module.exports = auth
