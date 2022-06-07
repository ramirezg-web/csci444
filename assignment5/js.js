
accessData=async()=>{
// let url="https://eodhistoricaldata.com/api/options/AAPL.US?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX"
let url="https://eodhistoricaldata.com/api/real-time/BTC-USD.CC?api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX&fmt=json";
let response= await fetch (url);
if (response.ok){
  let json=await response.json();
  console.log(json);
  dailyPercent(json);

} else{
  console.log('error')
}
}
dailyPercent= (response)=>{
  let percent= response.change_p;
  console.log('Daily Change Percent = '+percent);

  // document.querySelector('#direction').textContent=windDirection+"deg";
  if (!(percent<=0)){

  // if (percent<=0){
    document.querySelector('body').style.backgroundColor="green";
    // let transformStyle="rotateX(90deg) translateZ(-35px) rotate("+windDirection+"deg)";
    // document.querySelector('img.layer').style.transform=transformStyle;
  } else{
    document.querySelector('body').style.backgroundColor="red";
    // document.querySelector('img.layer').style.transform=transformStyle;

  }

}
window.addEventListener('load',accessData);
