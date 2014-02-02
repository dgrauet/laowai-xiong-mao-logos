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
  detailCustom: function(){
    var detail = this.detail;
    if (detail.length > 40){
        detail = detail.substring(0,40) + "...";
    }
    return detail;
  }
});

