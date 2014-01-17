Meteor.publish('tickets', function() {
  return Tickets.find();
});

Meteor.publish('comments', function(ticketId) {
  return Comments.find({ticketId: ticketId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});