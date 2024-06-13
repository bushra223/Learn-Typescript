//21
// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
type Rivers = {
	city: string;
	river: string;
};
function createObject(city: string, river: string): Rivers {
	return {
        city: city,
        river: river,
    };
    // return { city: city, river: river };
    // return { city, river };
    // return { city: city, river: river };
}
const obj1=createObject("Lahore","Ravi");
const obj2=createObject("Jalandhar","Beas");
const obj3=createObject("Bahawalpur","Chenab");


console.log(obj1,obj2,obj3);
