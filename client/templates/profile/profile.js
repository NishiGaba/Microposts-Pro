Template.profile.events({
	"submit .edit-profile": function(event){
		var file = $('#profileImage').get(0).files[0];
		console.log(file);

		if(file){
			fsfile	= new FS.File(file);

			ProfileImages.insert(fsfile, function(err, result){
				if(err){
					throw new Meteor.Error(err);
				}
				else{

					var imageLoc = '/cfs/files/ProfileImages/'+result._id;

					UserImages.insert({
						userId: Meteor.userId(),
						username: Meteor.user().username,
						image: imageLoc
					});

					Router.go('/'); 
				}
			});
		}

		return false;
	}
});