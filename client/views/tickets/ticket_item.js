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
  }
});

