console.log("Exercise # 36");
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
function make_shirt(size, msg) {
    console.log("Shirt size is ".concat(size, " and the text to be printed on shirt is \"").concat(msg, "\"."));
}
make_shirt("Medium", "Tommy");
