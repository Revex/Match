Template.itemDelete.events({
    'click button': function() {
        // the submit button pressed
        var itemId = $("#itemId").val();
        Items.remove( { _id : itemId } );

        Router.go('itemList');
    }
});