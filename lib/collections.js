//Profile Images Collection
ProfileImages	=	new FS.Collection("ProfileImages", {
	stores: [new FS.Store.GridFS("ProfileImages")]
});

ProfileImages.allow({											//Allow images to be displayed after removing insecure
	insert:function(userId,doc){
		return true;
	},
	update:function(userId,doc,fields,modifier){
		return true;
	},
	download:function(){
		return true;
	}
});

UserImages	=	new Mongo.Collection("UserImages");

//Posts Collection

Posts	= new Mongo.Collection("posts");

Posts.attachSchema(new SimpleSchema({
	body: {
		type: String,
		max: 500
	},
	userId: {
		type: String,
		autoValue: function(){return Meteor.userId()}
	},
	username:{
		type: String,
		autoValue: function(){return Meteor.users.findOne({_id: this.userId}).username}
	},
	createdAt: {
		type: Date,
		autoValue: function(){return new Date()}
	}
}));


Posts.allow({													//Allow posts to be inserted after removing insecure
	insert:function(userId,doc){
		return true;
	}
});