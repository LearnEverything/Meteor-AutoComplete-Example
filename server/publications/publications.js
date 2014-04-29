Meteor.publish('allContacts', function() {
	return Contacts.find();
});