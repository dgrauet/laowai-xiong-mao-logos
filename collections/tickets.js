Tickets = new Meteor.Collection('tickets');

Tickets.allow({
  update: validUserAndDoc,
  remove: ownsDocument
});

Tickets.deny({
  update: function(userId, ticket, fieldNames) {
    // may only edit the following fields:
    return (_.without(fieldNames, 'title', 'detail', 'category', 'color', 'fields', 'platforms', 'equipments', 'references', 'submitted', 'updated').length > 0);
  }
});

Meteor.methods({
  ticket: function(ticketAttributes) {
    var user = Meteor.user();

    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, 'Veuillez vous connecter');

    // pick out the whitelisted keys
    var ticket = _.extend(_.pick(ticketAttributes, 'references', 'title', 'detail', 'horoId', 'category', 'color', 'fields', 'platforms', 'equipments'), {
      title: ticketAttributes.title,
      detail: ticketAttributes.detail,
      userId: user._id,
      author: user.profile.name,
      horoId: ticketAttributes.horoId,
      submitted: new Date().getTime(),
      updated: new Date().getTime(),
      category: ticketAttributes.category,
      color: ticketAttributes.color,
      references: ticketAttributes.references,
      participants: [ user.profile.name ],
      fields: ticketAttributes.fields,
      platforms: ticketAttributes.platforms,
      equipments: ticketAttributes.equipments,
      commentsCount: 0,
      participantsCount: 1,
    });

    var ticketId = Tickets.insert(ticket);
    return ticketId;
  }
});
