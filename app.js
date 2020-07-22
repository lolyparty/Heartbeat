var heart = document.querySelector('.heart');
var beat = document.querySelector('#audiobeat');

heart.addEventListener('click', ()=>{
    heart.style.animation = "heartbeat 0.55s ease-in-out infinite alternate";
    beat.play();
    beat.loop = true;
})

//add greensock play pause continue countdown to disintegrate