const Projects = require('./Projects')
const Notification = require('./Notification')
const DateRangePicker = require('./DateRangePicker')

class FinOpsUser {
  constructor(emailAddress, userName, profilePicture, userID, accessToken) {
    this.emailAddress = emailAddress
    this.userName = userName
    this.profilePicture = profilePicture
    this.userID = userID
    this.accessToken = accessToken
  }

  // This FinOps user can create a list of projects in GCP.
  listAllProjects() {
    return Projects.listOfGcpProjects
  }

  // This FinOps user can select multiple projects for cost optimization from the list of projects in GCP.
  selectProject(projectID) {
    const project = Projects.listOfGcpProjects.find(function (project) {
      return project.projectID === projectID
    })
    project.analyzed = true
  }

  // This FinOps user can deselect a project for cost optimization
  deselectProject(projectID) {
    const project = Projects.listOfGcpProjects.find(function (project) {
      return project.projectID === projectID
    })
    project.analyzed = false
  }

  // This FinOps user can create a list of detached persistent disks of the selected projects.
  listDetachedPersistentDisks() {
    return Projects.listPersistentDisksPerProject()
  }

  // This FinOps user can select a detached persistent disk from the list of resources per project in the project class.
  selectDetachedPersistentDisk(diskID) {
    const disk = Projects.listOfResourcesPerProject.find(function (disk) {
      return disk.diskID === diskID
    })
    disk.selectItem = true
  }

  // This FinOps user can deselect a detached persistent disk from the list of resources per project in the project class.
  deselectDetachedPersistentDisk(diskID) {
    const disk = Projects.listOfResourcesPerProject.find(function (disk) {
      return disk.diskID === diskID
    })
    disk.selectItem = false
  }

  // This user can pick dates for the cost optimization run.
  pickDatesForCostOptimizationRun(startDateForCostOptimizationRun) {
    const dateRangePicker = new DateRangePicker(startDateForCostOptimizationRun)
    return dateRangePicker
  }

  // This user can pick dates for the notification.
  pickDatesForNotification(startDateforNotification) {
    const dateRangePicker = new DateRangePicker(startDateforNotification)
    return dateRangePicker
  }

  // This user can create a notification.
  createNotification(notificationforEngineers) {
    return new Notification(notificationforEngineers)
  }
}

module.exports = FinOpsUser
