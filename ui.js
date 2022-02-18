class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.icon.setAttrubute('src', weather.icon);
    this.humidity.textContent = `Relative Humidity: ${main.humidity}`;
    this.feelsLike.textContent = `Feels Like:${weather.description}`;
    this.dewpoint.textContent = `DewPoint:${weather}`;
    this.wind.textContent = `Wind:${wind.speed}`;
  }
}