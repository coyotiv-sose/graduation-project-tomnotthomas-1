var express = require('express')
var router = express.Router()
var User = require('../user.js')

//Create a new user
router.post('/', function (req, res, next) {
  const user = new User({
    emailAddress: req.body.emailAddress,
    name: req.body.name,
    profilePicture: req.body.profilePicture,
    accessToken: req.body.accessToken,
  })
  res.send(user)
})

//Gets the user from the database.
router.get('/:id', function (req, res, next) {
  const user = new User({
    emailAddress: req.body.emailAddress,
    name: req.body.name,
    profilePicture: req.body.profilePicture,
    accessToken: req.body.accessToken,
  })
  res.send(user)
})

//User gets the organisation from the database.
router.get('/:id/organisation', function (req, res, next) {
  const user = new User({
    emailAddress: req.body.emailAddress,
    name: req.body.name,
    profilePicture: req.body.profilePicture,
    accessToken: req.body.accessToken,
  })
  const organisation = user.loadOrganisation()
  res.send(organisation)
})

module.exports = router
