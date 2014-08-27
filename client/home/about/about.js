  var aboutMessage = "Eat at joes";

  Template.about.helpers({
      myMessage: function() {
          return aboutMessage;
      }
  });

  Template.about.events({
      'click button': function() {
          aboutMessage = "Changed Due To CLicked!";
          alert('clicked the button ' + aboutMessage);
      }
  });
