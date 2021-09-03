let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');



let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song = [
   {
     name: "TU THODI DER AUR THER JA",
     path: "music/song1.mp3",
     img: "img/img1.jpg",
     singer: "SHREYA GHOSHAL FT FARHAN SAEED"
   },
   {
     name: "FADED",
     path: "music/song2.mp3",
     img: "img/img2.jpg",
     singer: "ALAN WALKER FT ISELIN LØKEN SOLHEIM"
   },
   {
     name: "CHHOD DENGE",
     path: "music/song3.mp3",
     img: "img/img3.jpg",
     singer: "PARAMPARA TANDON "
   },
   {
     name: "SWEET DREAMS-ARE MADE OF THIS",
     path: "music/song4.mp3",
     img: "img/img4.jpg",
     singer: "EURYTHMICS, ANNIE LENNOX, DAVE STEWART AND THE SPIRITUAlL COWBOYS"
   },
   {
     name: "WAARYA-DUET",
     path: "music/song5.mp3",
     img: "img/img5.jpg",
     singer: "JAVED - MOHSIN, VIBHOR PARASHAR,PALAK MUCHHAL"
   },
   {
    name: "CLOSER",
    path: "music/song6.mp3",
    img: "img/img6.jpg",
    singer: "THE CHAINSMOKERS FT HALSEY"
  },
  {
    name: "TIME IN A BOTTLE",
    path: "music/song7.mp3",
    img: "img/img7.jpg",
    singer: "JIM CROCE"
  },
  {
    name: "SPEECHLESS",
    path: "music/song8.mp3",
    img: "img/img8.jpg",
    singer: "NAOMI SCOTT"
  },

  {
    name: "BELIEVER",
    path: "music/song11.mp3",
    img: "img/beliver.jpg",
    singer: "IMAGINE DRAGONS"
  },

  {
    name: "DESPACITO",
    path: "music/song14.mp3",
    img: "img/despacito.png",
    singer: "LUIS FONSI FT DADDY YANKEE"
  },

 {
    name: "DESPACITO REMIX",
    path: "music/song12.mp3",
    img: "img/despacito2.jpg",
    singer: "LUIS FONSI FT DADDY YANKEE FT JUSTIN BEIBER"
  },

  {
    name: "FILHALL 2 MOHABBAT",
    path: "music/song10.mp3",
    img: "img/filhall2.jpg",
    singer: "B PRAAK"
  },

  {
    name: "LOVELY ",
    path: "music/song9.mp3",
    img: "img/lovely.jpg",
    singer: "BILLIE EILISH FT KHALID"
  },

  {
    name: "SEÑORITA",
    path: "music/song15.mp3",
    img: "img/senorita.png",
    singer: "SHAWN MENDES FT CAMILA CABELLO"
  },

  {
    name: "SORRY",
    path: "music/song13.mp3",
    img: "img/sorry.jpg",
    singer: "JUSTIN BIEBER"
  },

   {
    name: "A THOUSAND YEARS",
    path: "music/song16.mp3",
    img: "img/yrs.jpg",
    singer: "CHRISTINA PERRI"
  },

  {
    name:"BUTTER",
    path:"music/butter.mp3",
    img:"img/butter.jpg",
    singer:"BTS"
  },
  {
    name:"DYNAMITE",
    path:"music/dynamite.mp3",
    img:"img/1.jpg",
    singer:"BTS"
  },
  {
    name:"DNA",
    path:"music/dna.mp3",
    img:"img/dna.png",
    singer:"BTS"
  },
  {
    name:"PERMISSION TO DANCE",
    path:"music/ptod.mp3",
    img:"img/ptod.jpg",
    singer:"BTS"
  },
  {
    name:"BOY WITH LUV",
    path:"music/boy.mp3",
    img:"img/boy.png",
    singer:"BTS"
  },
 {
    name:"BLOOD SWEAT AND TEARS",
    path:"music/blood.mp3",
    img:"img/blood.jpg",
    singer:"BTS"
  },
  {
    name:"LIFE GOES ON",
    path:"music/life.mp3",
    img:"img/a.jpg",
    singer:"BTS"
  },
  {
    name:"FAKE LOVE",
    path:"music/fake.mp3",
    img:"img/fake.jpg",
    singer:"BTS"
  },
  {
    name:"EUPHORIA",
    path:"music/eu.mp3",
    img:"img/eu.jpg",
    singer:"JEON JUNGKOOK(BTS)"
  }
];



// All functions


// function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();

	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;	
	track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();

	timer = setInterval(range_slider ,1000);
	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
}

load_track(index_no);


//mute sound function
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}


// checking.. the song is playing or not
 function justplay(){
 	if(Playing_song==false){
 		playsong();

 	}else{
 		pausesong();
 	}
 }


// reset song slider
 function reset_slider(){
 	slider.value = 0;
 }

// play song
function playsong(){
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong(){
	track.pause();
	Playing_song = false;
	play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}


// next song
function next_song(){
	if(index_no < All_song.length - 1){
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 0;
		load_track(index_no);
		playsong();

	}
}


// previous song
function previous_song(){
	if(index_no > 0){
		index_no -= 1;
		load_track(index_no);
		playsong();

	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}


// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch(){
	if (autoplay==1){
       autoplay = 0;
       auto_play.style.background = "rgba(255,255,255,0.2)";
	}else{
       autoplay = 1;
       auto_play.style.background = "#FF8A65";
	}
}


function range_slider(){
	let position = 0;
        
        // update slider position
		if(!isNaN(track.duration)){
		   position = track.currentTime * (100 / track.duration);
		   slider.value =  position;
	      }

       
       // function will run when the song is over
       if(track.ended){
       	 play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
           if(autoplay==1){
		       index_no += 1;
		       load_track(index_no);
		       playsong();
           }
	    }
     }