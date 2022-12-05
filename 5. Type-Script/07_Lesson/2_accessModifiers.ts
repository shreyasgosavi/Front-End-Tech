//AcessModifiers

class Sport2{
    
    public totalPlayers :number
    totalTime :number
    rules :string 
    #sportId :number;

    constructor(totalPlayers :number, time :number, rules :string, id: number){
        this.totalPlayers = totalPlayers
        this.totalTime = time
        this.rules = rules
        this.#sportId = id
    }

    secretMethod(name :string){
        console.log(`This is the secret method ${name}`)
    }
}

const cricket2 = new Sport2(11, 5, "Discipline",1)
console.log(cricket2.totalPlayers)
cricket2.secretMethod("argument")

export{}
// cricket2.sportId = 2        // <-- Generates an error

//Another way to write a class (Preffered)

/* 

    class Sport2{

    constructor(public totalPlayers :number,public time :number,public rules :string, public id: number){
        this.totalPlayers = totalPlayers
        this.totalTime = time
        this.rules = rules
        this.sportId = id
    }
}
 */