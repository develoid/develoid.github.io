var count = 15;
var counter = setInterval(timer, 1000);
function timer() {
  count--;
  if (count <= 0) {
    clearInterval(counter);
    document.getElementById("timer").innerHTML = "0";
    window.location.replace('https://develoid.net')
    return;
  }
  document.getElementById("timer").innerHTML = count;
}