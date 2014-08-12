Template.fileSubmit.events({
  'click #fileBtn': function() {
    document.getElementById("fileInput").click();
  },
  'change #fileInput': function(event, template) {
    event.preventDefault();
    FS.Utility.eachFile(event, function(file) {
      var fileObj = new FS.File(file);
      fileObj.metadata = {
        owner: Meteor.userId(),
        ticketId: template.data._id
      };
      console.log(fileObj);
    });
  },
  'dropped #dropzone': function(event, template) {
    event.preventDefault();
    FS.Utility.eachFile(event, function(file) {
      var fileObj = new FS.File(file);
      fileObj.metadata = {
        owner: Meteor.userId(),
        ticketId: template.data._id
      };
      console.log(fileObj);
      Images.insert(fileObj, function (err, fileObj) {
        if (err){
          console.log(err.reason);
        } else {
          Tickets.update( fileObj.metadata.ticketId, {
            $inc: { attachmentsCount: 1 },
            $addToSet: { attachments: { attachmentId: fileObj._id, fileName: fileObj.original.name } }
          }, function(err, count){
            if (err) {
              console.log(err.reason);
            } else {
              console.log(count + " records made");
            }
          });
        }
      //If !err, we have inserted new doc with ID fileObj._id, and
      //kicked off the data upload using HTTP
      });
    });
  },
  'click #saveFiles': function (event,template) {
    event.preventDefault();
    Images.insert(fileObj, function (err, fileObj) {
      if (err){
        console.log(err.reason);
      } else {
        Tickets.update( fileObj.metadata.ticketId, {
          $inc: { attachmentsCount: 1 },
          $addToSet: { attachments: { attachmentId: fileObj._id, fileName: fileObj.original.name } }
        }, function(err, count){
          if (err) {
            console.log( err.reason );
          } else {
            console.log(count + " records made");
          }
        });
      }
    //If !err, we have inserted new doc with ID fileObj._id, and
    //kicked off the data upload using HTTP
    });
  }
});
