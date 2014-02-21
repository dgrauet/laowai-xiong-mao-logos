//currentTicketId = this._id;

Template.detailEdit.helpers({
  detail: function(){
    var currentTicket = Tickets.findOne({_id: this._id});
    return currentTicket.detail;
  }
});

Template.ticketEdit.helpers({
  ownTicket: function() {
    return this.userId == Meteor.userId();
  }
});

Template.ticketEdit.events({
  'submit form': function(event) {
    event.preventDefault();

    var currentTicketId = this._id;

    var ticketProperties = {
      title: $(event.target).find('[name=title]').val(),
      detail: $(event.target).find('[name=detail]').val()
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