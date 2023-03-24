const User = require('./user.js')
const Project = require('./project.js')
const Resource = require('./resource.js')
const Organisation = require('./organisation.js')

//Create new organisation object. In our application it is always ONE organisation.
const exampleOrganisation = new Organisation('organisation1', 'Organisation 1', 'user1', true, 0)
console.log(exampleOrganisation)

//This is a list of objects that contain the details of all projects in GCP.
let allProjects = []
console.log(allProjects)

//function that adds a new project to the allProjects array
function addProject(id, name, owner, analyze, potentialSavings) {
  const project = new Project(id, name, owner, analyze, potentialSavings)
  allProjects.push(project)
}

//This is a list of objects that contain the details of resources in GCP.
let allResources = []

//function that adds a new resource to the allResources array
function addResource(id, type, zone, projectID, potentialSavings, recommendation, select) {
  const resource = new Resource(id, type, zone, projectID, potentialSavings, recommendation, select)
  allResources.push(resource)
}

//Adding some projects manually here.
addProject('project1', 'Project 1', 'user1', true, 0)
addProject('project2', 'Project 2', 'user1', true, 0)
addProject('project3', 'Project 3', 'user1', true, 0)
addProject('project4', 'Project 4', 'user1', true, 0)
addProject('project5', 'Project 5', 'user1', true, 0)

//Adding some resources manually here.
addResource('resource1', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation1', false)
addResource('resource2', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation2', false)
addResource('resource3', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation3', false)
addResource('resource4', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation4', false)
addResource('resource5', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation5', false)
addResource('resource6', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation6', false)
addResource('resource7', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation7', false)
addResource('resource8', 'VM', 'europe-west1-b', 'project1', 0, 'recommendation8', false)
addResource('resource9', 'VM', 'europe-west1-b', 'project1', 0, 'recommendation9', false)
addResource('resource10', 'VM', 'europe-west1-b', 'project1', 0, 'recommendation10', false)

module.exports = {
  User,
  addProject,
  addResource,
  Resource,
  Organisation,
  allProjects,
  allResources,
}
