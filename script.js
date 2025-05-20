const apiKEY = "51a6916ffac809bb78bf6ebb61037fef";
const URL = `https://api.openweathermap.org/data/2.5/weather?units=metric&`;
let serachBox = document.querySelector(".search input")
let searchButton = document.querySelector(".search button")
async function checkWeather(city) {
    const response = await fetch(URL + `q=${city}` + `&appid=${apiKEY}`);
    const data = await response.json();  
    console.log(data);

    
    if (data.cod === "404") {
        alert("Enter a valid city name");
        return;
    }

    document.querySelector(".city").innerText = data.name;
    document.querySelector(".temp").innerText = Math.ceil(data.main.temp) + "°C";
    document.querySelector(".humidity").innerText = data.main.humidity + "%";
    document.querySelector(".wind").innerText = data.wind.speed + " km/h";
    let icon = document.querySelector(".weather-icon")
    if(data.weather[0].main =="Clouds"){
       icon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
icon.src = "clear.png"
    }
   else if(data.weather[0].main =="Rain"){
       icon.src = "rain.png"
    }
    else if(data.weather[0].main =="Drizzle"){
       icon.src = "drizzle.png"
    }
    else if(data.weather[0].main =="Mist"){
       icon.src = "mist.png"
    }
     document.querySelector(".weather").computedStyleMap.diplay = "block"
}

searchButton.addEventListener('click',()=>{
    checkWeather(serachBox.value )
 })
