function Car(color, model){

    this.color  = color ,
    this.model = model ,

    this.start = () => {
        console.log('the car is started')
    }


}


let bmw = new Car("red", 2020);

console.log(Car.prototype)


Car.prototype.addTitle = () => {
    return "helo mr fareed thanks"
}

Car.prototype.legth = 120 ;



console.log(bmw.addTitle())
console.log(bmw.legth)

console.log("car")

module.exports = Car;

