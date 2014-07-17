var Images = new FS.Collection("images", {
  stores: [
    new FS.Store.FileSystem("images", {
      path: "~/Repository/laowai-xiong-mao-logos/public/uploads"
    }),
    new FS.Store.FileSystem("thumbs", {
      path: "~/Repository/laowai-xiong-mao-logos/public/thumbs",
      transformWrite: function(fileObj, readStream, writeStream) {
        // Transform the image into a 10x10px thumbnail
        gm(readStream, fileObj.name()).resize('10', '10').stream().pipe(writeStream);
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
  insert: function(){ return true; },
  update: ownsDocument,
  remove: ownsDocument
});
