console.log("And we are live!");

class Timer {
  constructor(hanging, resting, sets) {
    this.initialCountdown = 6;
    this.hangingFor = hanging;
    this.restingFor = resting;
    this.numberSets = sets;
    this.activeTimer = {
      initialCountdown: false,
      hangingTimer: false,
      restingTimer: false,
    };
  }

  decrementInitialCountdown() {
    this.activeTimer.initialCountdown = true;
    let timer = this.initialCountdown;
    let x = setInterval(() => {
      if (this.activeTimer.initialCountdown && timer > 0) {
        timer--;
        document.getElementById("timer-display").innerText = timer;
      } else if (timer < 1) {
        clearInterval(x);
        this.activeTimer.initialCountdown = false;
        if (this.numberSets > 0) {
          this.decrementHangingTime();
        }
      }
    }, 1000);
  }

  decrementHangingTime() {
    this.activeTimer.hangingTimer = true;
    let timer = this.hangingFor;
    let x = setInterval(() => {
      if (this.activeTimer.hangingTimer && timer > 0) {
        timer--;
        document.getElementById("timer-display").innerText = timer;
      } else if (timer < 1) {
        clearInterval(x);
        this.activeTimer.hangingTimer = false;

        if (this.numberSets > 0) {
          //decrementRestingTime
        }
      }
    }, 1000);
  }
}

//   decrementHangingTimer() {
//     if (initialCountdown > 0) {
//       initialCountdown--;
//       document.getElementById("timer-display").innerText = initialCountdown;
//     }
//   }
// }

document.getElementById("start-button").addEventListener("click", () => {
  const hangingFor = document.getElementById("input-hang-length").value;
  const restingFor = document.getElementById("input-rest-length").value;
  const numberSets = document.getElementById("input-number-sets").value;

  let thisSession = new Timer(hangingFor, restingFor, numberSets);

  thisSession.activeTimer.initialCountdown = true;
  document.getElementById("timer-display").innerText = "Countdown starting....";

  thisSession.decrementInitialCountdown();

  // newDate.setSeconds(newDate.getSeconds() + 120);

  // console logs
  console.log(thisSession);

  let file = document.getElementById("file").value;
  console.log({ file });
});

/* 
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

  // Display the result in the element with id="demo"
  document.getElementById("").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
 */
