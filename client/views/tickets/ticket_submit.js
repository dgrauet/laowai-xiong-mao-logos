Template.ticketSubmit.events({
  'submit form': function(event) {
    event.preventDefault();
    var refList = References.find().fetch();
    var references = [];
    console.log(references);
    for(i=0 ; i<refList.length ; i++){
      references[i] = refList[i].number;
    }
    var ticket = {
      references: references,
      title: $(event.target).find('[name=title]').val(),
      detail: $(event.target).find('[name=detail]').val()
    }

    Meteor.call('ticket', ticket, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        Router.go('ticketsList');
      }else{
        References.remove({});
        Router.go('ticketPage', {_id: id});
      }
    });
  }
});