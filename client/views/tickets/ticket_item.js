Template.ticketItem.helpers({
  ownTicket: function() {
    return this.userId == Meteor.userId();
  },
  participantsList: function() {
      var participantsArr = this.participants;
      var liste = "";
      for(i=0;i<participantsArr.length;i++){
        liste = liste + participantsArr[i];
        if(i!==(participantsArr.length - 1)){
            liste = liste + ", ";
        }
      }
      return liste;
  },
  attachmentsList: function() {
    var attachmentsArr = this.attachments;
    var liste = "";
    for(i=0;i<attachmentsArr.length;i++){
      liste = liste + attachmentsArr[i];
      if(i!==(attachmentsArr.length - 1)){
          liste = liste + ", ";
      }
    }
    return liste;
  },
  submittedText: function() {
    return moment(this.submitted).format('DD MMM HH:mm');
  },
  updatedText: function() {
    return moment(this.updated).format('DD MMM HH:mm');
  },
  submittedTextToday: function() {
    return moment(this.submitted).format('HH:mm');
  },
  updatedTextToday: function() {
    return moment(this.updated).format('HH:mm');
  },
  isToday: function() {
    isDay = moment().format('DDMMYY');
    isSubmitted = moment(this.submitted).format('DDMMYY');
    return isDay === isSubmitted;
  },
  hasNoText: function(category) {
    var dailyCategories = [ 'Sox', 'Check du matin', 'Check du soir' ];
    return _.contains(dailyCategories, this.category);
  }
});
