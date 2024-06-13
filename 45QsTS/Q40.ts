console.log("Exercise # 40");

// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
interface Album {
	artist: string;
	title: string;
	tracks?: number;
}
function make_album(
	artistName: string,
	albumTitle: string,
	numOfTracks?: number
): Album {
	let a: Album = { artist: "", title: "" };
	if (!numOfTracks) {
		a.artist = artistName;
		a.title = albumTitle;
	} else {
		a.artist = artistName;
		a.title = albumTitle;
		a.tracks = numOfTracks;
	}

	return a;
}

let dictionary1: Album, dictionary2: Album, dictionary3: Album, dictionary4: Album;

dictionary1 = make_album("Atif Aslam", "Naat");
console.log(dictionary1);
dictionary2 = make_album("Ali Zafar", "Channo");
console.log(dictionary2);
dictionary3 = make_album("Sajjad Ali", "Any");
console.log(dictionary3);

dictionary4 = make_album("Sajajd Ali", "Banno", 7);
console.log(dictionary4);
