interface Car{

    engine :String,
    fuelCapacity :number,
    engineType :String,
    efficiency :number,
}

//Re-opening the interface and adding the 
interface Car {
    doors :number
}

//SUV interface extending the CAR intface
interface SUV extends Car {
    off_roading :boolean

    // aFunction() :String;
}

// const car1 = new SUV()       Cannot be done

const Mahindra :SUV = {

    engine :"Diesel",
    fuelCapacity : 50,
    engineType : "M-Hawk",
    doors :5,
    efficiency : 12,
    off_roading :true,
    // aFunction(){
    //     return "S"
    // }
}


// console.log(Mahindra.aFunction())

//Another interface that extends Car interface
interface Sports extends Car{
    nitroSetUP : boolean
}

const Ferarri :Sports = {
    engine :"Diesel",
    fuelCapacity : 70,
    engineType : "V8",
    doors :2,
    efficiency : 6,
    nitroSetUP : false
}