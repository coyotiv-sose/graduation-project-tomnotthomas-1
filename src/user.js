const Organisation = require('./organisation.js')

class User {
  organisation = []

  constructor(emailAddress, name, profilePicture, accessToken) {
    this.emailAddress = emailAddress
    this.name = name
    this.profilePicture = profilePicture
    this.accessToken = accessToken
  }

  get details() {
    return {
      emailAddress: this.emailAddress,
      name: this.name,
      profilePicture: this.profilePicture,
      accessToken: this.accessToken,
    }
  }

  // I want to load an organisation for a user. getOrganisationByUserID is a a hypotetical function that is not yet working.
  async loadOrganisation() {
    const organisation = await db.getOrganisationByUserId(this.id) // query the database for organisation
    this.organisation = new Organisation(organisation.id, organisation.name, organisation.owner)
  }
}
module.exports = User
