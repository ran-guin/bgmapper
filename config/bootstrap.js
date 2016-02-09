/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)

    // sails.sql_helper = require('./../custom_modules/sql-helper.js');

	var models = Object.keys(sails.models);

	console.log("Auto-correcting ENUM fields for models:\n* " + models.join("\n* ") );

	var errors = [];
	var added_enum = 0;
	for (var i=0; i< models.length; i++) {

  		var Model = sails.models[models[i]];
  		var attributes = Object.keys(Model.attributes);

  		// console.log("*** " + models[i] + " ***");
  		for (var j=0; j<attributes.length; j++) {
			var att = attributes[j];

			var Atype = Model.attributes[att].type;
			var Aenum =  Model.attributes[att].enum;
		        var defaultsTo = Model.attributes[att].defaultsTo;
			
			if (defaultsTo) { defaultsTo = ' DEFAULT "' + defaultsTo + '"' }
			else { defaultsTo = '' }
	
			// console.log(att + " : " + Atype + " " + Aenum);
			if (Aenum) {
				var command = " ALTER TABLE " + models[i] + " MODIFY " + att + " ENUM('" + Aenum.join("','") + "') " + defaultsTo;
				console.log(command); 

		  		Record.query(command, function (err, result) {
		  			if (err) {
						console.log("ERROR:" + err);
						cb(err);
		     		}
		  		});

		  		added_enum++;
		  	}
		  }
	}

	if (errors.length) { cb( " Errors: " + errors.join("; ")) }
	else { 
		console.log("Updated " + added_enum + " ENUM fields ");
		cb();
	}

	console.log("Initialize with Test Data");


	User.find({name:'Guest'})
	.exec(function (err, results){
  		if (err) {
    		console.log("Error: " + err);
  		}
  		else {
  			if (results.length>0) {
	  			console.log("Default Records Already Added: " + JSON.stringify(results));
  			}
  			else {

  				// Predefine Standard Games //
  				Game.create(
  					{ name : 'Scrabble', min_age: 7 }
  				).exec(function (err, created) { });
  				Game.create(
  					{ name : 'Settlers of Cataan', min_age: 7 }
  				).exec(function (err, created) { });
  				Game.create(
  					{ name : 'Monopoloy', min_age: 7 }
  				).exec(function (err, created) { });
  				Game.create(
  					{ name : 'Clue', min_age: 7 }
  				).exec(function (err, created) { });
  				Game.create(
  					{ name : 'Carcassone', min_age: 7 }
  				).exec(function (err, created) { });
  				Game.create(
  					{ name : 'Ticket to Ride', min_age: 7 }
  				).exec(function (err, created) { });
  				Game.create(
  					{ name : 'Chess', min_age: 7 }
  				).exec(function (err, created) { });
  				Game.create(
  					{ name : 'Cranium', min_age: 7 }
  				).exec(function (err, created) { });

  				// Predefine Standard Games //
  				User.create(
  					{ name : 'Guest' }
  				).exec(function (err, created) { });
  				User.create(
  					{ name : 'Admin' }
  				).exec(function (err, created) { });
 				User.create(
  					{ name : 'DemoUser1', address : '2222 Prince Edward St', city: 'Vancouver'}
  				).exec(function (err, created) { });
  				User.create(
  					{ name : 'DemoUser2', address : '3096 West 7th Ave', city: 'Vancouver'}
  				).exec(function (err, created) { });


				// Predefine Game sets // 
  				Game_box.create(
  					{ game: 2, owner: 2, condition: 'Good' }
  				).exec(function (err, created) { });

  				
 				Game.find()
				.exec(function (err, results){
			  		if (err) {
			    		console.log("Error: " + err);
			  		}
			  		else {
			  			console.log("Games Added: " + JSON.stringify(results));
			  		}
				});
  			}
  		}
	});

	console.log("Bootstrap complete");
};
