// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var person_name_q2 = "Bushra Attique";
console.log("\n \t\t\"Hello ".concat(person_name_q2, ", would you like to learn some Python today?\""));
function analyzeScores(scores) {
    if (scores.length === 0) {
        console.log("No scores provided");
        return;
    }
    var minScore = Math.min.apply(Math, scores);
    var maxScore = Math.max.apply(Math, scores);
    var exceededMax = 0;
    var fellBelowMin = 0;
    for (var _i = 0, scores_1 = scores; _i < scores_1.length; _i++) {
        var score = scores_1[_i];
        if (score > maxScore) {
            exceededMax++;
        }
        else if (score < minScore) {
            fellBelowMin++;
        }
    }
    console.log("Number of scores exceeded max: ".concat(exceededMax));
    console.log("Number of scores fell below min: ".concat(fellBelowMin));
}
// Example usage:
var scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
analyzeScores(scores);
