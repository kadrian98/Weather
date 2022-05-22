let weather = {
  apiKey: "3bd40079a7af5976533587daaba211b0",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&lat=35&lon=139&appid=" +
        this.apiKey +
        "&lang=pl"
    )
      .then(response => response.json())
      .then(data => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerHTML = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Wilgotność: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Prękość wiatru: " + speed + "km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  }
};

document.querySelector(".search button").addEventListener("click", () => {
  weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", event => {
  if (event.key == "Enter") {
    weather.search();
    document.querySelector(".search-bar").value = "";
  }
});

document.getElementById("btn").addEventListener("click", () => {
  document.querySelector(".search-bar").value = "";
});

weather.fetchWeather("Szczecin");
