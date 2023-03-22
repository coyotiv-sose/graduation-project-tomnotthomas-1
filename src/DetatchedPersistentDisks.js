class DetatchedPersistentDisks {
  static listOFDetatchedPersistentDisks = []
  constructor(projectID, diskID, diskType, diskSize, diskZone, recommendedAction, selectItem) {
    this.projectID = projectID
    this.diskID = diskID
    this.diskType = diskType
    this.diskSize = diskSize
    this.diskZone = diskZone
    this.recommendedAction = recommendedAction
    this.selectItem = selectItem
    DetatchedPersistentDisks.listOFDetatchedPersistentDisks.push(this)
  }
}

module.exports = DetatchedPersistentDisks.js
