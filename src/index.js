console.log(
  'House Master is a software that decreases costs in the google cloud platform by optimizing the usage of resources.'
)
// for my google cloud optimization software that is supposed to archive or delete detached persistent disks I need the following:
// A Finops user object would represent a user of the software. They can create lists of projects and consecutive resources, and recommendations.
// An Engineering user object represents a user who only has visibility to his projects, resources and recommendations and can only select and deselect resources for recommended actions
// The two user groups should be able to have a collaborative list of resources, and recommendations. This list should be editable by both user groups.
// a project object, that represents a specific project on the google cloud platform
// a project object has a name, a description, a list of resources, and a list of tags
// a resource object has a name, a description, a list of tags
// A recommendation object would give recommendations for a specific resource in a project, such as archival of a specific disk.
// A notification nobject that represents a notification and link that is sent to the users of the software
// A tag object that represents a tag that can be applied to a project, resource, or recommendation
// An action object that is performed when a recommendation is accepted.
// The projects should be lists of projects
// The resources should be lists of resources
// The recommendations should be lists of recommendations

class FinOpsUser {
  project = []
  detatchedpersistentDisk = []
  recommendation = []
  notification = []

  constructor(emailAddress, userName, profilePicture, userID, accessToken) {
    this.emailAddress = emailAddress
    this.userName = userName
    this.profilePicture = profilePicture
    this.userID = userID
    this.accessToken = accessToken
  }
}

class EngineeringUser {
  detatchedpersistentDisk = []
  constructor(emailAddress, userName, profilePicture, userID, accessToken) {
    this.emailAddress = emailAddress
    this.userName = userName
    this.profilePicture = profilePicture
    this.userID = userID
    this.accessToken = accessToken
  }
}

const Franz = {
  emailAddress: 'tom.schwabe1@outlook.de',
  userName: 'Franz',
  profilePicture: 'www.example.com/profilePicture',
  userID: '234235ughin',
  accessToken: '290th4govbSDG',
}

const Joseph = {
  emailAddress: 'tom.schwabe1@outlook.de',
  userName: 'Franz',
  profilePicture: 'www.example.com/profilePicture',
  userID: '234235ughin',
  accessToken: '290th4govbSDG',
}

const chosenProjects = {
  projectID: [],
  projectName: [],
  projectOwner: [],
}

const project = {
  projectID: '234235ughin',
  projectName: 'House Master',
  projectOwner: 'Franz',
}

const detatchedpersistentDisk = {
  projectName: '',
  diskID: '',
  diskSize: '',
  diskType: '',
  diskZone: '',
  Status: '',
}

const recommendation = {
  ID: '',
  description: '',
  resourceType: '',
  recommendationStatus: '',
}

//select function is missing

console.log(`Franz has the email address of ${Franz.emailAddress} and Joseph has the userID of ${Joseph.userID}`)
console.log(
  `The project ${project.projectName} has the projectID of ${project.projectID} and is owned by ${project.projectOwner}`
)
console.log(
  `The recommendation ${recommendation.description} has the ID of ${recommendation.ID} and is of the resource type ${recommendation.resourceType}`
)
console.log(
  `The detatched persistent disk ${detatchedpersistentDisk.diskID} has the size of ${detatchedpersistentDisk.diskSize} and is of the type ${detatchedpersistentDisk.diskType}`
)
