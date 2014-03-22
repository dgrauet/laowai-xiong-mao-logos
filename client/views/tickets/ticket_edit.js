Template.ticketEdit.created = function() {
  ticket = Tickets.findOne(this.data.ticketId);
  if (_.has(ticket, 'references')){
    var references = [];
    var referencesList = ticket.references;
    for(i=0 ; i<referencesList.length ; i++){
      references[i] = {
        number: referencesList[i]
      };
      Meteor.call('reference', references[i], function(error) {
        if (error) {
            throwError(error.reason);
        }
      });
    }
  }
}

Template.ticketEdit.helpers({
  ownTicket: function() {
    return this.userId == Meteor.userId();
  },
  ticket: function() {
    return Tickets.findOne(this.ticketId);
  },
  categories: function(){
    var ticket = this;
    return Categories.find().map(function(category) {
      category.selected = ticket.category === category.name ? 'selected' : '';
      return category;
    });
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
  platforms: function(){
    var ticket = this;
    return Platforms.find().map(function(platform) {
      platform.checked = _.contains(ticket.platforms, platform.tag) ? 'checked' : '';
      return platform;
    });
  },
  equipments: function(){
    var ticket = this;
    return Equipments.find().map(function(equipment) {
      equipment.checked = _.contains(ticket.equipments, equipment.tag) ? 'checked' : '';
      return equipment;
    });
  },
  references: function(){
    return References.find();
  },
  submitted: function(){
    return moment(this.submitted).format("DD/MM/YYYY HH:mm:ss");
  },
  updated: function(){
    return moment(this.updated).format("DD/MM/YYYY HH:mm:ss");
  }
});

Template.ticketEdit.events({
  'submit form': function(event) {
    event.preventDefault();
    var currentTicketId = this._id;

    var fields = [];
    $('input[name=fields]:checked').each(function() {
      var fieldId = $(this).val();
      if(field = Fields.findOne(fieldId))
        fields.push(field.name);
    });

    var platforms = [];
    $('input[name=platforms]:checked').each(function() {
      var platformId = $(this).val();
      if(platform = Platforms.findOne(platformId))
        platforms.push(platform.tag);
    });

    var equipments = [];
    $('input[name=equipments]:checked').each(function() {
      var equipmentId = $(this).val();
      if(equipment = Equipments.findOne(equipmentId))
        equipments.push(equipment.tag);
    });

    var referencesList = References.find().fetch();
    var references = [];
    for(i=0 ; i<referencesList.length ; i++){
      references[i] = referencesList[i].number;
    }

    var submitted = $(event.target).find('[name=submitted]').val();
    var updated = $(event.target).find('[name=updated]').val();

    var ticketProperties = {
      title: $(event.target).find('[name=title]').val(),
      detail: $(event.target).find('[name=detail]').val(),
      category: $(event.target).find('[name=category]').val(),
      color: $("#category").find('option:selected').attr("data-color"),
      fields: fields,
      platforms: platforms,
      equipments: equipments,
      references: references,
      submitted : moment(submitted, "DD/MM/YYYY HH:mm:ss").unix()*1000,
      updated: moment(updated, "DD/MM/YYYY HH:mm:ss").unix()*1000
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