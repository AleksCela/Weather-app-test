let button = document.getElementById('button');
let locationIcon = document.querySelector('.weather-icon');

function getWeatherData( cityname ) {
    var key = 'e0b71890beacc3a4228133815c2b5de3'; //I know i should hide this but its ok , all hail openweathermap free plan 🙏!!!
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityname+ '&appid=' + key)  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      showWeatherData(data);
      console.log(data);
    })
    .catch(function() {
    });
}


button.addEventListener("click", function() {
    let cityname = document.getElementById('cityname').value;
    getWeatherData( cityname );
});


function showWeatherData( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
    const {icon} = d.weather[0];
	document.getElementById('description').innerHTML =d.weather[0].main;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('accurate').innerHTML = 'More accurately: '+ d.weather[0].description;
	document.getElementById('location').innerHTML ='Location: '+ d.name;
    locationIcon.innerHTML = `<img src="icons/${icon}.png">`;

    if (d.weather[0].main === 'Rain') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/243971/pexels-photo-243971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (d.weather[0].main === 'Clouds') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1828305/pexels-photo-1828305.jpeg?cs=srgb&dl=pexels-matheus-potsclam-barro-1828305.jpg&fm=jpg')";
    }
    if (d.weather[0].main === 'Clear') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/96622/pexels-photo-96622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (d.weather[0].main === 'Thunderstorm') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/2418664/pexels-photo-2418664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }
    if (d.weather[0].main === 'Snow') {
        document.body.style.backgroundImage = "url('https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')";
    }

}


