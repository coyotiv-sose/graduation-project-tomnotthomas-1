const FinOpsUser = require('./FinOpsUser')
const EngineeringUser = require('./EngineeringUser')
const Projects = require('./Projects')
const DetatchedPersistentDisks = require('./DetatchedPersistentDisks')
const Notification = require('./Notification')
const DateRangePicker = require('./DateRangePicker')

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

const finOpsUser = new FinOpsUser('finopsuser@example.com', 'FinOps User', 'profile.jpg', '1234', 'abc123')
const engineeringUser = new EngineeringUser(
  'engineeringuser@example.com',
  'Engineering User',
  'profile.jpg',
  '5678',
  'def456'
)

const project1 = new Projects('project1', 'Project 1', 'finopsuser@example.com', true, 1000)
const project2 = new Projects('project2', 'Project 2', 'engineeringuser@example.com', false, 0)

const disk1 = new DetatchedPersistentDisks('project1', 'disk1', 'SSD', 100, 'us-west1-a', 'archive', false)
const disk2 = new DetatchedPersistentDisks('project1', 'disk2', 'HDD', 500, 'us-west1-b', 'delete', false)
const disk3 = new DetatchedPersistentDisks('project2', 'disk3', 'SSD', 200, 'us-west1-a', 'archive', false)
const disk4 = new DetatchedPersistentDisks('project2', 'disk4', 'HDD', 1000, 'us-west1-b', 'delete', false)
