var GetDareDevil = function(){
        var req = new XMLHttpRequest()
        req.onreadystatechange = function(){
        	if(this.readyState == 4){
      // if (options.all == true) { 
        		createDareCard(JSON.parse(this.responseText))
    		}

  	}		
  	req.open('Get', 'http://localhost:4000')
  	req.send()

}        



var createDareCard = function(arr) {
	for (var x=0; x<arr.length; x++){
                if (arr[x].name == 'Daredevil'){

                        var card = document.createElement('div')
                        card.className = 'w3-card-4'
                        card.style.width = '50%'
                        var cbutton = document.createElement('button')
                        cbutton.innerHTML = 'Get Details'
                        cbutton.className = 'w3-button w3-black'
                        var img = document.createElement('img')
                        img.style.width = '100%'
                        img.src = '/assets/daredevil.jpg'
                        card.append(img)

                        var cardContainer = document.createElement('div')
                        cardContainer.className = 'w3-container w3-center'
                        card.append(cardContainer)
                        var note = document.createElement('p')
                        note.innerHTML = arr[x].name
                        var desNote = document.createElement('p')
                        desNote.innerHTML = arr[x].description
                        card.append(note)
                        card.append(desNote)
                        //card.append(cbutton)
                        content.append(card)
                	var xtraNote1 = document.createElement('p')
                	xtraNote1.innerHTML = 'Actual Name:  Matthew Michael Murdock'
                	var xtraNote2 = document.createElement('p')
                	xtraNote2.innerHTML = 'First Appearance:  Daredevil #1 (1964)'
                	card.append(xtraNote1)
                	card.append(xtraNote2)
                	content.append(card)
		}
        }
}
module.exports = GetDareDevil
