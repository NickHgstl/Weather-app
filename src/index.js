import './style.css';
let div = document.querySelector('#content');
div.id = "body-container"
let userLocation = document.querySelector('#user-location-input');
let userLocationButton = document.querySelector('#user-location-button');


function userLocationData(day1, day2, day3, day4, day5, day6, day7) {
    this.day1 = day1;
    this.day2 = day2;
    this.day3 = day3;
    this.day4 = day4;
    this.day5 = day5;
    this.day6 = day6;
    this.day7 = day7;

};


function day1(temp, condition, rainChance) {
    this.temp = temp;
    this.condition = condition;
    this.rainChance = rainChance;
}

function day2(temp, condition, rainChance) {
    this.temp = temp;
    this.condition = condition;
    this.rainChance = rainChance;
}

function day3(temp, condition, rainChance) {
    this.temp = temp;
    this.condition = condition;
    this.rainChance = rainChance;
}

function day4(temp, condition, rainChance) {
    this.temp = temp;
    this.condition = condition;
    this.rainChance = rainChance;
}

function day5(temp, condition, rainChance) {
    this.temp = temp;
    this.condition = condition;
    this.rainChance = rainChance;
}

function day6(temp, condition, rainChance) {
    this.temp = temp;
    this.condition = condition;
    this.rainChance = rainChance;
}

function day7(temp, condition, rainChance) {
    this.temp = temp;
    this.condition = condition;
    this.rainChance = rainChance;
}


const getUserLocationData = function(){        
    userLocationButton.addEventListener('click', function(e){
        let userLocationValue = userLocation.value;
        async function getWeatherData() {

            let response = await fetch('http://api.weatherapi.com/v1/forecast.json?key=ceb031ce372c4451993122639230604&q='+ userLocationValue+'&days=7&aqi=no&alerts=no', {mode: 'cors'})
            let weatherResponse = await response.json();
            var i;
            const weatherContainer = document.createElement('div');
            weatherContainer.id = "weather-container";
            div.append(weatherContainer);
            
            userLocationData.day1 = weatherResponse.forecast.forecastday[0].day;
            userLocationData.day2 = weatherResponse.forecast.forecastday[1].day;
            userLocationData.day3 = weatherResponse.forecast.forecastday[2].day;
            userLocationData.day4 = weatherResponse.forecast.forecastday[3].day;
            userLocationData.day5 = weatherResponse.forecast.forecastday[4].day;
            userLocationData.day6 = weatherResponse.forecast.forecastday[5].day;
            userLocationData.day7 = weatherResponse.forecast.forecastday[6].day;
            

            day1.temp = userLocationData.day1.maxtemp_c;
            day1.condition = userLocationData.day1.condition.text;
            day1.rainChance = userLocationData.day1.daily_chance_of_rain;
            const day1Container = document.createElement("div");
            day1Container.className = "day-container";
            weatherContainer.append(day1Container);
            const day1Temp = document.createElement('div');
            day1Temp.className = "weather-item";
            day1Temp.innerText = day1.temp + "°C";
            day1Container.append(day1Temp);
            const day1Con = document.createElement('div');
            day1Con.className = "condition-item";
            day1Con.innerText = day1.condition;
            day1Container.append(day1Con);
            const day1RainChance = document.createElement('div');
            day1RainChance.className = "rain-item";
            day1RainChance.innerText = day1.rainChance + "%";
            day1Container.append(day1RainChance);

            const day2Container = document.createElement("div");
            day2Container.className = "day-container";
            weatherContainer.append(day2Container);
            day2.temp = userLocationData.day2.maxtemp_c;
            day2.condition = userLocationData.day2.condition.text;
            day2.rainChance = userLocationData.day2.daily_chance_of_rain;
            const day2Temp = document.createElement('div');
            day2Temp.className = "weather-item";
            day2Temp.innerText = day2.temp + "°C";
            day2Container.append(day2Temp);
            const day2Con = document.createElement('div');
            day2Con.className = "condition-item";
            day2Con.innerText = day2.condition;
            day2Container.append(day2Con);
            const day2RainChance = document.createElement('div');
            day2RainChance.className = "rain-item";
            day2RainChance.innerText = day2.rainChance + "%";
            day2Container.append(day2RainChance);

            const day3Container = document.createElement("div");
            day3Container.className = "day-container";
            weatherContainer.append(day3Container);
            day3.temp = userLocationData.day3.maxtemp_c;
            day3.condition = userLocationData.day3.condition.text;
            day3.rainChance = userLocationData.day3.daily_chance_of_rain;
            const day3Temp = document.createElement('div');
            day3Temp.className = "weather-item";
            day3Temp.innerText = day3.temp + "°C";
            day3Container.append(day3Temp);
            const day3Con = document.createElement('div');
            day3Con.className = "condition-item";
            day3Con.innerText = day3.condition;
            day3Container.append(day3Con);
            const day3RainChance = document.createElement('div');
            day3RainChance.className = "rain-item";
            day3RainChance.innerText = day3.rainChance + "%";
            day3Container.append(day3RainChance);

            const day4Container = document.createElement("div");
            day4Container.className = "day-container";
            weatherContainer.append(day4Container);
            day4.temp = userLocationData.day4.maxtemp_c;
            day4.condition = userLocationData.day4.condition.text;
            day4.rainChance = userLocationData.day4.daily_chance_of_rain;
            const day4Temp = document.createElement('div');
            day4Temp.className = "weather-item";
            day4Temp.innerText = day4.temp + "°C";
            day4Container.append(day4Temp);
            const day4Con = document.createElement('div');
            day4Con.className = "condition-item";
            day4Con.innerText = day4.condition;
            day4Container.append(day4Con);
            const day4RainChance = document.createElement('div');
            day4RainChance.className = "rain-item";
            day4RainChance.innerText = day4.rainChance + "%";
            day4Container.append(day4RainChance);

            const day5Container = document.createElement("div");
            day5Container.className = "day-container";
            weatherContainer.append(day5Container);
            day5.temp = userLocationData.day5.maxtemp_c;
            day5.condition = userLocationData.day5.condition.text;
            day5.rainChance = userLocationData.day5.daily_chance_of_rain;
            const day5Temp = document.createElement('div');
            day5Temp.className = "weather-item";
            day5Temp.innerText = day5.temp + "°C";
            day5Container.append(day5Temp);
            const day5Con = document.createElement('div');
            day5Con.className = "condition-item";
            day5Con.innerText = day5.condition;
            day5Container.append(day5Con);
            const day5RainChance = document.createElement('div');
            day5RainChance.className = "rain-item";
            day5RainChance.innerText = day5.rainChance + "%";
            day5Container.append(day5RainChance);

            const day6Container = document.createElement("div");
            day6Container.className = "day-container";
            weatherContainer.append(day6Container);
            day6.temp = userLocationData.day6.maxtemp_c;
            day6.condition = userLocationData.day6.condition.text;
            day6.rainChance = userLocationData.day6.daily_chance_of_rain;
            const day6Temp = document.createElement('div');
            day6Temp.className = "weather-item";
            day6Temp.innerText = day6.temp + "°C";
            day6Container.append(day6Temp);
            const day6Con = document.createElement('div');
            day6Con.className = "condition-item";
            day6Con.innerText = day6.condition;
            day6Container.append(day6Con);
            const day6RainChance = document.createElement('div');
            day6RainChance.className = "rain-item";
            day6RainChance.innerText = day6.rainChance + "%";
            day6Container.append(day6RainChance);

            const day7Container = document.createElement("div");
            day7Container.className = "day-container";
            weatherContainer.append(day7Container);
            day7.temp = userLocationData.day7.maxtemp_c;
            day7.condition = userLocationData.day7.condition.text;
            day7.rainChance = userLocationData.day7.daily_chance_of_rain;
            const day7Temp = document.createElement('div');
            day7Temp.className = "weather-item";
            day7Temp.innerText = day7.temp + "°C";
            day7Container.append(day7Temp);
            const day7Con = document.createElement('div');
            day7Con.className = "condition-item"
            day7Con.innerText = day7.condition;
            day7Container.append(day7Con);
            const day7RainChance = document.createElement('div');
            day7RainChance.className = "rain-item"
            day7RainChance.innerText = day7.rainChance + "%";
            day7Container.append(day7RainChance);

            if (day1.condition.includes("cloudy")) {
                document.body.style.backgroundImage = "url('/home/nick/repos/Weather-app/src/images/cloudy.jpg')";
            }
            else if (day1.condition.includes("Sunny")){
                document.body.style.backgroundImage = "url('/home/nick/repos/Weather-app/src/images/sun.webp')";
            }
            else if (day1.condition.includes("rain")){
                document.body.style.backgroundImage = "url('/home/nick/repos/Weather-app/src/images/rain.jpg')";
            }


            userLocationButton.addEventListener('click', function(e){
                div.removeChild(weatherContainer);
            })
        } getWeatherData();
    })
}
getUserLocationData();
