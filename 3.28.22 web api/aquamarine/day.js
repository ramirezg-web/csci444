accessData= async()=>{
  let url="https://api.openweathermap.org/data/2.5/weather?q=New+York&units=imperial&APPID=7f12974fb29ca234ee8dea4386063a22"

  let response= await fetch(url);
  if (response.ok){
    let json=await response.json();
    console.log(json);
    weatherData(json);

  } else{
    console.log('error: '+response.status);
  }
}

weatherData=(response)=>{
  // access sunrise and sunset
  let sunrise= response.sys.sunrise;
  console.log(sunrise);
  let sunset=response.sys.sunset;
  console.log(sunset);

  let currentTime= Math.floor(Date.now()/1000);
  if (!(currentTime<sunrise || currentTime>= sunset)){
    document.querySelector('.color').src="images/cie-chart-invert.png";
    document.querySelector('body').style.backgroundColor="black";
  }
}
window.addEventListener('load',accessData);
