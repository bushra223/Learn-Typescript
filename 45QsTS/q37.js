console.log("Exercise # 37");
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt3(size, msg) {
    if (msg === void 0) { msg = "I love TypeScript."; }
    console.log("Size of shirt is ".concat(size, " and the text to be printed on shirt is \"").concat(msg, "!\""));
}
make_shirt3("Large");
make_shirt3("Medium");
make_shirt3("Small", "Polo");
