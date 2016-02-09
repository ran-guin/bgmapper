/**
* Game.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  tableName : 'Game', 
  
  attributes: {
    
    name: { type: 'string' },

    min_age : { type : 'integer' },
    min_players : { type: 'integer' }, 
    max_players : { type: 'integer' }, 

    avg_time : { type: 'integer' },

    difficulty_level : {
    	type : 'enum',
    	enum: ['Easy', 'Moderate', 'Complex']
    },

    luck_level : {
    	type : 'enum',
    	enum : ['Mostly Skill', 'Some Luck', 'Mostly Luck']
    },
  }
};

