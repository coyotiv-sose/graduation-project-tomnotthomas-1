class User {
  constructor(emailAddress, name, profilePicture, id, accessToken) {
    this.emailAddress = emailAddress
    this.name = name
    this.profilePicture = profilePicture
    this.id = id
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

  //With this code I can select a project or a resource, dependent on the input. id is either a project or resource id, items is either the projects or resources array and select is a boolean value.
  setSelection(id, items, select) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].select = select
        break
      }
    }
  }
  //The user can filter projects or resources based on the boolean value of select = true.
  filterSelection(items) {
    let filteredItems = []
    for (let i = 0; i < items.length; i++) {
      if (items[i].select === true) {
        filteredItems.push(items[i])
      }
    }
    return filteredItems
  }
}

module.exports = User
