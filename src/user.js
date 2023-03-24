class User {
  constructor(emailAddress, userName, profilePicture, userID, accessToken) {
    this.emailAddress = emailAddress
    this.userName = userName
    this.profilePicture = profilePicture
    this.userID = userID
    this.accessToken = accessToken
  }

  //The user should be able to get the gcp organisation that they have access to and connect it to this application.
  //Based on the gcp organisation that the user has access to, the user should be able to get the projects that they have access to.
  //Based on the projects that the user has access to, the user should be able to get the resources that they have access to.

  get details() {
    return {
      emailAddress: this.emailAddress,
      userName: this.userName,
      profilePicture: this.profilePicture,
      userID: this.userID,
      accessToken: this.accessToken,
    }
  }

  get projects() {
    return {
      projects: this.projects,
    }
  }

  get resources() {
    return {
      resources: this.resources,
    }
  }

  get organisations() {
    return {
      organisations: this.organisations,
    }
  }

  get notifications() {
    return {
      notifications: this.notifications,
    }
  }

  get actions() {
    return {
      actions: this.actions,
    }
  }

  get recommendations() {
    return {
      recommendations: this.recommendations,
    }
  }

  get savings() {
    return {
      savings: this.savings,
    }
  }

}

module.exports = User
