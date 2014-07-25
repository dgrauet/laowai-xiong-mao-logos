Template.fileInput.events({
  'click #fileBtn': function() {
    document.getElementById("fileInput").click();
  },
  'change #fileInput': function(event, template){
    event.preventDefault();
    _.each(event.currentTarget.files, function(file) {
      console.log(file);
      var fileObj = new FS.File(file);
      fileObj.metadata = {
        owner: Meteor.userId(),
        ticketId: template.data._id
      };
      Images.insert(fileObj, function (err, fileObj) {
        if (err){
          console.log(err.reason);
        }else{
          Meteor.call('increment', template.data._id, fileObj.name(), function(err, id){
            if(err)
              throwError(error.reason);
          });
        }
      //If !err, we have inserted new doc with ID fileObj._id, and
      //kicked off the data upload using HTTP
      });
    });
  }
});
