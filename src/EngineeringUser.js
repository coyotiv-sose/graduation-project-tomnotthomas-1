const Projects = require('./Projects.js')

class EngineeringUser {
  constructor(emailAddress, userName, profilePicture, userID, accessToken) {
    this.emailAddress = emailAddress
    this.userName = userName
    this.profilePicture = profilePicture
    this.userID = userID
    this.accessToken = accessToken
    this.projects = []
  }
  // The EngineeringUser should be able to see all projects that he is the project owner of.
  listAllProjects() {
    return Projects.listOfGcpProjects.filter(
      function (project) {
        return project.projectOwner === this.emailAddress
      }.bind(this)
    )
  }
  // The EngineeringUser should be able to see all resources that he is the project owner of.
  listAllResources() {
    return Projects.listOfResourcesPerProject.filter(
      function (resource) {
        return resource.projectOwner === this.emailAddress
      }.bind(this)
    )
  }
  // The EngineeringUser should be able to select the detached persistent disks that he wants to archive or delete.
  selectDetachedPersistentDisk(diskID) {
    const disk = Projects.listOfResourcesPerProject.find(function (disk) {
      return disk.diskID === diskID
    })
    disk.selectItem = true
  }
  // The EngineeringUser should be able to deselect the detached persistent disks that he wants to archive or delete.
  deselectDetachedPersistentDisk(diskID) {
    const disk = Projects.listOfResourcesPerProject.find(function (disk) {
      return disk.diskID === diskID
    })
    disk.selectItem = false
  }
}

module.exports = EngineeringUser.js
