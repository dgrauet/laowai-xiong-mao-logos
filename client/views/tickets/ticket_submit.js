Template.ticketSubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    var references = References.find().fetch();
    
    var ticket = {
      references: references,
      title: $(event.target).find('[name=title]').val(),
      detail: $(event.target).find('[name=detail]').val()
    }

    Meteor.call('ticket', ticket, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        Router.go('ticketPage', {_id: id});
      }else{
        References.remove({});
      }
    });
    Router.go('ticketsList');
  }
});