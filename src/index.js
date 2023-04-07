import './style.css';
let div = document.querySelector('#content');
let userLocation = document.querySelector('#user-location-input');
let userLocationButton = document.querySelector('#user-location-button');


function userLocationData(currentTempC, currentTempF) {
    this.currentTempC = currentTempC;
    this.currentTempF = currentTempF


}



const getUserLocationData = function(){        
    userLocationButton.addEventListener('click', function(e){
        let userLocationValue = userLocation.value;
         async function getWeatherData() {
            let response = await fetch('http://api.weatherapi.com/v1/current.json?key=ceb031ce372c4451993122639230604&q=' + userLocationValue + '&aqi=no', {mode: 'cors'})
            let weatherResponse = await response.json();
            
            userLocationData.currentTempC = weatherResponse.current.temp_c
            userLocationData.currentTempF = weatherResponse.current.temp_f
            console.log(userLocationData.currentTempC + " graden Cel")
            console.log(userLocationData.currentTempF + " graden Fah")

            
        } getWeatherData();
    })
        
       

        

}
getUserLocationData();