const Recommendation = require('./recommendation.js')
const Project = require('./project.js')

//Add delete recommendations functionality

//Dummy function that adds a new recommendation to the allRecommendations array. These recommendations are for each project that was previously selected.
function addRecommendation(project, id, resource, resourceType, description, potentialSavings) {
  const recommendation = new Recommendation(id, resource, resourceType, description, potentialSavings)
  project.recommendations.push(recommendation)
}

module.exports = {
  addRecommendation,
}
