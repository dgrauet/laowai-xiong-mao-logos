Template.references.helpers({
  references: function() {
    return References.find({ submitted: false });
  }
});

Template.error.submitted = function() {
  var reference = this.data;
  Meteor.defer(function() {
    References.update(reference._id, {$set: {submitted: true}});
  });
};