
//---------------PROFILE-------------------------//

/**
Represents a Profile
@constructor
@param {Object} info- The information about that user
@param {string} username - username
@param {int}  fllowing - number of people taht user is following
@param {int} id - The id of the profile
*/
exports.Profile = function( userName, following){

	this.username = userName;
	this.following = following;
}

var person = new this.Profile('miuda06', 40);
var anotherPerson = new this.Profile('onlok', 36);
var otherPerson =  new this.Profile('berkana',45);


this.profiles = () => [person, anotherPerson, otherPerson]

/**
Returns a profile that has a specific username
@param {string} userName - username
@returns {Object}
*/
this.getOneProfile = function(userName){

	var profile = this.profiles().filter(function(profile){

		return profile.username == userName;
	})

	return profile;
}