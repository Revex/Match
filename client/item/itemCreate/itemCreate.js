Template.itemCreate.events({
    'click button': function() {
        // the submit button pressed
        var itemName = $("#itemName").val();
        Items.insert({name:itemName});

        Router.go('itemList');
    }
});

Template.itemCreate.rendered = function(){
	$("#itemName").focus();
};