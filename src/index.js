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

            day2.temp = userLocationData.day2.maxtemp_c;
            day2.condition = userLocationData.day2.condition.text;
            day2.rainChance = userLocationData.day2.daily_chance_of_rain;

            day3.temp = userLocationData.day3.maxtemp_c;
            day3.condition = userLocationData.day3.condition.text;
            day3.rainChance = userLocationData.day3.daily_chance_of_rain;

            day4.temp = userLocationData.day4.maxtemp_c;
            day4.condition = userLocationData.day4.condition.text;
            day4.rainChance = userLocationData.day4.daily_chance_of_rain;

            day5.temp = userLocationData.day5.maxtemp_c;
            day5.condition = userLocationData.day5.condition.text;
            day5.rainChance = userLocationData.day5.daily_chance_of_rain;

            day6.temp = userLocationData.day6.maxtemp_c;
            day6.condition = userLocationData.day6.condition.text;
            day6.rainChance = userLocationData.day6.daily_chance_of_rain;

            day7.temp = userLocationData.day7.maxtemp_c;
            day7.condition = userLocationData.day7.condition.text;
            day7.rainChance = userLocationData.day7.daily_chance_of_rain;

            console.log(userLocationData.day1);
            console.log(day1.temp);
            console.log(day1.condition);
            console.log(day1.rainChance);

            
        } getWeatherData();
    })
       

        

}
getUserLocationData();