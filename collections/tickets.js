Tickets = new Meteor.Collection('tickets');

Tickets.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Tickets.deny({
  update: function(userId, ticket, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'references', 'title', 'detail').length > 0);
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

    // Create number
    var year = moment().format('YYYY');
    var month = moment().format('M');
    var day = moment().format('D');
    var dayTo = new Date(year, month, day, 0, 0, 0).valueOf();
    var dayFrom = dayTo - 86400000;
    var count = Tickets.find({ submitted: { $gte : dayTo, $lt : dayFrom } }).count();
    var yearNumber = moment().format('YY');
    var dayNumber = moment().format('DDDD');
    var countNumber = count + 1;
    var number = yearNumber + "-" + dayNumber + "-" + countNumber;
    console.log(number);
    // pick out the whitelisted keys
    var ticket = _.extend(_.pick(ticketAttributes, 'references', 'title', 'detail'), {
      title: ticketAttributes.title,
      detail: ticketAttributes.detail,
      userId: user._id, 
      author: user.profile.name, 
      number: number,
      submitted: new Date().getTime(),
      references: ticketAttributes.references,
      commentsCount: 0
    });

    var ticketId = Tickets.insert(ticket);
    return ticketId;
  }
});