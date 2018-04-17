module.exports = function main() {
    return {
        taxi(){return new Taxi()}
    }

};
class Taxi {
   constructor() {
       this._distance = 0;
       this._waitingTime = 0;
   }
   get distance(){
       return this._distance;
   }
   set distance(dis) {
       this._distance = dis;
   }
   get waitingTime() {
       return this._waitingTime;
   }
   set waitingTime(min){
       this._waitingTime = min;
   }
   get fee(){
       let fee = 6;
       if(this._distance >2 && this.distance<=8)
           fee += (this._distance-2)*0.8;
       if(this._distance > 8) {
           fee+= ((this._distance -2)*0.8 +(this._distance - 8)*0.4);
       }
       fee += 0.25*this._waitingTime;
       return Math.round(fee);
   }

}
