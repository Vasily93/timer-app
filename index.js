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
            this.tick(); //calling 1st second tick right after the click
            this.interval = setInterval(this.tick, 1000);
        }
        pause = () => {
            clearInterval(this.interval);
        }
        onDurationChange() {
            
        }
        tick = () => {
            if(this.timeRemaining > 0 ) {
                this.timeRemaining = this.timeRemaining - 1; //using get and set opertators
            } else {
                clearInterval(this.interval);
                console.log('Finish!!');
            }
        }
        get timeRemaining() {
            return parseFloat(this.durationInput.value);
        }
        set timeRemaining(seconds) {
            this.durationInput.value = seconds;
        }
    
}

const startB = document.getElementById('start');
const pauseB = document.getElementById('pause');
const durationIn = document.getElementById('duration');

const newTimer = new Timer(durationIn, startB, pauseB);



console.log(startB, pauseB);