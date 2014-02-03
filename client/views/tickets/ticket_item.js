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
  submittedText: function() {
    return moment(this.submitted).format('DD MMM hh:mm');
  },
  updatedText: function() {
    return moment(this.updated).format('DD MMM hh:mm');
  },
  submittedTextToday: function() {
    return moment(this.submitted).format('hh:mm');
  },
  updatedTextToday: function() {
    return moment(this.updated).format('hh:mm');
  },
  isToday: function() {
    isDay = moment().format('DDMMYY');
    isSubmitted = moment(this.submitted).format('DDMMYY');
    return isDay === isSubmitted;
  }
});

