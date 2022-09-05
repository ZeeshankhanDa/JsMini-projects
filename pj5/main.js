const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')

btn.addEventListener('click',function(e){
    if(btn.classList.contains('ccc')){
        btn.classList.remove('ccc')
        video.play()
    }else if(!btn.classList.contains('ccc')){
        btn.classList.add('ccc')
        video.pause()
    }
})

const Preloader = document.querySelector('.preloader')
window.addEventListener('load',function(){
    Preloader.classList.add('hide-preloader');
})