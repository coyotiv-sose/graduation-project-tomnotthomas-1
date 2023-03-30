//Dummy code
var express = require('express')
var router = express.Router()
var Organisation = require('../organisation.js')

//Get the projects per organisation

router.get('/:id/projects', function (req, res, next) {
  const organisation = new Organisation({
    name: req.body.name,
    owner: req.body.owner,
  })

  const projects = organisation.loadProjects()
  res.send(projects)
})

module.exports = router
