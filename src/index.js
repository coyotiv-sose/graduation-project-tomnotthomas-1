const User = require('./user.js')
const Project = require('./project.js')
const allProjects = require('./project-manager.js').allProjects
const addProject = require('./project-manager.js').addProject
const addRecommendation = require('./recommendation-manager.js').addRecommendation
const allRecommendations = require('./recommendation-manager.js').allRecommendations
const Recommendation = require('./recommendation.js')
const Organisation = require('./organisation.js')

//Create new organisation object. In our application it is always ONE organisation.
const exampleOrganisation = new Organisation('organisation1', 'Organisation 1', 'user1', true, 0)

//Create a new user
const Armando = new User(
  'armando@hotmail.de',
  'Armando',
  'https://lh3.googleusercontent.com/a-/AOh14GgQ2Z0Z',
  '2ffidwu',
  '123456789'
)

//Adding some projects manually here.
addProject('project1', 'Project 1', 'user1', true)
addProject('project3', 'Project 3', 'user1', true)
addProject('project4', 'Project 4', 'user1', false)
addProject('project5', 'Project 5', 'user1', true)

//Adding some resources manually here.
addRecommendation('project1', 'resource1', 'resourceType1', 'description1', 100, true)
addRecommendation('project1', 'resource2', 'resourceType2', 'description2', 200, true)
addRecommendation('project1', 'resource3', 'resourceType3', 'description3', 300, false)
addRecommendation('project1', 'resource4', 'resourceType4', 'description4', 400, true)
addRecommendation('project1', 'resource5', 'resourceType5', 'description5', 500, true)
addRecommendation('project1', 'resource6', 'resourceType6', 'description6', 600, true)

console.log(allProjects)
console.log(allRecommendations)

const selectedRecommendations = Armando.filterSelection(allRecommendations)
const selectedProjects = Armando.filterSelection(allProjects)

console.log(selectedProjects)
console.log(selectedRecommendations)

module.exports = {
  User,
  addProject,
  addRecommendation,
  Project,
}
