getLocation=()=>{
  if (navigator.geolocation){
    document.querySelector("#direction").textContent="attempting ";
    navigator.geolocation.getCurrentPosition(showPosition);

  } else{
    document.querySelector("#direction").textContent="decline ";

  }
}

showPosition= (position)=>{
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  console.log(lat)
  accessData(lat, lon);
}
accessData=async(lat, lon)=>{
let url="https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid=7f12974fb29ca234ee8dea4386063a22"
let response= await fetch (url);
if (response.ok){
  let json=await response.json();
  console.log(json);
  weatherData(json);

} else{
  console.log('error')
}
}
weatherData= (response)=>{
  let windDirection= response.wind.deg;
  console.log('wind direction '+windDirection);
  document.querySelector('#direction').textContent=windDirection+"deg";

  let transformStyle="rotateX(90deg) translateZ(-35px) rotate("+windDirection+"deg)";
  document.querySelector('img.layer').style.transform=transformStyle;
}
window.addEventListener('load',getLocation);
