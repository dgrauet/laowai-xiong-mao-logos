Template.ticketSubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    var ticket = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val(),
      message: $(event.target).find('[name=message]').val()
    }

    Meteor.call('ticket', ticket, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        if (error.error === 302)
          Router.go('ticketPage', {_id: error.details})
        } else {
          Router.go('ticketPage', {_id: id});
      }
    });
    Router.go('ticketsList');
  }
});