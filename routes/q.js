var searchIndex = require('search-index');
var options = {};
searchIndex(options, function(err,si) {
	
	var q = {};
	q.query = {
		AND:[{'*':['ok']}]
	};
	si.search(q,function(err,searchResults) {
		console.log(searchResults);
	});

});
