// popup invitation
document.getElementById("navbar").style.display='none';
document.getElementById("main").style.display='none';
document.getElementById("footer").style.display='none';
document.getElementById("scrollup").style.display='none';

const openInvitation = document.getElementById("inv-btn");
const invited = document.getElementById("popup-invitation");
const navBottom = document.getElementById("navbar");
const main = document.getElementById("main");
const footer = document.getElementById("footer");
const scrollupButton = document.getElementById("scrollup");

const showMain = () => {
  openInvitation.style.display = 'none';
  invited.style.display = 'none';
  navBottom.style.display = 'block';
  main.style.display = 'block';
  footer.style.display = 'block';
  
  if (document.documentElement.scrollTop > 300) {
    scrollupButton.style.display = "block";
  } else {
    scrollupButton.style.display = "none";
  }
}

openInvitation.addEventListener("click", showMain);


// hide hash anchor url
window.onhashchange = function () { window.history.pushState('', document.title, window.location.pathname) }


// background music
var music = new Audio('assets/musics/marry-your-daughter.mp3');
const clickButton = document.getElementById("inv-btn");
music.loop = true;

clickButton.onclick = function playButton(){
  music.play();
}

function playAudio(){
  var play = document.getElementById('play');

  play.addEventListener('click', playMusic);

  function playMusic(){
    if (music.paused){
          music.play();
          play.style.background="url(assets/icons/pause-button.svg)";
    } else {
          music.pause();
          play.style.background="url(assets/icons/play-button.svg)";
    }
  }
}

window.addEventListener('load', playAudio);


// countdown
const countDate = new Date("2022-10-29T09:00:00").getTime();

var x = setInterval(function(){
    let now = new Date().getTime();

    let distance = countDate - now;

    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    document.getElementById("days").innerText = Math.floor(distance / (day)),
    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

    if(distance < 0){
        clearInterval(x);
        document.getElementById('days').innerText = 0;
        document.getElementById('hours').innerText = 0;
        document.getElementById('minutes').innerText = 0;
        document.getElementById('seconds').innerText = 0;
    }
})


// popup prokes
var popupProkes = document.querySelector('.popup-prokes');

function showPopup(){
  popupProkes.style.display='flex';
}

function hidePopup(){
  popupProkes.style.display='none';
}


// image slider
const slider = () => {
  return {
    selected: 1,
    images: [
        '/assets/images/slide1-gallery.png',
        '/assets/images/slide2-gallery.png',
        '/assets/images/slide3-gallery.png'
    ],
    back() {
        if (this.selected > 1) {
            this.selected = this.selected - 1;
        } else if (this.selected <= this.images.length){
          this.selected = this.images.length + this.selected - 1
      }
    },
    next() {
        if (this.selected < this.images.length) {
            this.selected = this.selected + 1;
        } else if (this.selected <= this.images.length){
            this.selected = this.images.length - this.selected + 1
        }
    },
  };
};


// scrollup
let mybutton = document.getElementById("scrollup");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scroll({top: 0, left: 0, behavior: 'smooth'});
})