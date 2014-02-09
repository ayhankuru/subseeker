/* @Name subseeker
*  @Version 0.0.0
*  @author Cobaimelan
*/
var seven = require('seven')();

/**
 * search torrent
 * @param {id} string exam: 0434409
 * @param {fn} function 
 */

function subseeker(id,fn){
	if(id && id !==""){
		seven.play('http://www.subtitleseeker.com/feeds/titles/'+id+'/json',function(err,data){
			if(err) fn(err,null);
			else fn(null,JSON.parse(data));
		});

	}
}



module.exports = exports =subseeker;