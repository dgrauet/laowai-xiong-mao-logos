Files = new Meteor.Collection('files');

Files.allow({
  update: ownsDocument,
  remove: ownsDocument
});
