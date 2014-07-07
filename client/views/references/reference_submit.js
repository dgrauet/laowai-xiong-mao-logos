Template.referenceSubmit.events({
    'click #btnRef': function(event){
        event.preventdefault;
        References.insert({number: $('#refInput').val()});
    }
});
