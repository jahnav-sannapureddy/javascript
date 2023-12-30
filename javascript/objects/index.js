function Engine(cylinders, size){
    this.cylinders = cylinders;
    this.size = size;
}

function Car(make, model, color, cylinders, size){
    this.make = make;
    this.model = model;
    this.color = color;
    this.engine = new Engine(cylinders, size);
}

const jackCar = new Car('Eagle', 'Talon Tsi', 'Silver', 4, 2.2);
console.log(jackCar);

jackCar.year = 2016;
jackCar['doors'] = 4;
console.log(jackCar);

const myCar = {
    make: 'Honda',
    model: 'dk',
    color: 'red',
    engine: {
        cylinders: 4,
        size: 2.2,
    },
    year: 2012
}
myCar.doors = 4;
console.log(myCar);