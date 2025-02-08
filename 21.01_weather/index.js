import { CITIES, API_KEY, API_VERSION, API_URL } from "./constants.js";

const randomNumber = Math.floor(Math.random() * CITIES.length); 
console.log(randomNumber)
const randomCity = CITIES[randomNumber];
const formElement = document.getElementById('form');

document.getElementById('randomCity').innerText = randomCity;

const choosers = (temperature) => {
    document.getElementById('c1').innerText = temperature + 3;
    document.getElementById('chooser1').value =temperature + 3;
    document.getElementById('c2').innerText = temperature + 7;
    document.getElementById('chooser2').value =temperature + 7;
    document.getElementById('c3').innerText =temperature - 7;
    document.getElementById('chooser3').value =temperature -7;
}


fetch(`${API_URL}/${API_VERSION}/weather?q=${randomCity}&appid=${API_KEY}&units=metric`)
.then ((resp) => {
    return resp.json();
})
.then ((data) => {
    console.log(data.main.temp);
   return data.main.temp;
})
.then((tempp) =>{
    choosers(tempp);
    formElement.addEventListener('submit',(e) => {
        e.preventDefault();
        const radioValue = formElement.querySelector('input[name=weather]:checked').value
        
        if ((tempp>(radioValue-5))&&(tempp<(radioValue-5))) {
            console.log('win')
        } 
     })
})
.catch((error) => {
        console.error("Error fetching weather data:", error);
    });
 
