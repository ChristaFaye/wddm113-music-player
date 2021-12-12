


window.addEventListener('DOMContentLoaded', function() {

const songList = [
        {  //song1
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song2
            title: "title2", 
            artist: "artist2",
            album: "album2",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song3
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song4
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song5
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song6
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song7
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song8
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song9
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song10
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        }    
];

let list = document.getElementById("list");
var i =0;
songList.forEach((item)=>{
    i++;
    let li = document.createElement("li");
    li.setAttribute(`id`, `song${i}`);
    li.setAttribute(`onclick`, `clicked(this.id)`);
    li.innerHTML = `
        <img src=${item.songCover} id="imglist" "/>
        <span>
            <h2>${item.title}</h2>
            <h3>${item.album} by ${item.artist}</h3>
        </span>
        <p>${item.duration}</p>
        
    `;
    list.appendChild(li);
  })


});

function clicked(clicked_id) { 
const songList = [
        {  //song1
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song2
            title: "title2", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song3
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song4
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song5
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song6
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song7
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song8
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song9
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song10
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        }    
];
    var num = clicked_id.charAt(4) + clicked_id.charAt(5);
    var x = num - 1;
    console.log(songList[x]);
    var song = songList[x];
    document.getElementById("songTitle").innerHTML = song.title;
    document.getElementById("imgPlaying").src = song.src;
    document.getElementById("artist").innerHTML = song.artist;
    document.getElementById("album").innerHTML = song.album;
    
}













