Template.fileInput.events({
  'click #fileBtn': function() {
    document.querySelector("#fileInput").click();
  },
  'change #fileInput': function(event, template){
    event.preventDefault();
    FS.Utility.eachFile(event, function(file) {
      Images.insert(file, function (err, fileObj) {
        if(err) throw err;
      });
    });
  }
});
