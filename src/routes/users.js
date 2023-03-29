var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
  res.send([{ name: 'John Doe' }, { name: 'Jane Doe' }])
})

//Create a new user user
router.post('/', function (req, res, next) {
  const user = new User(req.body.name)
  res.send(user)
})

module.exports = router
