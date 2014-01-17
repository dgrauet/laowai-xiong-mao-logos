Template.ticketsList.helpers({
  tickets: function() {
    return Tickets.find({}, {sort: {submitted: -1}});
  }
});