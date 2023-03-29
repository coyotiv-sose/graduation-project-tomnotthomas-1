//const User = require('./user.js')
//const Organisation = require('./organisation.js')
//const Project = require('./project.js')
//const Recommendation = require('./recommendation.js')
//const addProject = require('./project-manager.js').addProject
//const addRecommendation = require('./recommendation-manager.js').addRecommendation
const axios = require('axios')

//fetch users with axios

axios.get('http://localHost:3000/users').then(response => {
  console.log(response.data)
})

//Create a new user with axios

axios
  .post('http://localHost:3000/users', {
    name: 'Armando',
  })
  .then(response => {
    console.log(response.data)
  })

//Create new organisation object. In our application it is always ONE organisation.
//const exampleOrganisation = new Organisation('organisation1', 'Organisation 1', 'user1', true, 0)
//const exampleProject = new Project('project1', 'Project 1', 'user1')

//Create a new user
//const Armando = new User(
// 'armando@hotmail.de',
//  'Armando',
//  'https://lh3.googleusercontent.com/a-/AOh14GgQ2Z0Z',
// '123456789'
//)

//Here I add some projects manually to the organisation.
//addProject(exampleOrganisation, 'project1', 'Project 1', 'user1')
//addProject(exampleOrganisation, 'project2', 'Project 2', 'user2')
//addProject(exampleOrganisation, 'project3', 'Project 3', 'user3')
//addProject(exampleOrganisation, 'project4', 'Project 4', 'user4')

//Here I add some recommendations manually to the project.
//addRecommendation(exampleProject, '23tvrwgg43', 'resource1', 'resourceType1', 'description1', 100)
//addRecommendation(exampleProject, '23tvrwgg43', 'resource2', 'resourceType2', 'description2', 200)
//addRecommendation(exampleProject, '23tvrwgg43', 'resource3', 'resourceType3', 'description3', 300)
//addRecommendation(exampleProject, '23tvrwgg43', 'resource4', 'resourceType4', 'description4', 400)

//console.log(exampleProject.recommendations)
//console.log(exampleOrganisation.projects)

//Armando.createSearchJob(exampleOrganisation)
//Armando.deleteSearchJob(exampleOrganisation)
//console.log(Armando.searchJob)

module.exports = {
  //  User,
  //  addProject,
  //  addRecommendation,
  //  Project,
}
