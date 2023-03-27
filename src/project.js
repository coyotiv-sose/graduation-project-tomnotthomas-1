//This is a project class. It is used to create a project object. It has the following properties: projectID, projectName, projectOwner, analyzed, potentialSavings.
//The projectID is the ID of the project in GCP.
//The projectName is the name of the project in GCP.
//The projectOwner is the owner of the project in GCP.
//Analyze is a boolean value that is used to determine whether the project should be analyzed or not.

class Project {
  constructor(id, name, owner, select) {
    this.id = id
    this.name = name
    this.owner = owner
    this.select = select
  }

  get details() {
    return {
      id: this.id,
      name: this.name,
      owner: this.owner,
      select: this.select,
    }
  }
}

module.exports = Project
