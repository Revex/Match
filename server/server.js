Meteor.startup(function() {
    // code to run on server at startup
    if (Items.find().count() === 0){
    	//add sample items
    	Items.insert({name:"Tree"});
    	Items.insert({name:"Ball"});
    	Items.insert({name:"Cup"});
    	Items.insert({name:"Knife"});
    }
});


Meteor.methods({
    'file-upload': function (fileInfo, fileData, itemId) {
        console.log("got ya baby");
        console.log("received file " + fileInfo.name);//+ " data: " + fileData);
        console.log(fileInfo);
        //fs.writeFile(fileInfo.name, fileData);
        Items.update({
            _id : itemId
        }, {
            $set: {
                fileName : fileInfo.name,
                fileData : fileData
            }
        });
    }
});
