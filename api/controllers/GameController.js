/**
 * GameController
 *
 * @description :: Server-side logic for managing games
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var bodyParser = require('body-parser');

module.exports = {
	
	search: function (req, res) {

		var barcode = req.body.string;
		
		var format = '';
		var boxes = { 'games' : 3 };
		var games = { 'a' : 1 };

		Game_box.find( {available: 1})
		.populate('game')
		.populate('owner')
		.then ( function (results) {
  			console.log("Default Records Already Added: " + JSON.stringify(results));
			return res.render('Games', { 'boxes' : results, 'games' : 'games' } );	
		})
		.catch ( function (err) {
			console.log("Error retrieving games");
			return res.render('Games', {'games' : 'none'} );
		});

	}
};

