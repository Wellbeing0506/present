var searchIndex = require('search-index');
var express = require('express');
var data = require('../index/test.txt');
var search = express.Router();
var options = {
};
var opt = {};

searchIndex(options,function(err,si) {
	si.add(data,opt,function(err){
		if(err) console.log('oops! ' + err)
		else console.log('success!')
	})

});
search.get('/:sss',function(req,res,next) {
var q = {};
  q.query = {
	AND:{'*': ['the']}
  };

	searchIndex(options,function(err,si) {
  	si.search(q,function(err,searchResults) {
    	console.log(searchResults);
		res.render('search/search',{title:JSON.stringify(searchResults)});
  	});
	});
//res.render('reveal/week/'+req.params.id, { title: 'Weekly-' + req.params.id});
 // res.send("here");
//	res.render('search/search',{title:req.params.sss});
});

module.exports = search;
