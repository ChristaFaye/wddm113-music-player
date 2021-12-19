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

let playingIndex = 0;

window.addEventListener(`load`, function() {

    let firstSong = songList[playingIndex];
    let plyBtn = document.getElementById(`playBtn`);
    var playSrc = `../img/playBtn.png`;
    document.getElementById("songTitle").innerHTML = firstSong.title;
    document.getElementById("artistPlaying").innerHTML = firstSong.artist;
    document.getElementById("audio").src = firstSong.src;
    document.getElementById("imgPlaying").setAttribute(`src`, firstSong.songCover);;
    plyBtn.addEventListener(`click`, play);
    plyBtn.setAttribute(`src`, playSrc);

    let list = document.getElementById("list");
    var i = 0;
        
    songList.forEach((item)=>{
        i++;
        let li = document.createElement("li");
        li.setAttribute(`id`, `${i}`);
        li.addEventListener("click", function() {clicked(this.id)});
        li.innerHTML = `
            <img src=${item.songCover} id="imglist" "/>
            <span>
                <h2>${item.title}</h2>
                <h3>${item.album} by ${item.artist}</h3>
            </span>
            `;
        list.appendChild(li);     
        
    })

})





function clicked(clicked_id) { 
    var index = clicked_id - 1;
    var song = songList[index];
    var pauseSrc = `../img/pauseBtn.png`;
    var audio = document.getElementById("audio");
    var btn = document.getElementById("playBtn");
    //var pause =  document.getElementById("playBtn");
    var imgPlaying = document.getElementById("imgPlaying");

    document.getElementById("songTitle").innerHTML = song.title;
    document.getElementById("imgPlaying").src = song.songCover;
    document.getElementById("artistPlaying").innerHTML = song.artist;
    document.getElementById("audio").src = song.src;
    document.getElementById("playBtn").src = pauseSrc;

    if (audio.paused) {
        audio.play();
        btn.src = `../img/pauseBtn.png`;
        imgPlaying.classList.add("imgPlayingAnimate");
    } else {
        audio.pause();
        btn.src = `../img/playBtn.png`;
        var audio = document.getElementById("audio");
        imgPlaying.classList.remove("imgPlayingAnimate");
    }

    var duration = audio.duration;
    durationTime(duration);
   
    var songDuration = minutes + ':' + seconds;
    document.getElementById("durationTime").innerHTML = songDuration;

    audio.ontimeupdate = function() {
        var currentTime = audio.currentTime;
        var elem = document.getElementById("myBar");
        var songCurrentTime = minutes + ':' + seconds;
        var elapsed =  document.getElementById("elapsedTime");
    
        durationTime(currentTime);
        elapsed.innerHTML = songCurrentTime;
        elem.style.width = currentTime + "px";
    
        move(duration, currentTime);
    }
}


function play() {
    var audio = document.getElementById("audio");
    var btn = document.getElementById("playBtn");
    //var pause =  document.getElementById("playBtn");
    var imgPlaying = document.getElementById("imgPlaying");
    
    
    if (audio.paused) {
        audio.play();
        btn.src = `../img/pauseBtn.png`;
        imgPlaying.classList.add("imgPlayingAnimate");
    } else {
        audio.pause();
        btn.src = `../img/playBtn.png`;
        var audio = document.getElementById("audio");
        imgPlaying.classList.remove("imgPlayingAnimate");
    }
    

    var duration = audio.duration;
    durationTime(duration);
   
    var songDuration = minutes + ':' + seconds;
    document.getElementById("durationTime").innerHTML = songDuration;

    audio.ontimeupdate = function() {
        var currentTime = audio.currentTime;
        var elem = document.getElementById("myBar");
        
        var elapsed =  document.getElementById("elapsedTime");

        durationTime(currentTime);
        var songCurrentTime = minutes + ':' + seconds;
        elapsed.innerHTML = songCurrentTime;
        elem.style.width = currentTime + "px";

        move(duration, currentTime);
        
    };
};
    


function durationTime(duration) {
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration - (minutes * 60));
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
}



function filter() {

const element = document.getElementById("filter");
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
  
    Array.from(ul.getElementsByTagName("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ul.appendChild(li));
}

var p = 0;
function move(duration, currentTime) {
  if (p == 0) {
    p = 1;
    
    var elem2 = document.getElementById("myProgress");
    var id = setInterval(frame, 1000);
    elem2.style.width = duration + "px";
    elem2.style.display = "flex";
    function frame() {
      if (currentTime >= duration) {
        clearInterval(id);
        p = 0;
      }
    }
  }
}





















