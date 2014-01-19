Tickets = new Meteor.Collection('tickets');

Tickets.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Tickets.deny({
  update: function(userId, ticket, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'url', 'title').length > 0);
  }
});

Meteor.methods({
  ticket: function(ticketAttributes) {
    var user = Meteor.user(),
      ticketWithSameLink = Tickets.findOne({url: ticketAttributes.url});

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new stories");

    // ensure the ticket has a title
    if (!ticketAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a headline');

    // check that there are no previous tickets with the same link
    if (ticketAttributes.url && ticketWithSameLink) {
      throw new Meteor.Error(302, 
        'This link has already been posted', 
        ticketWithSameLink._id);
    }

    // pick out the whitelisted keys
    var ticket = _.extend(_.pick(ticketAttributes, 'url', 'message'), {
      title: ticketAttributes.title + (this.isSimulation ? '(client)' : '(server)'),
      userId: user._id, 
      author: user.username, 
      submitted: new Date().getTime(),
      commentsCount: 0
    });

    if (! this.isSimulation) {
      var Future = Npm.require('fibers/future');
      var future = new Future();
      Meteor.setTimeout(function() {
        future.return();
      }, 5 * 1000);
      future.wait();
    }
    var ticketId = Tickets.insert(ticket);
    return ticketId;
  }
});