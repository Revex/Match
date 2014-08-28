Template.itemDetails.events({
    //click handler for when we want to add a new note.
    'click #createNewNote': function() {
        //turn the input to a visible state.
        $("#newNoteInputText").show().focus();
        //set the focus to the input box
        //turn the submit new note text button to a visible state
        $("#submitNewNote").show();
        //hide the button/link that allows us to add a new note, doesn't make sense to have that on screen
        $("#createNewNote").hide();
    },
    //click handler for when we press the submit new note button
    'click #submitNewNote': function() {
        //extract the value of the string inside the note text input 
        var noteText = $("#newNoteInputText").val();
        //if the value is not blank 
        if (noteText != "") {
            //get itemId 
            var itemId = $("#itemId").val();
            //then update the current Item with a new note entry with 
            //the extracted string
            Items.update({
                _id: itemId
            }, {
                $addToSet: {
                    notes: {
                        text: noteText
                    }
                }
            });
        }
        //turn the input note text to hidden state
        //clear the new note input text
        $("#newNoteInputText").val("").hide();
        //turn the submit new note button to hidden state
        $("#submitNewNote").hide();
        //show the the button/link to add new note
        $("#createNewNote").show();
    },

    "change .fileupload-input": function(event, template) {
        var func = this;
        var file = event.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function(fileLoadEvent) {
            var itemId = $("#itemId").val();
            //Meteor.call('file-upload', file, fileLoadEvent.target.result, itemId);
            console.log(file.name + " file started being uploaded");
            var startTime = new Date();
            Meteor.call('file-upload', file, reader.result, itemId, function(error, result) {
                //async callback for meteor server call
                var completionTime = new Date();
                completionTime = completionTime - startTime;
                console.log(file.name + " file completed upload " + completionTime);
            });
        };
        reader.onprogress = function(e, fileName) {
            var percentage = Math.round((e.loaded * 100) / e.total);

            console.log('Loaded : ' + percentage + '%' + ' of ' + fileName);
        };
        reader.readAsDataURL(file);
    }
});
