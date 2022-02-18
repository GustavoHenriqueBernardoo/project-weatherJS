class Weather {
  constructor(city, state){
    this.apiKey = 'e88d8d2b2df4835b7dd358ea6b561990';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API

  async getWeather(){
    const response = await fetch (`api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`);

    const responseData = await response.json();

    return responseData;
    // return responseData.weather;

  }
  
  // Change weather location
  changeLocation(city, state){
    this.city = city;
    this.state = state;
  }
}