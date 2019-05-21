
const heroes = document.querySelector('.heroes');

function getData(data){

	data.results.forEach(function(element){

		const hero = document.createElement('tr');

		hero.innerHTML = `<td>${element.name}</td><td>${element.birth_year}</td><td><a href="${element.homeworld}">${element.homeworld}</a></td><td>${element.eye_color}</td><td>${element.gender}</td><td>${element.height}</td>`;

		heroes.appendChild(hero);
	})
	}



function reqListener () {
  console.log(JSON.parse(this.responseText));
}
function getHeroesPromise(url){
	return new Promise(function(resolve,reject){
		var oReq = new XMLHttpRequest();
		oReq.open("get", url, true);
		oReq.send();

		oReq.onload = resolve;
		oReq.onerror = reject;
	});
}


fetch("https://swapi.co/api/people/")
	.then((response) => response.json())
	.then(getData)
	




