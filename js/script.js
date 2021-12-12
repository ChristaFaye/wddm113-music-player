window.addEventListener('DOMContentLoaded', function() {

let songList = [
        {  //song1
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        },
        { //song2
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        },
        { //song3
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        },
        { //song4
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        },
        { //song5
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        },
        { //song6
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        },
        { //song7
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        },
        { //song8
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        },
        { //song9
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        },
        { //song10
            title: "title1", 
            artist: "artist1",
            album: "album1",
            src: "mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
        }    
    ];

    
let list = document.getElementById("list");
var i =0;
songList.forEach((item)=>{
    i++;
    let li = document.createElement("li");
    li.id = `song${i}`;
    li.innerHTML = `
        <img src="${item.src} id="imgList"/>
        <span>
            <h2>${item.title}</h2>
            <h3>${item.album} by ${item.artist}</h3>
        </span>
    `;
    list.appendChild(li);
  })
});

let play = document.getElementBy


