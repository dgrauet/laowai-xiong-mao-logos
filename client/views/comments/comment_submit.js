Template.commentSubmit.events({
  'change #input-files': function(event, template) {
    FS.Utility.eachFile(event, function(file) {
      Files.insert(file, function (err, fileObj) {
        //Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
      });
    });
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
