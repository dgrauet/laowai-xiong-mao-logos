Template.ticketItem.helpers({
  ownTicket: function() {
    return this.userId == Meteor.userId();
  }
});