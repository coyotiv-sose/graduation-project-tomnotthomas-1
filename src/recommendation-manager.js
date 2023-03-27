const Recommendation = require('./recommendation.js')

//Array with all recommendations in GCP
let allRecommendations = []

//Dummy function that adds a new recommendation to the allRecommendations array. These recommendations are for each project that was previously selected.
function addRecommendation(id, resource, resourceType, description, potentialSavings, select) {
  const recommendation = new Recommendation(id, resource, resourceType, description, potentialSavings, select)
  allRecommendations.push(recommendation)
}

module.exports = {
  allRecommendations,
  addRecommendation,
}
