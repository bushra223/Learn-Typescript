console.log("Exercise # 40");
function make_album(artistName, albumTitle, numOfTracks) {
    var a = { artist: "", title: "" };
    if (!numOfTracks) {
        a.artist = artistName;
        a.title = albumTitle;
    }
    else {
        a.artist = artistName;
        a.title = albumTitle;
        a.tracks = numOfTracks;
    }
    return a;
}
var dictionary1, dictionary2, dictionary3, dictionary4;
dictionary1 = make_album("Atif Aslam", "Naat");
console.log(dictionary1);
dictionary2 = make_album("Ali Zafar", "Channo");
console.log(dictionary2);
dictionary3 = make_album("Sajjad Ali", "Any");
console.log(dictionary3);
dictionary4 = make_album("Sajajd Ali", "Banno", 7);
console.log(dictionary4);
