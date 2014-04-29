Template.home.settings = function() {
  return {
    position: "bottom",
    limit: 5,
    noMatch: [{name : "Create New Contact"}],
    noMatchCallback: function() {
      Session.set("contact.name", $("[name='contactName']").val());
      //$("[name='lenderName']").blur();
    },
    rules: [
    {
      token: '',
      collection: Contacts,
      field: "name",
      filter: {isGoingToMovie: false},
      matchAll: true,
      template: Template.userPill,
      callback: function(doc){
        Contacts.update({_id: doc._id}, {$set: {isGoingToMovie: true}});
        $('[name="contactName"]').val("").blur();
      //  $('[name="lenderName"]').attr('data-supplier-id', doc._id).blur();
      }
     }
     ]
  }
};

Template.home.contacts = function() {
  return Contacts.find();
}

Template.home.contact = function() {
  return Contacts.findOne();
}

Template.inputNewUser.events({
  "click [data-action='submitContact']" : function(e, t){
    e.preventDefault();
    Contacts.insert({
      name: $(t.find('#inputName')).val(),
      favMovie: $(t.find('#inputFavMovie')).val(),
      isGoingToMovie: true
    });
      Session.set("contact.name", false);
 }})

Template.home.events({
  "click [data-action='removeContact']" : function(e, t){
    e.preventDefault();
    var contactId = $(e.currentTarget).attr("data-contact-id");
    Contacts.update({_id: contactId}, {$set: {isGoingToMovie: false}});
  }
});
