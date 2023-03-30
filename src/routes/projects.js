//Dummy code
var express = require('express')
var router = express.Router()
var Project = require('../project.js')

//Get the recommendations per project.
router.get('/:id/recommendations', async function (req, res, next) {
  const project = new Project({
    name: req.body.name,
    owner: req.body.owner,
  })
  const recommendations = await project.loadRecommendations()
  res.send(recommendations)
})

module.exports = router
