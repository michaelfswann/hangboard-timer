console.log("And we are live!");

document.getElementById("start-button").addEventListener("click", () => {
  const hangingFor = document.getElementById("input-hang-length").value;
  const restingFor = document.getElementById("input-rest-length").value;
  const numberSets = document.getElementById("input-number-sets").value;

  // create seperate dates so they are not referenceing each other
  const currentDate = new Date();
  const newDate = new Date();

  // initiate countdown to start for thirty seconds

  let initialCountdown = 6;

  document.getElementById("timer-display").innerText = "Countdown starting....";

  function decrementInitialCountdown() {
    if (initialCountdown > 0) {
      initialCountdown--;
      document.getElementById("timer-display").innerText = initialCountdown;
    }
  }

  setInterval(decrementInitialCountdown, 1000);

  // newDate.setSeconds(newDate.getSeconds() + 120);

  // console logs
  console.log({ hangingFor, restingFor, numberSets, currentDate, newDate });

  let file = document.getElementById("file").value;
  console.log({ file });
});

// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {});
// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = countDownDate - now;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Display the result in the element with id="demo"
//   document.getElementById("").innerHTML =
//     days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

//   // If the count down is finished, write some text
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("demo").innerHTML = "EXPIRED";
//   }
// }, 1000);
