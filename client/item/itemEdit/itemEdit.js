Template.itemEdit.events({
    'click button': function() {
        // the submit button pressed
        var itemName = $("#itemName").val();
        var itemId = $("#itemId").val();
        Items.update({
            _id: itemId
        }, {
            $set: {
                name: itemName
            }
        });

        Router.go('itemList');
    }
});
