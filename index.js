

class CountdownTimer {

    constructor({ targetDate, selector }) {
        
       
        this.selector = selector;
            
        this.targetDate = targetDate;
        
     
            
    }
     start() {
        let startTime = this.targetDate.getTime();
         setInterval(() => {


            const now = new Date();//текущее время
            const t = startTime - now;
            const timeStart = this.getTimeComponents(t);
             this.updateClockFace(timeStart);
            
             
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

    
     updateClockFace({ days, hours, mins, secs }) {
      
       
       
       const timerId = document.querySelector(this.selector).children;
       
        timerId[0].childNodes[1].textContent = `${days}`;
        timerId[1].childNodes[1].textContent = `${hours}`;
        timerId[2].childNodes[1].textContent = `${mins}`;
        timerId[3].childNodes[1].textContent = `${secs}`;
       
};



 }   



const timer = new CountdownTimer({
   
  selector: '#timer-1',
  targetDate: new Date('Sep, 03, 2021'),
});

const timer1 = new CountdownTimer({
   
  selector: '#timer-2',
  targetDate: new Date('Nov, 02, 2021'),
});

const timer3 = new CountdownTimer({
   
  selector: '#timer-3',
  targetDate: new Date('Dec, 01, 2021'),
});




timer.start()
timer1.start()
timer3.start()


    

 

    





    