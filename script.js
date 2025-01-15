'use strict'
const notification = document.querySelector(".notification-real");
const whatNew = document.querySelector(".whats-new");
const nav2 = document.querySelector('.nav2');
const boxRight = document.querySelector('.box-right');
const playlist1 = document.querySelector('.playlist1');
const openedPlaylist = document.querySelector('.my-playlist-opened');
const home = document.querySelector('.content');
const homeIcon = document.querySelector('.home');
notification.addEventListener('mouseover',function(){
    whatNew.classList.toggle('display-none');
})
notification.addEventListener('mouseout',function(){
    whatNew.classList.toggle('display-none');
})

boxRight.addEventListener('scroll',function(){
    if(boxRight.scrollTop >320){
        nav2.style.backgroundColor = '#1d1e1f';
        
    }
})
boxRight.addEventListener('scroll',function(){
    if(boxRight.scrollTop<320){
        nav2.style.backgroundColor = 'transparent';
    }
})
let page = 'home';
playlist1.addEventListener('click',function(){
    playlist1.style.backgroundColor ='#1a1a1a';
    openedPlaylist.classList.remove('display-none');
    home.classList.add('display-none');
    homeIcon.classList.add('not-selected-icon');
    homeIcon.classList.remove('selected-icon');

})
homeIcon.addEventListener('click',function(){
    playlist1.style.backgroundColor = 'transparent';
    openedPlaylist.classList.add('display-none');
    home.classList.remove('display-none');
    homeIcon.classList.remove('not-selected-icon');
    homeIcon.classList.add('selected-icon');
})