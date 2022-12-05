"use strict";
//AcessModifiers
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Sport2_sportId;
exports.__esModule = true;
var Sport2 = /** @class */ (function () {
    function Sport2(totalPlayers, time, rules, id) {
        _Sport2_sportId.set(this, void 0);
        this.totalPlayers = totalPlayers;
        this.totalTime = time;
        this.rules = rules;
        __classPrivateFieldSet(this, _Sport2_sportId, id, "f");
    }
    return Sport2;
}());
_Sport2_sportId = new WeakMap();
var cricket2 = new Sport2(11, 5, "Discipline", 1);
console.log(cricket2.totalPlayers);
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
