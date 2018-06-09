var Menu = require('../web-components/menu-component')
var getAvengers = require('../web-components/avengers-component')
var getWolverine = require('../web-components/get-wolverine.js')
var WolverineDetailPage = function() {
        Menu()

	getWolverine()
}
   module.exports = WolverineDetailPage
