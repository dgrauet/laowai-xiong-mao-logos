Template.ticketEdit.created = function() {
  ticket = Tickets.findOne(this.data.ticketId);
}

Template.ticketEdit.helpers({
  ownTicket: function() {
    return this.userId == Meteor.userId();
  },
  ticket: function() {
    return Tickets.findOne(this.ticketId);
  },
  detail: function(){
    var currentTicket = Tickets.findOne({_id: this._id});
    return currentTicket.detail;
  },
  fields: function(){
    var ticket = this;
    return Fields.find().map(function(field) {
      field.checked = _.contains(ticket.fields, field.name) ? 'checked' : '';
      return field;
    });
  },
  submitted: function(){
    return moment(this.submitted).format("DD/MM/YYYY HH:mm:ss");
  },
  updated: function(){
    return moment(this.updated).format("DD/MM/YYYY HH:mm:ss");
  },
});

Template.ticketEdit.events({
  'submit form': function(event) {
    event.preventDefault();
    var fields = [];
    var currentTicketId = this._id;

    $('input[name=fields]:checked').each(function() {
      var fieldId = $(this).val();
      if(field = Fields.findOne(fieldId))
        fields.push(field.name);
    });

    var submitted = $(event.target).find('[name=submitted]').val();
    var updated = $(event.target).find('[name=updated]').val();
    console.log(submitted);
    console.log(updated);
    console.log(moment(submitted).unix()*1000);
    console.log(moment(updated).unix()*1000);
    var ticketProperties = {
      title: $(event.target).find('[name=title]').val(),
      detail: $(event.target).find('[name=detail]').val(),
      fields: fields,
      submitted : moment(submitted).unix()*1000,
      updated: moment(updated).unix()*1000
    }

    Tickets.update(currentTicketId, {$set: ticketProperties}, function(error) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
      } else {
        Router.go('ticketPage', {_id: currentTicketId});
      }
    });
  },

  'click .delete': function(event) {
    event.preventDefault();
    if (confirm("Delete this ticket ?")) {
      var currentTicketId = this._id;
      Tickets.remove(currentTicketId);
      Router.go('ticketsList');
    }
  }
});