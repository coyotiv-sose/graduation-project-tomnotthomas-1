//This is a project class. It is used to create a project object. It has the following properties: projectID, projectName, projectOwner, analyzed, potentialSavings.
//The projectID is the ID of the project in GCP.
//The projectName is the name of the project in GCP.
//The projectOwner is the owner of the project in GCP.
//Analyze is a boolean value that is used to determine whether the project should be analyzed or not.



class Project {
  constructor(id, name, owner, analyze, potentialSavings) {
    this.id = id
    this.name = name
    this.owner = owner
    this.analyze = analyze
    //Potentialsavings is something that is not yet implemented. It is used to show the user how much money they can save per month by performing the recommended actions on resources in the project.
    this.potentialSavings = potentialSavings
  }

  get details() {
    return {
      id: this.id,
      name: this.name,
      owner: this.owner,
      analyze: this.analyze,
      potentialSavings: this.potentialSavings,
    }
  }
}

module.exports = Project
