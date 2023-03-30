const Project = require('./project.js')

//This is a class for the organisation in GCP.
//For our application we only have one organisation.
// This class can be used to get the following details of any organisation in GCP: organisationName, organisationOwner, organisationID.

class Organisation {
  projects = []

  constructor(name, owner) {
    this.name = name
    this.owner = owner
  }

  get details() {
    return {
      organisationName: this.name,
      organisationOwner: this.owner,
      organisationID: this.id,
    }
  }

  async loadProjects() {
    const projects = await db.getProjectsByOrganisationId(this.id) // query the database for projects
    this.projects = projects.map(project => new Project(project.id, project.name, project.owner)) // map the query results to Project objects
  }
}

module.exports = Organisation
