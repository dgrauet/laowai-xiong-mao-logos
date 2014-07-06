Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return [
      Meteor.subscribe('tickets'),
      Meteor.subscribe('notifications'),
      Meteor.subscribe('fields'),
      Meteor.subscribe('categories'),
      Meteor.subscribe('groups'),
      Meteor.subscribe('platforms'),
      Meteor.subscribe('equipments')
    ];
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
    data: function() {
      return {ticketId: this.params._id};
    }
  });
  this.route('ticketSubmit', {
    path: '/submit',
  });
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    this.render('signInUp');
    pause();
  }
}

Router.onBeforeAction('loading');

Router.onBeforeAction(requireLogin, {except: ['layout', 'signInUp']});

Router.onBeforeAction(function() { clearErrors(); clearReferences(); });
