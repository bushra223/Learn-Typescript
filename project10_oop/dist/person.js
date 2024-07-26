export default class Person {
    personality;
    constructor() {
        this.personality = "Mysterious";
    }
    askQuestion(answer) {
        if (answer == 1)
            this.personality = "Extrovert";
        else if (answer == 2)
            this.personality = "Introvert";
        else {
            this.personality = "Mysterious";
            console.log("Invalid answer. Setting default personality.");
        }
    }
    getPersonality() {
        return this.personality;
    }
}
