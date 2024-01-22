export class Car
{
    constructor(model,year)
    {
        this.model=model;
        this.year=year;
    }

    toString()
    {
        return "car model = "+this.model+" , car year = "+this.year;
    }
}
//export default Car;