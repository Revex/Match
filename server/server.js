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
