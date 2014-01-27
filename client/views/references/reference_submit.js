Template.referenceSubmit.events({
    'click #btnRef': function(event){
        event.preventdefault();
        var reference = {
            reference: $(event.target).find('[name=references]').val(),
        }

        Meteor.call('reference', reference, function(error, id) {
            if (error) {
                // display the error to the user
                throwError(error.reason);
            }
        });
    }
});

