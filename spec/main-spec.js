const main = require('../main/main');

describe('taxi fee', function () {
    let taxi;
    beforeEach(()=>{
        taxi = main().taxi();
      });

    it('should be 6 when taxi runs 2KM',() =>{
        taxi.distance=2;
        expect(taxi.fee).toBe(6);
    });

    it('should be 7 when taxi runs 3KM',() =>{
        taxi.distance=3;
        expect(taxi.fee).toBe(7);
    });
    it('should be 11 when taxi runs 8KM',() =>{
        taxi.distance=8;
        expect(taxi.fee).toBe(11);
    });
    it('should be 12 when taxi runs 9KM',() =>{
        taxi.distance=9;
        expect(taxi.fee).toBe(12);
    });
    it('should be 25 when taxi runs 20KM',() =>{
        taxi.distance=20;
        expect(taxi.fee).toBe(25);
    });
    it('should be 25+4*0.25 = 26 when taxi runs 20KM and waiting 4 min',() =>{
        taxi.distance=20;
        taxi.waitingTime = 4;
        expect(taxi.fee).toBe(26);
    });
    it('should be 13 when taxi runs 9KM and waiting 3 min',() =>{
        taxi.distance=9;
        taxi.waitingTime = 3;
        expect(taxi.fee).toBe(13);
    });
    it('should be 12 when taxi runs 8KM and waiting 3 min',() =>{
        taxi.distance=8;
        taxi.waitingTime = 3;
        expect(taxi.fee).toBe(12);
    });
    it('should be 8 when taxi runs 3KM and waiting 3 min',() =>{
        taxi.distance=3;
        taxi.waitingTime = 3;
        expect(taxi.fee).toBe(8);
    });
    it('should be 7 when taxi runs 2KM and waiting 3 min',() =>{
        taxi.distance=2;
        taxi.waitingTime = 3;
        expect(taxi.fee).toBe(7);
    });
});
