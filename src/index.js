const User = require('./user.js')
const Project = require('./project.js')
const Resource = require('./resource.js')
const Organisation = require('./organisation.js')

//Create a new user
const Armando = new User(
  'armando@hotmail.de',
  'Armando',
  'https://lh3.googleusercontent.com/a-/AOh14GgQ2Z0Z',
  '2ffidwu',
  '123456789'
)

//Create new organisation object. In our application it is always ONE organisation.
const exampleOrganisation = new Organisation('organisation1', 'Organisation 1', 'user1', true, 0)

//This is a list of objects that contain the details of all projects in GCP.
let allProjects = []

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

//Based on the selected projects, we can now get the resources that the user has access to.
function getResourcesForSelectedProjects(selectedProjects, allResources) {
  const selectedProjectIds = selectedProjects.map(project => project.id)
  const selectedResources = allResources.filter(resource => selectedProjectIds.includes(resource.projectID))
  return selectedResources
}

//Adding some projects manually here.
addProject('project1', 'Project 1', 'user1', true, 0)
addProject('project3', 'Project 3', 'user1', true, 0)
addProject('project4', 'Project 4', 'user1', true, 0)
addProject('project5', 'Project 5', 'user1', true, 0)

//Adding some resources manually here.
addResource('resource1', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation1', false)
addResource('resource2', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation2', false)
addResource('resource3', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation3', false)
addResource('resource4', 'disk', 'europe-west1-b', 'project1', 0, 'recommendation4', true)

//The user first selects projects that they want to analyze.
Armando.setSelection('project1', allProjects, true)

//User selects resource4 and sets it to true.
Armando.setSelection('resource4', allResources, true)

//The user only wants to analyze the projects that they have selected. Therefore we create a new array and filter the allProjects array based on the select value.

let selectedProjects = Armando.filterSelection(allProjects)

console.log(selectedProjects)

//Based on the selected projects, we can now get the resources that the user has access to.
let selectedResources = getResourcesForSelectedProjects(selectedProjects, allResources)

console.log(selectedResources)

module.exports = {
  User,
  addProject,
  addResource,
  Resource,
  Organisation,
  allProjects,
  allResources,
}
