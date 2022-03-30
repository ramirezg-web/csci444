//position object
let content=document.querySelector('main');
//position error object
let button=document.querySelector('button');

function getLocation(){
  if (navigator.geolocation){
    content.innerHTML="<p> attempting to access your location... </p>";
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else{
    content.innerHTML="<p> Unable to determine your location </p>";
  }

}
function showError(error){
  switch (error.code) {
    case error.PERMISSION_DENIED:
      console.log('User denied');
      content.innerHTML="<p> denied</p>";
      break;
    case error.POSITION_UNAVAILABLE:
    console.log('unavailable location info');
    break;

    case error.TIMEOUT:
    console.log('the request has timed out');
    break;

    case error.UNKNOWN_ERROR:
    console.log('an unknown error has occured');
    break;
  }
}
function showPosition(position){
  let lat = "<p> Latitude: "+ position.coords.latitude +"</p>";
  let lon = "<p> Longitude: "+ position.coords.longitude +"</p>";
  let coordinates= lat+ lon;
  content.innerHTML= coordinates;

}
button.addEventListener('click', getLocation);
