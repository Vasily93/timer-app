class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

        start = () => {
            if(this.onStart) {
                this.onStart(this.timeRemaining);
            }
            this.tick(); //calling 1st second tick right after the click
            this.interval = setInterval(this.tick, 20);
        }
        pause = () => {
            clearInterval(this.interval);
        }
        tick = () => {
            if(this.timeRemaining > 0 ) {
                if(this.onTick) {
                    this.onTick(this.timeRemaining);
                }
                this.timeRemaining = this.timeRemaining - .02; //using get and set opertators
            } else {
                this.pause();
                if(this.onComplete) {
                    this.onComplete();
                }
            }
        }
        get timeRemaining() {
            return parseFloat(this.durationInput.value);
        }
        set timeRemaining(seconds) {
            this.durationInput.value = seconds.toFixed(2); //rounding up float num to 2 decimels
        }
    
}