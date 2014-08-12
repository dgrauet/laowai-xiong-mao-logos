Template.ticketsList.helpers({
  tickets: function() {
    return Tickets.find({}, {sort: {submitted: -1}});
  }
});

Template.ticketsList.rendered = function(){
  $(".btn-add-attachment").hide();
};
