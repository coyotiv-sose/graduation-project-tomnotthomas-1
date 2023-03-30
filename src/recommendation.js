// A recommendation contains recommendations from Google Recommendation center
// The recommendation class is used to create recommendation objects which are used create lists of recommendations which are candidates for an action to be performed on them.

class Recommendation {
  constructor(resource, resourceType, description, potentialSavings) {
    this.resource = resource
    this.resourceType = resourceType
    this.description = description
    this.potentialSavings = potentialSavings
  }

  get details() {
    return {
      resource: this.resource,
      resourceType: this.resourceType,
      description: this.description,
      potentialSavings: this.potentialSavings,
    }
  }
}

module.exports = Recommendation
