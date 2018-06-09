var Menu = function() {
		var content = document.getElementById('content')
		content.innerHTML = ""
		
		let nav = document.createElement('div')
        	nav.className = 'w3-bar w3-blue'

        	let home = document.createElement('a')
        	home.className = 'w3-bar-item w3-button'
        	home.href = '#'
        	home.innerHTML = 'Home'
        	nav.append(home)

        	let av_nav = document.createElement('a')
        	av_nav.className = 'w3-bar-item w3-button'
        	av_nav.href = '#/avengers'
        	av_nav.innerHTML = 'Heroes'
        	nav.append(av_nav)
        	content.append(nav)
		
		let spi_nav = document.createElement('a')
        	spi_nav.className = 'w3-bar-item w3-button'
        	spi_nav.href = '#/avengers/spiderman'
        	spi_nav.innerHTML = 'Spiderman'
        	nav.append(spi_nav)
        	content.append(nav)
		
		let wol_nav = document.createElement('a')
        	wol_nav.className = 'w3-bar-item w3-button'
        	wol_nav.href = '#/avengers/wolverine'
        	wol_nav.innerHTML = 'Wolverine'
        	nav.append(wol_nav)
        	content.append(nav)

		let iron_nav = document.createElement('a')
        	iron_nav.className = 'w3-bar-item w3-button'
        	iron_nav.href = '#/avengers/ironman'
        	iron_nav.innerHTML = 'Ironman'
        	nav.append(iron_nav)
        	content.append(nav)
		
		let dare_nav = document.createElement('a')
        	dare_nav.className = 'w3-bar-item w3-button'
        	dare_nav.href = '#/avengers/daredevil'
        	dare_nav.innerHTML = 'Daredevil'
        	nav.append(dare_nav)
        	//content.append(nav)
		
		let hulk_nav = document.createElement('a')
        	hulk_nav.className = 'w3-bar-item w3-button'
        	hulk_nav.href = '#/avengers/hulk'
        	hulk_nav.innerHTML = 'Hulk'
        	nav.append(hulk_nav)
        	content.append(nav)

}
module.exports = Menu
