Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("images", {
      path: "~/uploads/full",
      beforeWrite: function(fileObj) {

      }
    }),
    new FS.Store.FileSystem("thumbs", {
      path: "~/uploads/thumbs",
      beforeWrite: function (fileObj) {

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
