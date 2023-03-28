// A recommendation contains recommendations from Google Recommendation center
// The recommendation class is used to create recommendation objects which are used create lists of recommendations which are candidates for an action to be performed on them.

class Recommendation {
  constructor(id, resource, resourceType, description, potentialSavings) {
    this.id = id
    this.resource = resource
    this.resourceType = resourceType
    this.description = description
    this.potentialSavings = potentialSavings
  }

  get details() {
    return {
      id: this.id,
      resource: this.resource,
      resourceType: this.resourceType,
      description: this.description,
      potentialSavings: this.potentialSavings,
    }
  }
}

module.exports = Recommendation
