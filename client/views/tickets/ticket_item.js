Template.ticketItem.helpers({
  ownTicket: function() {
    return this.userId == Meteor.userId();
  }
});

Template.ticketItem.events({
  'click #participants': function(event) {
      event.preventdefault;
      $('#participants').tooltip('show');

  }
});