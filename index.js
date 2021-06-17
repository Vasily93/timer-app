const startB = document.getElementById('start');
const pauseB = document.getElementById('pause');
const durationIn = document.getElementById('duration');

const circle = document.querySelector('circle');
const perimiter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimiter); 

let duration;
const newTimer = new Timer(durationIn, startB, pauseB, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        circle.setAttribute('stroke-dashoffset',
            perimiter * timeRemaining / duration - perimiter
        )
    },
    onComplete() {
        console.log('Timer completed!')
    }
});


