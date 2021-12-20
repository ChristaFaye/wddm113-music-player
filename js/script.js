const songList = [
        {  //song1
            title: "Love Is My Road", 
            artist: "Siobhan Dakay",
            album: "album1",
            src: "../songs/love-is-my-road.mp3", 
            songCover: "../img/love-is-my-road.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song2
            title: "Closed on Sundays", 
            artist: "Mana Junkie",
            album: "album2",
            src: "../songs/closed-on-sundays.mp3", 
            songCover: "../img/closed-on-sundays.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song3
            title: "En Shenandoah", 
            artist: "Down with Ben",
            album: "album1",
            src: "../songs/en-shenandoah.mp3", 
            songCover: "../img/en-shenandoah.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song4
            title: "Focus on Love", 
            artist: "Jeris",
            album: "album1",
            src: "../songs/focus-on-love.mp3", 
            songCover: "../img/focus-on-love.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song5
            title: "Snowflake", 
            artist: "Snowflake",
            album: "album1",
            src: "../songs/snowflake.mp3", 
            songCover: "../img/Snowflake.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song6
            title: "Travelling Lights", 
            artist: "Zep Hurme",
            album: "album1",
            src: "../songs/travelling-lights.mp3", 
            songCover: "../img/travelling-lights.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song7
            title: "Wanderer", 
            artist: "Admiral Bob",
            album: "album1",
            src: "../songs/wanderer.mp3", 
            songCover: "../img/wanderer.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song8
            title: "We, the People", 
            artist: "Mr. Yesterday",
            album: "album1",
            src: "../songs/we-the-people.mp3", 
            songCover: "../img/we-the-people.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song9
            title: "Bluemillenium", 
            artist: "Bluemillenium",
            album: "album1",
            src: "../songs/bluemillenium.mp3", 
            songCover: "../img/bluemillenium.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        },
        { //song10
            title: "Blue Sky Blues", 
            artist: "Kara Square",
            album: "album1",
            src: "../songs/blue-sky-blues.mp3", 
            songCover: "../img/blue-sky-blues.jpg",
            desc: "lorem ipsum",
            rating: "5.0",
            duration: "3:00"
        }    
];


let firstSong = songList[0];
let plyBtn = document.getElementById(`playBtn`);
let index = 0;
var playSrc = `../img/playBtn.png`;


document.getElementById("songTitle").innerHTML = firstSong.title;
document.getElementById("artistPlaying").innerHTML = firstSong.artist;
document.getElementById("audio").src = firstSong.src;
document.getElementById("imgPlaying").setAttribute(`src`, firstSong.songCover);;
plyBtn.addEventListener("click", play);
plyBtn.setAttribute("src", playSrc);
var audio = document.getElementById("audio");
audio.setAttribute(`value`, `${index}`);

let list = document.getElementById("list");
var i = 0;
        
songList.forEach((item)=>{
    i++;
    let li = document.createElement("li");
    li.setAttribute(`id`, `${i}`);
    li.setAttribute(`class`, `song`);
    li.setAttribute(`value`, `${i}`);
    li.addEventListener("click", function() {clicked(this.id)});
    li.innerHTML = `
        <img src=${item.songCover} id="imglist" "/>
        <span>
            <h2>${item.title}</h2>
            <h3>${item.artist}</h3>
        </span>
        `;
    list.appendChild(li);     
})






function clicked(clicked_id) { 
    var index = clicked_id - 1;
    var song = songList[index];
    var pauseSrc = `../img/pauseBtn.png`;
    var audio = document.getElementById("audio");
    var duration = audio.duration;
    var btn = document.getElementById("playBtn");
    var imgPlaying = document.getElementById("imgPlaying");

    audio.setAttribute(`value`, `${index}`);

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

    
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration - (minutes * 60));
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
   
    var songDuration = minutes + ':' + seconds;
    document.getElementById("durationTime").innerHTML = songDuration;

    audio.ontimeupdate = function() {
        var currentTime = audio.currentTime;
        var elem = document.getElementById("myBar");
        
        var elapsed =  document.getElementById("elapsedTime");

        var minutes = Math.floor(currentTime / 60);
        var seconds = Math.floor(currentTime - (minutes * 60));
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var songCurrentTime = minutes + ':' + seconds;
        elapsed.innerHTML = songCurrentTime;
        elem.style.width = currentTime + "px";

        move(duration, currentTime);
        
    };
}


function play() {
    var audio = document.getElementById("audio");
    var btn = document.getElementById("playBtn");
    var imgPlaying = document.getElementById("imgPlaying");
    // audio.setAttribute(`value`, ``)
  
    
    
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
    var minutes = Math.floor(duration / 60);
    var seconds = Math.floor(duration - (minutes * 60));
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
   
    var songDuration = minutes + ':' + seconds;
    document.getElementById("durationTime").innerHTML = songDuration;

    audio.ontimeupdate = function() {
        var currentTime = audio.currentTime;
        var elem = document.getElementById("myBar");
        
        var elapsed =  document.getElementById("elapsedTime");

        var minutes = Math.floor(currentTime / 60);
        var seconds = Math.floor(currentTime - (minutes * 60));
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var songCurrentTime = minutes + ':' + seconds;
        elapsed.innerHTML = songCurrentTime;
        elem.style.width = currentTime + "px";

        move(duration, currentTime);
        
    };
};

    
var forwardBtn = document.getElementById(`forwardBtn`);
forwardBtn.addEventListener("click", forward);
    
function forward() {
    var audio = document.getElementById("audio");
    var playingIndex = parseInt(audio.getAttribute(`value`));
    //let nextIndex;
    if (playingIndex == songList.length - 1) {
        var nextIndex = 0;
    } else {
        var nextIndex = playingIndex + 1;
    }

    var songIndex = songList[nextIndex];
    var pauseSrc = `../img/pauseBtn.png`;

    console.log(nextIndex);
    audio.setAttribute(`value`, `${nextIndex}`);

    document.getElementById("songTitle").innerHTML = songIndex.title;
    document.getElementById("imgPlaying").src = songIndex.songCover;
    document.getElementById("artistPlaying").innerHTML = songIndex.artist;
    document.getElementById("audio").src = songIndex.src;
    document.getElementById("playBtn").src = pauseSrc;

    audio.play();
 
}

var backBtn = document.getElementById(`backBtn`);
backBtn.addEventListener("click", prev);

function prev() {
    var audio = document.getElementById("audio");
    var playingIndex = parseInt(audio.getAttribute(`value`));
    //let nextIndex;
    if (playingIndex !== 0) {
        var nextIndex = playingIndex - 1;
    } else {
        var nextIndex = 9;
    }

    var songIndex = songList[nextIndex];
    var pauseSrc = `../img/pauseBtn.png`;

    console.log(nextIndex);
    audio.setAttribute(`value`, `${nextIndex}`);

    document.getElementById("songTitle").innerHTML = songIndex.title;
    document.getElementById("imgPlaying").src = songIndex.songCover;
    document.getElementById("artistPlaying").innerHTML = songIndex.artist;
    document.getElementById("audio").src = songIndex.src;
    document.getElementById("playBtn").src = pauseSrc;

    audio.play();
 
}

const element = document.getElementById("filter");
element.addEventListener("change", (e) => {
  const value = e.target.value;

  if (value === `alphabetical`) {
    sortAlphabetical();
    formStyle.style.display = "none";
    location.reload();
  } else if (value === `title`) {
    sortTitle();
  } else {
    console.log(`Passed`);
    formStyle.style.display = "none";
  }
});



function sortTitle() {
    var formStyle = document.getElementById("formField");
    formStyle.style.display = "inline-block";
}

function sortAlphabetical() {
    var ul = document.getElementById("list");
    var formStyle = document.getElementById("formField");
    formStyle.style.display = "none";

    var lis = document.getElementsByTagName('li');
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.display = 'list-item';
            lis[i].setAttribute(`id`, i);
        }

    var alphabeticalArray = Array.from(ul.getElementsByTagName("li"))
    alphabeticalArray.sort((a, b) => a.textContent.localeCompare(b.textContent))
    alphabeticalArray.forEach(li => ul.appendChild(li));

    alphabeticalArray.forEach(()=>{
        i++;
        var li = document.getElementsByClassName("song");
        li.setAttribute("id", `${i}`);
         
        
    })

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

var submit = document.getElementById(`submit`);
submit.addEventListener(`click`, searchSong);
function searchSong() {
    var filterText = document.getElementById(`filterText`);
    //filterText.onkeyup = function () {
        var searchfilter = filterText.value.toUpperCase();
        var lis = document.getElementsByTagName('li');
        for (var i = 0; i < lis.length; i++) {
            var name = lis[i].getElementsByTagName('h2')[0].innerHTML;
            if (name.toUpperCase().indexOf(searchfilter) == 0) {
                lis[i].style.display = 'list-item'; 
                lis[i].setAttribute(`id`, `${i}`);
                lis[i].setAttribute(`class`, `song`);
                lis[i].setAttribute(`value`, `${i}`);
                lis[i].addEventListener("click", function() {clicked(this.id)});
                lis[i].innerHTML = `
                    <img src=${item.songCover} id="imglist" "/>
                    <span>
                        <h2>${item.title}</h2>
                        <h3>${item.artist}</h3>
                    </span>
                    `;
                }
            else {
                lis[i].style.display = 'none';
            }
        }
    //}
}























