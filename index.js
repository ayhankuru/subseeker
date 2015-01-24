/* @Name subseeker
*  @Version 0.1.0
*  @author Cobaimelan
*/
var Promise = require('bluebird');
var rq      = require('request-promise');

/**
 * search torrent
 * @param {id} string exam: 0434409
 */

function subseeker(id){

	return new Promise(function (resolve, reject) {
	
		rq('http://www.subtitleseeker.com/feeds/titles/'+id+'/json')
		.then(function(data){
		
		 resolve(JSON.parse(data));

		})
		.catch(function (err) {
			reject(err);
		})
	});
}



module.exports = exports =subseeker;
