Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("images", {
      path: "~/uploads/full",
      beforeWrite: function(fileObj) {
        console.log("normal : " + fileObj.metadata);
      }
    }),
    new FS.Store.FileSystem("thumbs", {
      path: "~/uploads/thumbs",
      beforeWrite: function (fileObj) {
        console.log("thumbs : " + fileObj)
      },
      transformWrite: function(fileObj, readStream, writeStream) {
        // Transform the image into a 10x10px thumbnail
        gm(readStream, fileObj.name()).resize('100', '100').stream().pipe(writeStream);
      }
    })
  ],
  filter: {
    allow: {
      contentTypes: ['image/*'] //allow only images in this FS.Collection
    }
  }
});

Images.allow({
  insert: validUserAndDoc,
  update: ownsDocument,
  remove: ownsDocument,
  download: function(){ return true; }
});

Meteor.methods({
  addAttachment: function(fileObj) {
    console.log("fileObj : " + fileObj);
    console.log("ticketId : " + fileObj.metadata.ticketId);
    Tickets.update( fileObj.metadata.ticketId, {
      $inc: { attachmentsCount: 1 },
      $addToSet: { attachments: fileObj.original._id }
    }, function(err, count){
      if (err) {
        console.log(err.reason);
      } else {
        console.log(count + " records made");
      }
    });
  }
});
