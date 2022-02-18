// Init weather object
const weather = new Weather('Boston', 'MA');

//Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e)=>{
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation('Miamy', 'FL');

  //Get and display weather
  getWeather();

  //Close modal === unique JQUERY, this line is not vanilla JS.
  $('#locModal').modal('hide');
})

// weather.changeLocation('Miamy', 'FL')

function getWeather(){
  weather.getWeather()
    .then(result => {
      ui.paint(result);
      })
    .catch(err => console.log(err));
}