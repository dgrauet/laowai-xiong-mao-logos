Tickets = new Meteor.Collection('tickets');

Tickets.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Tickets.deny({
  update: function(userId, ticket, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'references', 'title', 'detail', 'horoId').length > 0);
  }
});

Meteor.methods({
  ticket: function(ticketAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, 'Veuillez vous connecter');

    // ensure the ticket has a title
    if (!ticketAttributes.title)
      throw new Meteor.Error(422, 'Champ titre à renseigner');

    // pick out the whitelisted keys
    var ticket = _.extend(_.pick(ticketAttributes, 'references', 'title', 'detail', 'horoId'), {
      title: ticketAttributes.title,
      detail: ticketAttributes.detail,
      userId: user._id, 
      author: user.profile.name, 
      horoId: horoId,
      submitted: new Date().getTime(),
      references: ticketAttributes.references,
      commentsCount: 0
    });

    var ticketId = Tickets.insert(ticket);
    return ticketId;
  }
});