let refs = {
    
            days: document.querySelector('[data-value="days"]'),
            hours: document.querySelector('[data-value="hours"]'),
            mins: document.querySelector('[data-value="mins"]'),
            secs: document.querySelector('[data-value="secs"]'),

}




class CountdownTimer {

    constructor({ targetDate, onTick, selector }) {
        
        this.onTick = onTick;
        this.selector = selector;
            
        this.targetDate = targetDate;
            
        this.start();
       
    }

   
    
    start() {
        this.targetDate = new Date(this.targetDate).getTime();
         setInterval(() => {


            let now = new Date();//текущее время
            let t = this.targetDate - now;
            const timeStart = this.getTimeComponents(t);
             this.onTick(timeStart);
            
             
        }, 1000);

    }
    
    

 

    pad(value) {
        return String(value).padStart(2, '0');
    };





    getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }



 }   






    

const timer = new CountdownTimer({
    onTick: updateClockFace,
  selector: '#timer-1',
  targetDate: new Date('Sep, 03, 2021'),
});
    

function updateClockFace({ days, hours, mins, secs }) {

 this.selector = `${days}`
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${mins}`;
        refs.secs.textContent = `${secs}`;

    
  };   














 
  


