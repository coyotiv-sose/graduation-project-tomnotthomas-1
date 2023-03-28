class User {
  searchJob = null //initialize searchJobs as an empty array

  constructor(emailAddress, name, profilePicture, id, accessToken) {
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

  createSearchJob(organisation) {
    if (this.searchJob !== null) {
      // check if searchJob already exists
      console.log('Error: User can only create one search job at a time')
      return
    }

    this.searchJob = [] // initialize searchJob as an empty array
    const searchJob = {}
    organisation.projects.forEach(project => {
      const recommendations = project.recommendations.map(recommendation => {
        return recommendation.details
      })
      searchJob[project.details.id] = {
        project: project.details,
        recommendations: recommendations,
      }
    })
    this.searchJob.push(searchJob)
  }

  deleteSearchJob() {
    if (this.searchJob === null) {
      // check if searchJob exists
      console.log('Error: No search job found')
      return
    }
    this.searchJob = null // assign null to the instance variable to delete the search job
  }
}

module.exports = User
