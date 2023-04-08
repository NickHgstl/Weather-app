import './style.css';
let div = document.querySelector('#content');
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
userLocationData.day1 = "help";

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
            weatherContainer.id = "weatherContainer";
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
            const day1Temp = document.createElement('div');
            day1Temp.id = "weatherItem"
            day1Temp.innerText = day1.temp;
            weatherContainer.append(day1Temp);
            const day1Con = document.createElement('div');
            day1Con.id = "condition-item"
            day1Con.innerText = day1.condition;
            weatherContainer.append(day1Con);

            day2.temp = userLocationData.day2.maxtemp_c;
            day2.condition = userLocationData.day2.condition.text;
            day2.rainChance = userLocationData.day2.daily_chance_of_rain;
            const day2Temp = document.createElement('div');
            day2Temp.id = "weatherItem"
            day2Temp.innerText = day2.temp;
            weatherContainer.append(day2Temp);
            const day2Con = document.createElement('div');
            day2Con.id = "condition-item"
            day2Con.innerText = day2.condition;
            weatherContainer.append(day2Con);


            day3.temp = userLocationData.day3.maxtemp_c;
            day3.condition = userLocationData.day3.condition.text;
            day3.rainChance = userLocationData.day3.daily_chance_of_rain;
            const day3Temp = document.createElement('div');
            day3Temp.id = "weatherItem"
            day3Temp.innerText = day3.temp;
            weatherContainer.append(day3Temp);
            const day3Con = document.createElement('div');
            day3Con.id = "condition-item"
            day3Con.innerText = day3.condition;
            weatherContainer.append(day3Con);


            day4.temp = userLocationData.day4.maxtemp_c;
            day4.condition = userLocationData.day4.condition.text;
            day4.rainChance = userLocationData.day4.daily_chance_of_rain;
            const day4Temp = document.createElement('div');
            day4Temp.id = "weatherItem"
            day4Temp.innerText = day4.temp;
            weatherContainer.append(day4Temp);
            const day4Con = document.createElement('div');
            day4Con.id = "condition-item"
            day4Con.innerText = day4.condition;
            weatherContainer.append(day4Con);


            day5.temp = userLocationData.day5.maxtemp_c;
            day5.condition = userLocationData.day5.condition.text;
            day5.rainChance = userLocationData.day5.daily_chance_of_rain;
            const day5Temp = document.createElement('div');
            day5Temp.id = "weatherItem"
            day5Temp.innerText = day5.temp;
            weatherContainer.append(day5Temp);
            const day5Con = document.createElement('div');
            day5Con.id = "condition-item"
            day5Con.innerText = day5.condition;
            weatherContainer.append(day5Con);


            day6.temp = userLocationData.day6.maxtemp_c;
            day6.condition = userLocationData.day6.condition.text;
            day6.rainChance = userLocationData.day6.daily_chance_of_rain;
            const day6Temp = document.createElement('div');
            day6Temp.id = "weatherItem"
            day6Temp.innerText = day6.temp;
            weatherContainer.append(day6Temp);
            const day6Con = document.createElement('div');
            day6Con.id = "condition-item"
            day6Con.innerText = day6.condition;
            weatherContainer.append(day6Con);


            day7.temp = userLocationData.day7.maxtemp_c;
            day7.condition = userLocationData.day7.condition.text;
            day7.rainChance = userLocationData.day7.daily_chance_of_rain;
            const day7Temp = document.createElement('div');
            day7Temp.id = "weatherItem"
            day7Temp.innerText = day7.temp;
            weatherContainer.append(day7Temp);
            const day7Con = document.createElement('div');
            day7Con.id = "condition-item"
            day7Con.innerText = day7.condition;
            weatherContainer.append(day7Con);

            
        } getWeatherData();
    })
       

        

}
getUserLocationData();
