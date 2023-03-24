//This is a class for the organisation in GCP.
//For our application we only have one organisation.
// This class can be used to get the following details of any organisation in GCP: organisationName, organisationOwner, organisationID.


class Organisation {

  constructor(organisationName, organisationOwner, organisationID) {
    this.organisationName = organisationName
    this.organisationOwner = organisationOwner
    this.organisationID = organisationID
  }

  get details() {
    return {
      organisationName: this.organisationName,
      organisationOwner: this.organisationOwner,
      organisationID: this.organisationID,
    }
  }
}

module.exports = Organisation
