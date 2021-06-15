const startB = document.getElementById('start');
const pauseB = document.getElementById('pause');
const durationIn = document.getElementById('duration');

const newTimer = new Timer(durationIn, startB, pauseB, {
    onStart() {
        console.log('Timer Started!')
    },
    onTick() {
        console.log('Ticked!');
    },
    onComplete() {
        console.log('Timer completed!')
    }
});


