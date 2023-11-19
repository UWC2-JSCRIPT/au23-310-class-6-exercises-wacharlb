/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car {
    constructor(model) {
        this.currentSpeed = 0;
        this.model = model;
    

        this.accelerate = () => {
            this.currentSpeed++;
        };

        this.brake = () => {
            this.currentSpeed--;
        }

        this.toString = () => {
            console.log(`{${this.currentSpeed}, ${this.model}}`)
        }
    };
};

const car = new Car("Dodge");
car.accelerate();
car.accelerate();
car.brake();

car.toString();
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */

//  Create an instance, accelerate twice, brake once, and console log the instance.toString()

c