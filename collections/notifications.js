Notifications = new Meteor.Collection('notifications');

Notifications.allow({
  update: ownsDocument
});

createCommentNotification = function(comment) {
  var ticket = Ticketss.findOne(comment.ticketId);
  if (comment.userId !== ticket.userId) {
    Notifications.insert({
      userId: post.userId,
      ticketId: ticket._id,
      commentId: comment._id,
      commenterName: comment.author,
      read: false
    });
  }
};