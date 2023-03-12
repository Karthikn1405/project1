let previousSong = document.querySelector("#pre");
let play = document.querySelector("#play");
let nextSong = document.querySelector("#next");


let title = document.querySelector("#title");
let artist = document.querySelector("#artist");
let slider = document.querySelector("#duration_slider");
let track_image = document.querySelector("#track_image");


let timer;
let autoplay = 1;

let index_no = 0;
let playing_song = false;

let track = document.createElement('audio');

let all_songs = [{
      name : "Mazhai Kuruvi",
      path: "music/song1.mp3",
      img: "image/img1.jpg",
      artist: "Singer -  A.R. Rahman | Music - A.R. Rahman | Lyrics - Vairamuthu",
    
},
{
    name : "Maya Nadhi",
    path: "music/song2.mp3" ,
    img: "image/img2.jpg" ,
    artist: "Singers: Pradeep Kumar | Music: Santhosh Narayanan | Lyrics: Uma Devi",
  
},
{
    name : "Aanandha Yaazhai",
    path: "music/song3.mp3" ,
    img: "image/img3.jpg",
    artist: "Singer - Sriram Parthasarathy | Music - Yuvanshankar Raja | Lyrics - Na. Muthukumar",
  
}
];

function load_track(index_no){
    clearInterval(timer);
    reset_slider() ;
   
 track.src = all_songs[index_no].path; 
 title.innerHTML = all_songs[index_no].name; 
 track_image.src  =all_songs[index_no].img;
 artist.innerHTML = all_songs[index_no].artist;

  /*timer = setInterval(range_slider ,10000);
total.innerHTML = all_songs.length;
 present.innerHTML = index_no + 1;*/

}
load_track(index_no);


function justplay(){
    if(playing_song == false){
        playsong(); //default
    }
   else{
       pausesong(); //default
    }
   }


function  reset_slider(){
    slider.value = 0;
}


function playsong()//s must be sml in song{
    {
   track.play();
   playing_song = true;
   play.innerHTML =  '<i class="fa fa-pause"></i>'

}

function pausesong(){
    track.pause();
    playing_song = false;
    play.innerHTML = '<i class="fa fa-play"></i>'
}

function next_song(){
    if(index_no < all_songs.length -1) {
    index_no += 1;
    load_track(index_no);
    playsong();
    }
    else{
        index_no = 0;
        load_track(index_no);
        playsong();
    }
}


function previous_song(){
    if(index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
    }
    else{
        index_no = all_songs.length;
        load_track(index_no);
        playsong();
    }
}

function change_duration(){
    slider_position = track.duration * (slider.value / 100);
    track.currentTime = slider_position;
}




