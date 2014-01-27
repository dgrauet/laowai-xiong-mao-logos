Template.references.helpers({
  references: function() {
    return References.find({ submitted: false });
  }
});

Template.reference.events({
  'click #btnClose': function(event) {
    $('#btnClose').on('click', function(){
      event.preventdefault;
      $(this).parent('li').remove();
    
    
    });
    
  }
});