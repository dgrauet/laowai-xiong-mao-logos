Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [Meteor.subscribe('tickets'), Meteor.subscribe('comments'), Meteor.subscribe('notifications')];
  }
});

Router.map(function() {
  this.route('ticketsList', {path: '/'});
  this.route('ticketPage', {
    path: '/tickets/:_id',
    waitOn: function() {
      return Meteor.subscribe('comments', this.params._id);
    },
    data: function() { return Tickets.findOne(this.params._id); }
  });
  this.route('ticketEdit', {
    path: '/tickets/:_id/edit',
    data: function() { return Tickets.findOne(this.params._id); }
  });
  this.route('ticketSubmit', {
    path: '/submit',
  });
});

var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
    this.stop();
  }
}
Router.before(requireLogin, {only: 'ticketSubmit'});
Router.before(function() { clearErrors() });