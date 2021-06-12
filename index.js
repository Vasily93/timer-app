class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        // this.durationInput.addEventListener('change', this.tick)
    }

        start = () => {
            setInterval(this.tick, 1000)
        }
        pause = () => {
            console.log('Pause timer')
        }
        onDurationChange() {
            
        }
        tick = () => {
            let seconds = parseInt(this.durationInput.value);
            if(seconds > 0 ) {
                seconds--;
                this.durationInput.value = seconds;
            } else {
                console.log('Finish!!')
            }
        }
    
}

const startB = document.getElementById('start');
const pauseB = document.getElementById('pause');
const durationIn = document.getElementById('duration');

const newTimer = new Timer(durationIn, startB, pauseB);



console.log(startB, pauseB);