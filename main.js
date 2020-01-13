fetch('https://api.openweathermap.org/data/2.5/weather?id=702550&appid=2219185c88b73c25adb2456e99271621')
    .then(function(resp) { return resp.json() })
    .then(function(data){
        (setInterval(() =>{
            document.querySelector('.name-city').textContent = data.name;
            document.querySelector('.gradusi').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.weather').textContent = data.weather[0].description;
            document.querySelector('.icons').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`
        },500))
    })
    .catch(function(){

    })