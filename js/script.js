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

songList.forEach((item)=>{
    let li = document.createElement("li");
    li.innerHTML = `
    <img src="${item.src}"/>
    <h2>${item.title}</h2>
    <h3>${item.album} by ${item.artist}</h3>
    <p>${item.rating}`;
    //li.setAttribute(src, item.src);
    
    
    list.appendChild(li);
  })

// for(let i = 0; i < songList.length; i++){
//     console.log(songList[i].title);
//     document.getElementById("song").innerHTML = "TEST2";
// } 

});
