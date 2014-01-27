Template.referenceSubmit.events({
    'click #btnRef': function(event){
        event.preventdefault;
        var reference = {
            number: $('#refInput').val()
        };

        Meteor.call('reference', reference, function(error) {
            if (error) {
                throwError(error.reason);
            } else {
                $('#refInput').val('');
            }
        });
    }
});

