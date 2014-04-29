Router.map(function() {
  this.route('home', { 
  	layoutTemplate: 'homeLayout',
    template: 'home',
    waitOn: function() {
    	return Meteor.subscribe('allContacts')
    },
  	path: '/'
  })
});