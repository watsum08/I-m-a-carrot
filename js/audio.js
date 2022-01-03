const AUDIO_BG = new Audio("audio/KevinMacLeod_Pixelland.mp3");
AUDIO_BG.loop = true;
AUDIO_BG.volume = 0.3;

const AUDIO_WATERDROP = new Audio("audio/waterdrop.mp3");

const AUDIO_GLASSBREAK1 = new Audio("audio/glassbreak1.mp3");
const AUDIO_GLASSBREAK2 = new Audio("audio/glassbreak2.mp3");
const AUDIO_GLASSBREAK3 = new Audio("audio/glassbreak3.mp3");

let VIDEO_PLAYER = document.getElementById("videoPlayer");
let VIDEO_OUTRO_MP4 = document.getElementById("mp4Source");
VIDEO_OUTRO_MP4.src = "img/EndAnimation/TheOutro.mp4";