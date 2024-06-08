function createObject(city, river) {
    return {
        city: city,
        river: river,
    };
    // return { city: city, river: river };
    // return { city, river };
    // return { city: city, river: river };
}
var obj1 = createObject("Lahore", "Ravi");
var obj2 = createObject("Jalandhar", "Beas");
var obj3 = createObject("Bahawalpur", "Chenab");
console.log(obj1, obj2, obj3);
