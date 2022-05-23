const fox_btn = document.getElementById('fox_btn');
const dog_btn = document.getElementById('dog_btn');
const capital_btn = document.getElementById('capital_btn');
const fox_result = document.getElementById('fox_result');
const dog_result = document.getElementById('dog_result');
const capital_result = document.getElementById('capital_result');

fox_btn.addEventListener('click', getRandomFox);
dog_btn.addEventListener('click', getRandomDog);
capital_btn.addEventListener('click', getRandomCnt);

function getRandomFox() {
	fetch('https://randomfox.ca/floof/')
		.then(res => res.json())
		.then(data => {
			fox_result.innerHTML = `<img src=${data.image} alt="fox" />`
		});
}

function getRandomDog() {
	fetch('https://random.dog/woof.json')
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}

function getRandomCnt() {
	fetch('https://restcountries.com/v3.1/region/europe')
    .then(res => res.json())
    .then(data => {
            for(let i in data){
            if(i % 2 == 0){
                capital_result01.insertAdjacentHTML('afterbegin',`<li>${data[i].capital}</li>`);
            }
            else{
                capital_result02.insertAdjacentHTML('afterbegin',`<li>${data[i].capital}</li>`);
            }
            }
    });
}



