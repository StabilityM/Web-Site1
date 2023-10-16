const API_KEY = "f609f6d6157b35f0f6a72864cd7d0de4";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  console.log("You live in", lat, lon);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        "#weather span:first-child"
      );
      const weatherCity = document.querySelector("#weather span:last-child");
      weatherContainer.innerText = `Temp : ${data.main.temp}ºC | Weather : ${data.weather[0].main} | City :`;
      weatherCity.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
