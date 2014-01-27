Template.references.helpers({
  references: function() {
    return References.find();
  }
});

Template.reference.events({
  'click #btnClose': function(event) {
      event.preventdefault;
      var id = this._id;
      References.remove({ _id: id });
  }
});