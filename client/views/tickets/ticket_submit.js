Template.ticketSubmit.helpers({
  categories: function() {
    return Categories.find({}, {sort: {name: 1}});
  },
  fields: function() {
    return Fields.find({}, {sort: {name: 1}});
  }
});

Template.ticketSubmit.events({
  'submit form': function(event) {
    event.preventDefault();

    // Create array of references
    var refList = References.find().fetch();
    var references = [];
    for(i=0 ; i<refList.length ; i++){
      references[i] = refList[i].number;
    }

    var fields = [];
    $('input[name=fields]:checked').each(function() {
      fields.push($(this).val());
    });

    // Generate ticket number
    function strPad(input, length, string) {
    string = string || '0'; input = input + '';
      return input.length >= length ? input : new Array(length - input.length + 1).join(string) + input;
    }

    function horoId() {
        var dayTo = moment('YYYY', 'M', 'D', 0, 0, 0).unix()*1000;
        var dayFrom = dayTo + 86400000;
        var count = Tickets.find({ submitted: { $gte : dayTo, $lt : dayFrom } }).count();
        count++;
        var yearNumber = moment().format('YY');
        var dayNumber = moment().format('DDDD');
        var countNumber = strPad(count,3,0);
        var horoId = yearNumber + "-" + dayNumber + "-" + countNumber;
        return horoId;
    }

    var horoId = horoId();

    // Retrieve color category
    var category = $(event.target).find('[name=category]').val();
    var catSel = Categories.find({name: category}).fetch();

    // Create ticket object
    var ticket = {
      references: references,
      title: $(event.target).find('[name=title]').val(),
      detail: $(event.target).find('[name=detail]').val(),
      horoId: horoId,
      category: $(event.target).find('[name=category]').val(),
      color: catSel[0]['color'],
      fields: fields
    };

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