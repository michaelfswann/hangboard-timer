console.log("And we are live!");

let running = false;

class Timer {
  constructor(hanging, resting, sets) {
    this.initialCountdown = 3;
    this.hangingFor = hanging;
    this.restingFor = resting;
    this.numberSets = sets;
    this.workingSets = 0;
    this.activeTimer = {
      initialCountdown: false,
      hangingTimer: false,
      restingTimer: false,
    };
    this.interval = 0;
  }

  initialise() {
    // clearInterval(this.interval);
    this.workingSets = 2 * this.numberSets;
    this.decrementInitialCountdown();
  }

  decrementInitialCountdown() {
    this.activeTimer.initialCountdown = true;
    let timer = this.initialCountdown;
    document.getElementById("phase-display").innerText = "Get Ready";
    document.getElementById("timer-display").innerText = timer;

    this.interval = setInterval(() => {
      if (this.activeTimer.initialCountdown && timer > 0) {
        timer--;
        document.getElementById("timer-display").innerText = timer;
      } else if (timer < 1) {
        clearInterval(this.interval);
        this.activeTimer.initialCountdown = false;
        if (this.workingSets > 0) {
          this.decrementHangingTime();
        }
      }
    }, 1000);
  }

  decrementHangingTime() {
    this.activeTimer.hangingTimer = true;
    let timer = this.hangingFor;
    document.getElementById("phase-display").innerText = "Hang";
    document.getElementById("timer-display").innerText = timer;

    this.interval = setInterval(() => {
      if (this.activeTimer.hangingTimer && timer > 0) {
        timer--;
        document.getElementById("timer-display").innerText = timer;
      } else if (timer < 1) {
        clearInterval(this.interval);
        this.activeTimer.hangingTimer = false;
        console.log(this.workingSets);

        if (this.workingSets > 0) {
          this.workingSets--;
          this.decrementRestingTime();
        } else {
          document.getElementById("phase-display").innerText = "Finished";
          document.getElementById("timer-display").innerText = "";
        }
      }
    }, 1000);
  }

  decrementRestingTime() {
    this.activeTimer.restingTimer = true;
    let timer = this.restingFor;
    document.getElementById("phase-display").innerText = "Rest";
    document.getElementById("timer-display").innerText = timer;

    this.interval = setInterval(() => {
      if (this.activeTimer.restingTimer && timer > 0) {
        timer--;
        document.getElementById("timer-display").innerText = timer;
      } else if (timer < 1) {
        clearInterval(this.interval);
        this.activeTimer.restingTimer = false;
        console.log(this.workingSets);

        if (this.workingSets > 0) {
          this.workingSets--;
          this.decrementHangingTime();
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
  if (!running) {
    running = true;
    const hangingFor = document.getElementById("input-hang-length").value;
    const restingFor = document.getElementById("input-rest-length").value;
    const numberSets = document.getElementById("input-number-sets").value;

    const thisSession = new Timer(hangingFor, restingFor, numberSets);

    document.getElementById("timer-display").innerText =
      "Countdown starting....";

    clearInterval(thisSession.interval);

    thisSession.initialise();

    // newDate.setSeconds(newDate.getSeconds() + 120);

    // console logs
    console.log(thisSession);

    // let file = document.getElementById("file").value;
    // console.log({ file });
  } else {
    alert("already running: refresh page else timer will be incorrect");
  }
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
