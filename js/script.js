const songList = [
        {  //song1
            title: "Love Myself", 
            artist: "BTS",
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
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song3
            title: "Butter", 
            artist: "BTS",
            album: "album1",
            src: "../songs/BTS_Butter.mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song4
            title: "Young Forever", 
            artist: "BTS",
            album: "album1",
            src: "../songs/BTS_Epilogue_Young_Forever.mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song5
            title: "I'm Fine", 
            artist: "BTS",
            album: "album1",
            src: "../songs/BTS_I_m_Fine.mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song6
            title: "Magic Shop", 
            artist: "BTS",
            album: "album1",
            src: "../songs/BTS_Magic_Shop.mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song7
            title: "MIC Drop", 
            artist: "BTS",
            album: "album1",
            src: "../songs/BTS_MIC_Drop.mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song8
            title: "Permission to Dance", 
            artist: "BTS",
            album: "album1",
            src: "../songs/BTS_Permission_to_Dance.mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song9
            title: "UGH", 
            artist: "BTS",
            album: "album1",
            src: "../songs/BTS_UGH.mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song10
            title: "Dionysus", 
            artist: "BTS",
            album: "album1",
            src: "../songs/BTS_Dionysus.mp3", 
            songCover: "../img/song-cover.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        }    
];

window.addEventListener('DOMContentLoaded', function() {

    
    songList.forEach((item)=>{
        
    })

    let list = document.getElementById("list");
    var i = 0;
    
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
                <h4>${item.duration}</h4>
            </span>
            
        `;
        list.appendChild(li);  
        let hAudio = document.getElementById("hiddenAudio");
        var hDuration = hAudio.duration;
        console.log(hDuration); 
        var minutes = Math.floor(hDuration / 60);
        var seconds = Math.floor(hDuration - minutes * 60);
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var hiddenDuration = minutes + ':' + seconds;
        console.log(hiddenDuration);
    })
  
   // sortList("list");

    let firstSong = songList[0];
    var playSrc = `../img/playBtn.png`;
    document.getElementById("songTitle").innerHTML = firstSong.title;
    document.getElementById("artistPlaying").innerHTML = firstSong.artist;
    // document.getElementById("albumPlaying").innerHTML = firstSong.album;
    document.getElementById("audio").src = firstSong.src;
    document.getElementById("imgPlaying").setAttribute(`src`, firstSong.songCover);;
    document.getElementById("playBtn").setAttribute(`onclick`, `play()`);
    document.getElementById("playBtn").setAttribute(`src`, playSrc);
    
  });

  
function clicked(clicked_id) { 

    var num = clicked_id.charAt(4) + clicked_id.charAt(5);
    var x = num - 1;
    var song = songList[x];
    var playSrc = `../img/playBtn.png`;
    document.getElementById("songTitle").innerHTML = song.title;
    document.getElementById("imgPlaying").src = song.songCover;
    document.getElementById("artistPlaying").innerHTML = song.artist;
    // document.getElementById("albumPlaying").innerHTML = song.album;
    document.getElementById("audio").src = song.src;
    document.getElementById("playBtn").setAttribute(`onclick`, `play()`);
    document.getElementById("playBtn").setAttribute(`src`, playSrc);
  
}


function play() {
    var audio = document.getElementById("audio");
    var btn = document.getElementById("playBtn");
    var pause =  document.getElementById("playBtn");
    var imgPlaying = document.getElementById("imgPlaying");
    
   
    btn.src = `../img/pauseBtn.png`;
    pause.setAttribute(`onclick`, `pause()`);
    imgPlaying.classList.add("imgPlayingAnimate");

    audio.play();

    var duration = audio.duration;
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration - (minutes * 60));
    var currentTime = 0;
    
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    var songDuration = minutes + ':' + seconds;
    document.getElementById("durationTime").innerHTML = songDuration;

    audio.ontimeupdate = function() {
        var currentTime = audio.currentTime;
        var minutes = Math.floor(currentTime / 60);
        var seconds = Math.floor(currentTime - minutes * 60);
        var elem = document.getElementById("myBar");
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var songCurrentTime = minutes + ':' + seconds;
        
        document.getElementById("elapsedTime").innerHTML = songCurrentTime;
        elem.style.width = currentTime + "px";
        move(duration, currentTime);
        
    };
    
    audio.onended = function() {
        alert("The audio has ended");
    };
    
}

function pause() {
    var audio = document.getElementById("audio");
    var btn = document.getElementById("playBtn");
    var play = document.getElementById("playBtn");
    btn.src = `../img/playBtn.png`;
    play.setAttribute(`onclick`, `play()`);
    audio.pause();

    imgPlaying.classList.remove("imgPlayingAnimate");

}

function filter() {

const element = document.getElementById("filter");

//const checkValue = element.options[element.selectedIndex].value;
//const checkText = element.options[element.selectedIndex].text;

element.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === `alphabetical`) {
    sortAlphabetical();
  } else {
    console.log(`Passed`);
  }
});

}


function sortAlphabetical() {
    var ul = document.getElementById("list");
  
    Array.from(ul.getElementsByTagName("LI"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
}

var p = 0;
function move(duration, currentTime) {
  if (p == 0) {
    p = 1;
    
    var elem2 = document.getElementById("myProgress");
    //var width = currentTime;
    var id = setInterval(frame, 1000);
    elem2.style.width = duration + "px";
    elem2.style.display = "block";
    function frame() {
      if (currentTime >= duration) {
        clearInterval(id);
        p = 0;
      }
    }
  }
}























