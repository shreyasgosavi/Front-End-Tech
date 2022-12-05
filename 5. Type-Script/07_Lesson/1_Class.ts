//How a class is defined in typescript

class Sport{

    totalPlayers :number
    totalTime :number
    rules :string

    constructor(totalPlayers :number, time :number, rules :string){
        this.totalPlayers = totalPlayers
        this.totalTime = time
        this.rules = rules
    }
}

const cricket = new Sport(11, 5, "Be respectful")

