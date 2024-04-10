const cars = await fetch("/../json/vehicules.json", {
  method: 'GET',
  headers: {
    "Content-type":"application/json;charset=UTF-8",
    "accept":"application/json"
  }
}).then(cars => cars.json());

const section = document.querySelector('.bloc_card')

//Affichage global
function getCars(cars) {

  for(let i = 0; i < cars.length; i++) {
  
const article = document.createElement('article')
article.classList.add('card_car')

const img = document.createElement('img')
img.classList.add('img_card')
img.src = 'admin'+cars[i].img

const div = document.createElement('div')
div.classList.add('text_card')

const marque = document.createElement('h2')
marque.innerText = cars[i].marque+' '+cars[i].modele
const km = document.createElement('p')
km.innerText = cars[i].km
const annee = document.createElement('p')
annee.innerText = cars[i].annee
const prix = document.createElement('h2')
prix.innerText = cars[i].prix
const divlink = document.createElement('div')
divlink.classList.add('link_car')
const detail = document.createElement('a')
detail.innerText = 'Détails'
detail.href = 'vehicule.php?id_car='+cars[i].id_car

section.appendChild(article)
article.appendChild(img)
article.appendChild(div)
div.appendChild(marque)
div.appendChild(km)
div.appendChild(annee)
div.appendChild(prix)
div.appendChild(divlink)
divlink.appendChild(detail)
}
}

getCars(cars)

const filter_cars = document.querySelector('#filter_cars')
//Ecoute de l'event au changement
filter_cars.addEventListener('change', function() {
  if(filter_cars.value == 'price') {
    const filter_prix = cars.sort(function(a,b) {
      return a.prix - b.prix
    })
    document.querySelector('.bloc_card').innerHTML = "";
    getCars(filter_prix) 
  }

  if(filter_cars.value == 'km') {
    const filterKm = cars.sort(function(a,b) {
      return a.km - b.km
    })
    document.querySelector('.bloc_card').innerHTML = "";
    getCars(filterKm) 
  }

  if(filter_cars.value == 'year') {
    const filterYears = cars.sort(function(a,b) {
      return a.annee - b.annee
    })
    document.querySelector('.bloc_card').innerHTML = "";
    getCars(filterYears) 
  }
})