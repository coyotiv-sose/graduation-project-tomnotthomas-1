const Project = require('./project.js')

//Array with all projects in GCP
let allProjects = []

//Dummy function that adds a new project to the allProjects array
function addProject(id, name, owner, select) {
  const project = new Project(id, name, owner, select)
  allProjects.push(project)
}

module.exports = {
  allProjects,
  addProject,
}
