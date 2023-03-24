// A resource contains either persistent disks or virtual machines for now.
// The resource class is used to create resource objects which are used create lists of resources which are candidates for an action to be performed on them.

class Resource {
  constructor(id, type, zone, projectID, potentialSavings, recommendation, select) {
    this.id = id
    this.type = type
    this.zone = zone
    this.projectID = projectID
    //Potential savings is something that is not yet implemented. It is used to show the user how much money they can save per month by performing the recommended actions on resources in the project.
    this.potentialSavings = potentialSavings
    this.recommendation = recommendation
  }

  get details() {
    return {
      id: this.id,
      type: this.type,
      zone: this.zone,
      projectID: this.projectID,
      potentialSavings: this.potentialSavings,
      recommendation: this.recommendation,
      select: this.select,
    }
  }
}

module.exports = Resource
