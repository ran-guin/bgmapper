/**
* Game_box.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	
  	owner : { model : 'user' },
  	game  : { model : 'game' },
  	condition : { 
  		type : 'enum',
  		enum : ['New', 'Good', 'Well Used'],
  		defaultsTo: 'Good'
  	},
  	complete : { type : 'boolean'},
  	available : {
  		type: 'boolean',
  		defaultsTo: 'true'
  	}
  }
};

