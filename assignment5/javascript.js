
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
  // if (percent<=0){

  if (!(percent<=0)){
    document.querySelector('body').style.backgroundColor="green";
    document.querySelector('h1').style.color="green";
    document.getElementById('globe').style.display="none";

    document.querySelector('p').textContent="The BTC is up today at " + percent + "%";

  } else{
    document.querySelector('body').style.backgroundColor="red";
    // document.getElementById('container').style.background="url('media/all-colors.png')";
    document.getElementById('globe').style.display="inherit";
    document.getElementById('person').style.display="none";

    document.querySelector('h1').style.color="red";
    document.querySelector('p').textContent="The BTC is down today at " + percent + "%";

  }

}
window.addEventListener('load',accessData);
