/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	name : { type : 'string'},
  	password : { type : 'password'},

  	address : { type : 'string'},
  	city : { type : 'string'},
  	gps : { type : 'string'},

  }
};

