Template.ticketEdit.events({
  'submit form': function(event) {
    event.preventDefault();

    var currentPostId = this._id;

    var ticketProperties = {
      url: $(event.target).find('[name=url]').val(),
      title: $(event.target).find('[name=title]').val()
    }

    Tickets.update(currentTicketId, {$set: ticketProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('ticketPage', {_id: currentTicketId});
      }
    });
  },

  'click .delete': function(event) {
    event.preventDefault();
    if (confirm("Delete this ticket ?")) {
      var currentTicketId = this._id;
      Tickets.remove(currentTicketId);
      Router.go('ticketsList');
    }
  }
});