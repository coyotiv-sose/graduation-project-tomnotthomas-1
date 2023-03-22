const DetatchedPersistentDisks = require('./DetatchedPersistentDisks.js')

class Projects {
  static listOfGcpProjects = []
  static listOfSelectedProjects = []
  static listOfResourcesPerProject = []
  static listOfSelectedResourcesPerProject = []

  constructor(projectID, projectName, projectOwner, analyzed, potentialSavings) {
    this.projectID = projectID
    this.projectName = projectName
    this.projectOwner = projectOwner
    this.analyzed = analyzed
    this.potentialSavings = potentialSavings
    Projects.listOfGcpProjects.push(this)
  }
  // This method creates a list of selected projects.
  static getSelectedProjects() {
    Projects.listOfSelectedProjects = Projects.listOfGcpProjects.filter(function (project) {
      return project.analyzed === true
    })
  }
  // This method assigns a list of persistent disks including projectID, diskID, diskType, diskSize, diskZone, recommendedAction, selectItem per selected project
  static listPersistentDisksPerProject() {
    Projects.listOfResourcesPerProject = []
    Projects.getSelectedProjects().forEach(function (project) {
      const projectID = project.projectID
      const disks = DetatchedPersistentDisks.listOFDetatchedPersistentDisks.filter(function (disk) {
        return disk.projectID === projectID
      })
      disks.forEach(function (disk) {
        Projects.listOfResourcesPerProject.push(disk)
      })
    })
  }
  // This method creates a list of selected resources per project.
  static getSelectedResourcesPerProject() {
    Projects.listOfSelectedResourcesPerProject = Projects.listOfResourcesPerProject.filter(function (resource) {
      return resource.selectItem === true
    })
    return Projects.listOfSelectedResourcesPerProject
  }
}

module.exports = Projects.js
