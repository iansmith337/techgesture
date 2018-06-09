var root = 'http:///localhost:3000/#';
var useHash = true; // Defaults to: false
var hash = '#'; // Defaults to: '#'
var router = new Navigo(root, useHash, hash);
var HomePage  = require('./web-pages/home-page.js')
var AvengersPage = require('./web-pages/avengers-page.js')
var SpiderManDetailPage = require('./web-pages/spiderman-detail-page.js')
var HulkDetailPage = require('./web-pages/hulk-detail-page.js')
var IronManDetailPage = require('./web-pages/ironman-detail-page.js')
var DareDevilDetailPage = require('./web-pages/daredevil-detail-page.js')
var WolverineDetailPage = require('./web-pages/wolverine-detail-page.js')



router
  .on(function () {
 	document.getElementById('content').innerHMTL = '';
	HomePage()
 })

.on({
     'avengers':  function () {
	document.getElementById('content').innerHMTL = '';
	AvengersPage()
                         },

      'avengers/spiderman': function () {
	document.getElementById('content').innerHMTL = '';
	    SpiderManDetailPage();
            		 }, 

        'avengers/hulk':  function () {
	document.getElementById('content').innerHMTL = '';
	HulkDetailPage()
                         },

	'avengers/wolverine':  function () {
	document.getElementById('content').innerHMTL = '';
	WolverineDetailPage()
                         },

	'avengers/daredevil':  function () {
	document.getElementById('content').innerHMTL = '';
	DareDevilDetailPage()
                         },

	'avengers/ironman':  function () {
	document.getElementById('content').innerHMTL = '';
	IronManDetailPage()
                         }
})
  .resolve();
