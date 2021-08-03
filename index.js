class CountdownTimer {

    constructor({ targetDate }) {
        
        this.targetDate = targetDate,//установленный срок
            this.days = document.querySelector('[data-value="days"]'),
            this.hours = document.querySelector('[data-value="hours"]'),
            this.mins = document.querySelector('[data-value="mins"]'),
            this.secs = document.querySelector('[data-value="secs"]'),
            
        this.start();
       
    }

   
    //Установка обратного таймера
    start() {
 
         setInterval(() => {


            let now = new Date().getTime();//текущее время
            let t = this.targetDate.getTime() - now;//разница между установленным сроком и текущим временем
            const timeStart = this.getTimeComponents(t);//вывод функции времени : день, час, минута, секунда
             this.updateClockFace(timeStart);//вывод текстового контента времени

        }, 1000);

    }
    
    

 

    pad(value) {
        return String(value).padStart(2, '0');
    };





    getTimeComponents(t) {
    
        let days = this.pad(Math.floor(t / (1000 * 60 * 60 * 24)));
        let hours = this.pad(Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        let mins = this.pad(Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)));
        let secs = this.pad(Math.floor((t % (1000 * 60)) / 1000));

        return ({ days, hours, mins, secs })
    
    
    }


    updateClockFace({ days, hours, mins, secs }) {


        this.days.textContent = `${days}`;
        this.hours.textContent = `${hours}`;
        this.mins.textContent = `${mins}`;
        this.secs.textContent = `${secs}`;
     

    };


}




const timer =  new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Sep, 03, 2021'),
});
    















 
  


