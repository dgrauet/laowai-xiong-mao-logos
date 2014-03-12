Template.errors.helpers({
  errors: function() {
    return Errors.find({ seen: false });
  }
});

Template.err.events({
  'click #btnCloseError': function(event) {
    event.preventDefault();
    Errors.update({ _id: this._id }, { seen: true });
  }
});