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
      name: this.name,
      profilePicture: this.profilePicture,
      id: this.id,
      accessToken: this.accessToken,
    }
  }

  //With this code I can select a project or a recommendation, dependent on the input. I can also deselect a project or a recommendation, dependent on the input.
  setSelection(id, items, select) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === id) {
        items[i].select = select
        break
      }
    }
  }
  //The user can filter projects or recommendations based on the select value.
  filterSelection(items) {
    let selectedItems = []
    for (let i = 0; i < items.length; i++) {
      if (items[i].select === true) {
        selectedItems.push(items[i])
      }
    }
    return selectedItems
  }
}

module.exports = User
