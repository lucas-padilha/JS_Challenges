class UpdateTimer {
    constructor(updateFrequency, value, controller)
    {
        this.updateFrequency = updateFrequency;
        this.value = value;
        this.controller = controller;
    }
    number = 0;
    
    SetTimer(signal){
        const intervalId = setInterval(() => {
            console.clear();
            console.log(this.number);            
            this.number += this.value;
        }, this.updateFrequency);
        return intervalId;
    }

    AbortTimer(intervalId)
    {
        console.log("Abort Started!");
        setTimeout(() => {            
            console.log("Timer aborted!");
            clearInterval(intervalId);

        }, 5000);
    }

    Timeout()
    {
        console.log("Started!");
        setTimeout(() => {            
            console.log("Fired!");
        }, 5000);
    }
}

var timer = new UpdateTimer(1000, 5, controller);
//timer.Timeout();
const token = timer.SetTimer();
timer.AbortTimer(token);
