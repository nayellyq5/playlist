/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Where Are You Now","Wheel in the Sky","Is This Love","Carrie"];
// BELOW Add 4 More arrays to store images_links, atists, song lengths, and links for each song
// Make sure they match the same order as your array above

var images_links = ["https://img.discogs.com/s2EaJaX8ldKLeA6wM1gGAtVeM7E=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-596909-1381386419-1961.jpeg.jpg",
"http://farm6.static.flickr.com/5183/5596508464_0a98f511a9.jpg",
"https://images-na.ssl-images-amazon.com/images/I/61VQ92of-mL._SS500.jpg",
"https://lastfm-img2.akamaized.net/i/u/ar0/1ca5823bd7d8498d8799e92fb9dc6a5e.jpg"];

var artists = ["Nazareth","Journey","Whitesnake","Europe"];

var song_length = ["439","413","443","432"];

var links = ["https://www.youtube.com/watch?v=zY6gpQRxc2g",
"https://www.youtube.com/watch?v=uJo7OA9zKBg",
"https://www.youtube.com/watch?v=KZwzmhewOhU",
"https://www.youtube.com/watch?v=upH1x4TsGNQ"];
    // BELOW Use forEach Loop to display the data from each of your array's in the correct div
function displaySongInfo () {
songs.forEach(function(title) {
    $('#songs').append("<p>" + title + "</p>");
});

links.forEach(function(link) {
    $('#links').append("<a href ='" + link + "'> Listen </a>");
});
song_length.forEach(function(time){
   $('#lengths').append("<p>" + time + "</p>"); 
});
artists.forEach(function(name){
   $('#artists').append("<p>"+ name + "</p>"); 
});
images_links.forEach(function(image){
    $('#images').append("<img src ='" + image +"'>");
});    
    
var whereAreYouNow = {
        songName: "Where are you now",
        artistName: "Nazareth",
        songLength: "439",
        imageURL: "https://img.discogs.com/s2EaJaX8ldKLeA6wM1gGAtVeM7E=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/R-596909-1381386419-1961.jpeg.jpg",
        songLink: "https://www.youtube.com/watch?v=zY6gpQRxc2g",
        
    };
var wheelInTheSky = {
        songName: "Wheel In The Sky",
        artistName: "Journey",
        songLength: "413",
        imageURL: "http://farm6.static.flickr.com/5183/5596508464_0a98f511a9.jpg",
        songLink: "https://www.youtube.com/watch?v=uJo7OA9zKBg",
        
    };
var isThisLove = {
        songName: "Is This Love",
        artistName: "Whitesnake",
        songLength: "443",
        imageURL: "https://images-na.ssl-images-amazon.com/images/I/61VQ92of-mL._SS500.jpg",
        songLink: "https://www.youtube.com/watch?v=KZwzmhewOhU",
        
    };
var carrie = {
        songName: "Carrie",
        artistName: "Europe",
        songLength: "432",
        imageURL: "https://lastfm-img2.akamaized.net/i/u/ar0/1ca5823bd7d8498d8799e92fb9dc6a5e.jpg",
        songLink: "https://www.youtube.com/watch?v=upH1x4TsGNQ",

    };
    
var playlist = {
    whereAreYouKnow,
    wheelInTheSky,
    isThisLove,
    carrie
}

playlist.forEach(function(music) {
    $('#songs').append("<p>" + music.songName + "</p>");
    $('#artists').append("<p>" + music.artistName + "</p>");
    $('#length').append("<p>" + music.songLength + "</p>");
    $('#images').append("<p>" + music.imageURL + "</p>");
    $('#links').append("<img src='" + music.songLink + "'>");
});
function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
var songTitle = $('#song').val();
    songs.push(songTitle)
    
var songLink = $('#link').val();
    links.push(songLink)
    
var songArtist = $('#artist').val();
    artists.push(songArtist)
    
var songImage = $('#image').val();
    images_links.push(songLink)
    
var songLength = $('#length').val();
    song_length.push(songLength)

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});



displaySongInfo();
