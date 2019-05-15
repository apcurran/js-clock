setInterval(setTime, 1000);

const hourHand = document.querySelector(".hour-hand");
const minHand = document.querySelector(".minute-hand");
const secHand = document.querySelector(".second-hand");

function setTime() {
    const current = new Date();
    const currentSecond = current.getSeconds();
    const secDegrees = ((currentSecond / 60) * 360) + 90; // Offset the initial starting point of seconds hand div.
    secHand.style.transform = `rotate(${secDegrees}deg)`;

    const currentMin = current.getMinutes();
    const minDegrees = ((currentMin / 60) * 360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const currentHr = current.getHours();
    const hrDegrees = ((currentHr / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hrDegrees}deg)`;

    if(currentSecond === 0) {
        secHand.style.transitionDuration = `0ms`;
        minHand.style.transitionDuration = `0ms`;
        hourHand.style.transitionDuration = `0ms`;
    } else {
        secHand.style.transitionDuration = `50ms`;
        minHand.style.transitionDuration = `50ms`;
        hourHand.style.transitionDuration = `50ms`;
    }
}

setTime();