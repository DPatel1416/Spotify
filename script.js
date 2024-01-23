console.log ("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay'); 
let myProgressBar = document.getElementById('myProgressBar'); 
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songItemPlay = Array.from(document.getElementsByClassName('songItemPlay'));

let songs = [
    { songName:"love me Like you",filePath:"songs/1.mp3",coverPath:"covers/1.jpg" },
    { songName:"Love Story",filePath:"songs/2.mp3",coverPath:"covers/2.jpg" },
    { songName:"Ignite",filePath:"songs/3.mp3",coverPath:"covers/3.jpg" },
    { songName:"Darkside",filePath:"songs/4.mp3",coverPath:"covers/4.jpg" },
    { songName:"Alone",filePath:"songs/5.mp3",coverPath:"covers/5.jpg" },
    { songName:"Faded",filePath:"songs/6.mp3",coverPath:"covers/6.jpg" },
    { songName:"Chip Thrills",filePath:"songs/7.mp3",coverPath:"covers/7.jpg" },
    { songName:"One Dance",filePath:"songs/8.mp3",coverPath:"covers/8.jpg" },
    { songName:"Dandellions",filePath:"songs/9.mp3",coverPath:"covers/9.jpg" },
    { songName:"New bee",filePath:"songs/10.mp3",coverPath:"covers/10.jpg" },
];

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;

 })


masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt ((audioElement.currentTime / audioElement.duration)*100);
    myProgressBar.value = progress ;
})

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () => {
    songItemPlay.forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    });
}

songItemPlay.forEach((element) => {
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
