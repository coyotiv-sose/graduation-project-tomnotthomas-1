const Project = require('./project.js')
const Organisation = require('./organisation.js')

//Add delete projects functionality

//Dummy function that adds a new project to the allProjects array
function addProject(organisation, id, name, owner) {
  const project = new Project(id, name, owner)
  organisation.projects.push(project)
}

module.exports = {
  addProject,
}
