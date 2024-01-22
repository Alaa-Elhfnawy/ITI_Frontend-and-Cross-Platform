import { Car } from "./car.js";

export class FlyingCar extends Car
{
    constructor(model,year,canFly)
    {
        super(model,year);
        this.canFly=canFly;
    }

    toString()
    {
        if(this.canFly==true)
        {
            return super.toString()+'I can Fly';
        }
        else
        {
            return super.toString()+"I can't fly";
        }
    }
}
//export default FlyingCar;