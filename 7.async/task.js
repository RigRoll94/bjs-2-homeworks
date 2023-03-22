class AlarmClock {

    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }
  
    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error('Отсутствуют обязательные аргументы');
        } else if (this.alarmCollection.some(clock => clock.time === time)) {
            console.warn('Уже присутствует звонок на это же время');
        }
        return this.alarmCollection.push({
            time,
            callback,
            canCall: true
        });
    }
  
    removeClock(time) {
        this.alarmCollection = this.alarmCollection.filter(clock => clock.time !== time);
    }
  
    getCurrentFormattedTime() {
        return new Date().toTimeString().slice(0, 5);
    }
  
    start() {
        if (this.intervalId !== null) {
            return;
        }
        this.intervalId = setInterval(() => this.alarmCollection.forEach((item, index) => {
            if (this.alarmCollection[index].time === this.getCurrentFormattedTime() && this.alarmCollection[index].canCall === true) {
                this.alarmCollection[index].canCall = false;
                this.alarmCollection[index].callback();
            }
        }), 1000);
    }
  
    stop() {
        if (this.intervalId !== null) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
  
    resetAllCalls() {
        this.alarmCollection.forEach(item => item.canCall = true);
    }
  
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
  }