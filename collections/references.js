// Local (client-only) collection
References = new Meteor.Collection(null);

clearReferences = function() {
  References.remove({});
}
