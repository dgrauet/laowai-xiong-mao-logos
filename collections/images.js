Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("images", {
      path: "~/uploads"
    }),
    new FS.Store.FileSystem("thumbs", {
      path: "~/thumbs",
      beforeWrite: function (fileObj) {
        console.Log(fileObj);
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
  insert: function(userId, doc){ return userId && doc; },
  update: ownsDocument,
  remove: ownsDocument
});
