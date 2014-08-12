Template.filePreview.helpers({
  files: function () {
    return Images.find({ metadata: { ticketId: ticketId } });
  }
});
