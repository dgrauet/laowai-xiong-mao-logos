Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("images", {
      path: "/Users/laowai/Repository/laowai-xiong-mao-logos/public/uploads"
    }),
    new FS.Store.FileSystem("thumbs", {
      path: "/Users/laowai/Repository/laowai-xiong-mao-logos/public/thumbs",
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
  insert: function(userId, doc){ return userId && doc; },
  update: ownsDocument,
  remove: ownsDocument
});
