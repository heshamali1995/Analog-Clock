let clockSection = document.querySelector(".clock");

// Add Paragraphs Elements Thorugh Javascript
for (let x=1; x<13; x++) {
  clockSection.innerHTML += `
    <p>${x}</p>
  `;
};

// Add Animation To Border Radius
clockSection.onmouseover = function() {
  clockSection.style.borderRadius = "50%";
}

clockSection.onmouseout = function() {
  clockSection.style.borderRadius = "10%"
}

// Set Time
let h = document.getElementById("hours"),
    m = document.getElementById("minutes"),
    s = document.getElementById("seconds");

function setTime() {
  let myDate = new Date(),
      secondsHands = myDate.getSeconds() / 60,
      minutesHands = (secondsHands + myDate.getMinutes()) / 60,
      hoursHands = (minutesHands + myDate.getHours()) / 12;
      rotateHands(s, secondsHands);
      rotateHands(m, minutesHands);
      rotateHands(h, hoursHands);
}

function rotateHands(element, rotateRatio) {
  element.style.setProperty("--rotation", rotateRatio * 360)
}

setTime();
window.setInterval(setTime, 1000);