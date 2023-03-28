const addProject = require('./project-manager.js').addProject

//This is a class for the organisation in GCP.
//For our application we only have one organisation.
// This class can be used to get the following details of any organisation in GCP: organisationName, organisationOwner, organisationID.

class Organisation {
  projects = []

  constructor(name, owner, id) {
    this.name = name
    this.owner = owner
    this.id = id
  }

  get details() {
    return {
      organisationName: this.name,
      organisationOwner: this.owner,
      organisationID: this.id,
    }
  }
}

module.exports = Organisation
