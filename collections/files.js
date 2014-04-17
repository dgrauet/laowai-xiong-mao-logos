var Files = new FS.Collection("files", {
  stores: [
    new FS.Store.FileSystem("files", {
      path: "~/public/uploads"
    }),
    new FS.Store.FileSystem("avatars", {
      path: "~/public/images/avatars"
    },
    transformWrite: function(fileObj, readStream, writeStream){
      fileObj.copies.avatars.name = FS.Utility.setFileExtension(fileObj.copies.avatars.name, 'png');
      fileObj.copies.type = 'image/png';
      gm(readStream, fileObj.name).resize('120', '120').stream('PNG').pipe(writeStream);
    }),
    new FS.Store.FileSystem("thumbs", {
      path: "~/public/images/thumbs"
    },
    transformWrite: function(fileObj, readStream, writeStream){
      fileObj.copies.thumbs.name = FS.Utility.setFileExtension(fileObj.copies.thumbs.name, 'png');
      fileObj.copies.type = 'image/png';
      gm(readStream, fileObj.name).resize('50').stream('PNG').pipe(writeStream);
    })
  ],
  filter: {
    allow: {
      contentTypes: ['image/*']
    }
  }
});
