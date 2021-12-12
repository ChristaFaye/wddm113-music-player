const songList = [
        {  //song1
            title: "Love Myself", 
            artist: "artist1",
            album: "album1",
            src: "../songs/BTS_Answer_Love_Myself.mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song2
            title: "Best of Me", 
            artist: "artist2",
            album: "album2",
            src: "../songs/BTS_Best_Of_Me.mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song3
            title: "Butter", 
            artist: "artist1",
            album: "album1",
            src: "../songs/BTS_Butter.mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song4
            title: "Young Forever", 
            artist: "artist1",
            album: "album1",
            src: "../songs/BTS_Epilogue_Young_Forever.mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song5
            title: "I'm Fine", 
            artist: "artist1",
            album: "album1",
            src: "../songs/BTS_I_m_Fine.mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song6
            title: "Magic Shop", 
            artist: "artist1",
            album: "album1",
            src: "../songs/BTS_Magic_Shop.mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song7
            title: "MIC Drop", 
            artist: "artist1",
            album: "album1",
            src: "../songs/BTS_MIC_Drop.mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song8
            title: "Permission to Dance", 
            artist: "artist1",
            album: "album1",
            src: "../songs/BTS_Permission_to_Dance.mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song9
            title: "Ugh", 
            artist: "artist1",
            album: "album1",
            src: "../songs/BTS_UGH.mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song10
            title: "Dionysus", 
            artist: "artist1",
            album: "album1",
            src: "../songs/BTS_Dionysus.mp3", 
            songCover: "img1",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        }    
];

window.addEventListener('DOMContentLoaded', function() {
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
        
    `;
    list.appendChild(li);
  })

  });


function clicked(clicked_id) { 

    var num = clicked_id.charAt(4) + clicked_id.charAt(5);
    var x = num - 1;
    var song = songList[x];
    var playSrc = `../img/playBtn.png`;
    document.getElementById("songTitle").innerHTML = song.title;
    document.getElementById("imgPlaying").src = song.songCover;
    document.getElementById("artistPlaying").innerHTML = song.artist;
    document.getElementById("albumPlaying").innerHTML = song.album;
    document.getElementById("audio").src = song.src;
    document.getElementById("playBtn").setAttribute(`onclick`, `play()`);
    document.getElementById("playBtn").setAttribute(`src`, playSrc);
}


function play() {
    var audio = document.getElementById("audio");
    var btn = document.getElementById("playBtn");
    var pause =  document.getElementById("playBtn");
    btn.src = `../img/pauseBtn.png`;
    pause.setAttribute(`onclick`, `pause()`);
    audio.play();

}

function pause() {
    var audio = document.getElementById("audio");
    var btn = document.getElementById("playBtn");
    var play = document.getElementById("playBtn");
    btn.src = `../img/playBtn.png`;
    play.setAttribute(`onclick`, `play()`);
    audio.pause();

}





















