function limitedParameter(name, score) {
    if (name === void 0) { name = "ABC"; }
    if (score === void 0) { score = 0; }
    return "Name is " + name + " and the score is " + score;
}
console.log(limitedParameter());
