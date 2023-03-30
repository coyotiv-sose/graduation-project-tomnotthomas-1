const Recommendation = require('./recommendation.js')

//This is a project class. It is used to create a project object. It has the following properties: projectID, projectName, projectOwner, analyzed, potentialSavings.
//The projectID is the ID of the project in GCP.
//The projectName is the name of the project in GCP.
//The projectOwner is the owner of the project in GCP.
//Analyze is a boolean value that is used to determine whether the project should be analyzed or not.

class Project {
  recommendations = []

  constructor(name, owner) {
    this.name = name
    this.owner = owner
  }

  get details() {
    return {
      name: this.name,
      owner: this.owner,
    }
  }
  //getRecommendationsByProjectID is not yet defined but will be.
  async loadRecommendations() {
    const recommendations = await db.getRecommendationsByProjectId(this.id) // query the database for recommendations
    this.recommendations = recommendations.map(
      recommendation =>
        new Recommendation(
          recommendation.id,
          recommendation.resource,
          recommendation.resourceType,
          recommendation.description,
          recommendation.potentialSavings
        )
    ) // map the query results to Recommendation objects
  }
}

module.exports = Project
