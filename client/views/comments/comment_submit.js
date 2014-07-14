Template.commentSubmit.events({
  'click #fileBtn': function() {
    document.querySelector("#fileInput").click();
  },
  'change #fileInput': function(event){
    event.preventDefault();
    reader = new FileReader();
    var files = document.querySelector("#fileInput").files;
    console.log(files);
  },
  'submit form': function(event, template) {
    event.preventDefault();
    var $body = $(event.target).find('[name=body]');
    var comment = {
      body: $body.val(),
      ticketId: template.data._id
    };

    Meteor.call('comment', comment, function(error, commentId) {
      if (error){
        throwError(error.reason);
      } else {
        $body.val('');
      }
    });
  }
});
