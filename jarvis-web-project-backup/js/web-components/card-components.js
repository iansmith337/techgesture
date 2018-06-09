var createCard = function(arr){
        for (var x=0; x<arr.length; x++){
                var card = document.createElement('div')
                card.className = 'w3-card-4'
                card.style.width = '50%'
                let dbutton = document.createElement('a')
                dbutton.className = 'w3-bar-item w3-button'


		if(arr[x].name == 'Iron Man'){
                        dbutton.href = '#/avengers/ironman'
                }
                else if(arr[x].name == 'Wolverine'){
                        dbutton.href = '#/avengers/wolverine'
                }                                       
                else if(arr[x].name == 'Daredevil'){
                        dbutton.href = '#/avengers/daredevil'
                }
                else if(arr[x].name == 'Hulk'){
                        dbutton.href = '#/avengers/hulk'
                }
                else if(arr[x].name == 'Spider-Man'){
                        dbutton.href = '#/avengers/spiderman'
                }

		dbutton.innerHTML = 'Get Details'

		var img = document.createElement('img')
                img.style.width = '100%'
                if(arr[x].name == 'Iron Man'){
                        img.src = '/assets/ironman.jpg'
                }
                else if(arr[x].name == 'Wolverine'){
                        img.src = '/assets/wolverine.jpg'
                }                                       
                else if(arr[x].name == 'Daredevil'){
                        img.src = '/assets/daredevil.jpg'
                }
                else if(arr[x].name == 'Hulk'){
                        img.src = '/assets/incredible-hulk.png'
                }
                else if(arr[x].name == 'Spider-Man'){
                        img.src = '/assets/spiderman.jpg'
                } 
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
               	card.append(dbutton)
		content.append(card)
        }
}

module.exports = createCard
