console.log("Welcome to spotify");
//initialize the variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let myProgressbar = document.getElementById("myProgressBar");

let songs = [
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/1.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/2.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/3.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/4.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/5.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/6.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/7.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/8.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/9.jpg"},
    {songName: "Salam-e-Ishq", filePath: "songs/1.mp3", coverPath: "images/covers/10.jpg"},
]
//audioelement.play();

// Handle play/pause click
// masterPlay.addEventListener('click', ()=>{
//     console.log(working);
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         gif.style.opacity = 1;
//     } else{
//         audioElement.pause();
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//     }
// });
masterPlay.addEventListener('click', ()=>{
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
//Listentoevents
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myProgressBar.value = progress;
});
