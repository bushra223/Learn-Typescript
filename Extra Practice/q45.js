console.log("Exercise 45");
//differece between rest parameter and spread operator
// When ... is at the end of function parameters, it’s “rest parameters” and gathers the rest of the list of arguments into an array.
// When ... occurs in a function call or alike, it’s called a “spread syntax” and expands an array into a list.
function car_info(manufacturer, model) {
    //rest parameter ,will gather the rest of list of args into an array
    //here { key: string; value: any }[] is array of key value pair objects,just pass as many objects and the func will convert it into array or args
    var args = [];
    for (
    //rest parameter ,will gather the rest of list of args into an array
    //here { key: string; value: any }[] is array of key value pair objects,just pass as many objects and the func will convert it into array or args
    var _i = 2; 
    //rest parameter ,will gather the rest of list of args into an array
    //here { key: string; value: any }[] is array of key value pair objects,just pass as many objects and the func will convert it into array or args
    _i < arguments.length; 
    //rest parameter ,will gather the rest of list of args into an array
    //here { key: string; value: any }[] is array of key value pair objects,just pass as many objects and the func will convert it into array or args
    _i++) {
        //rest parameter ,will gather the rest of list of args into an array
        //here { key: string; value: any }[] is array of key value pair objects,just pass as many objects and the func will convert it into array or args
        args[_i - 2] = arguments[_i];
    }
    var car = { Manufacturer: manufacturer, Model: model, options: [] };
    for (var i = 0; i < args.length; ++i)
        car.options[i] = args[i];
    return car;
}
var myCar = car_info("Honda", "Civic 2022", {
    key: "colour",
    value: "blue",
}, {
    key: "availability",
    value: true,
}, { key: "mileage", value: 3245 });
console.log(myCar);
