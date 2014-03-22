Template.comment.helpers({
  submittedText: function() {
    return moment(this.submitted).format('DD MMM HH:mm');
  },
  submittedTextToday: function() {
    return moment(this.submitted).format('HH:mm');
  },
  isToday: function() {
    isDay = moment().format('DDMMYY');
    isSubmitted = moment(this.submitted).format('DDMMYY');
    return isDay === isSubmitted;
  }
});