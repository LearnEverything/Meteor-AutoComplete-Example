Contacts = new Meteor.Collection('contacts');

var contacts = [
	 {name: "Bill Murry", favMovie: "Lost in Transition"},
	 {name: "Donald Duck", favMovie: "100 days of Sodomy"},
	 {name: "Vermin Supreme", favMovie: "Half Baked"}
];

if(Meteor.isServer){
	if(!Contacts.findOne({})){
    contacts.forEach(function(contact){
      Contacts.insert({name: contact.name, favMovie:contact.favMovie, isGoingToMovie: false})
    })
  }
}

