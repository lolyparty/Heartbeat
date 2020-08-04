var heart = document.querySelector('.heart');
var beat = document.querySelector('#audiobeat');
var playing = false;
var tween = gsap.to('.heart',{
    duration:1.05,
    scale:1.4,
    rotation:45,
    ease: 'bounce',
    repeat:-1,
    paused:true,
});

// var timeInt = function(countSeconds){
    
// }

// var countMinute = 1;
//     var countSeconds = countMinute * 60;

var time = function (){
    const countMinute = 1;
        let countSeconds = countMinute * 60;

    // clearInterval(time)
    setInterval(()=>{
        var  minuteLeft = Math.floor(countSeconds/60);
           if(minuteLeft < 10){
               minuteLeft = '0' + minuteLeft;
           }
            var secondsLeft = countSeconds % 60;
            if (secondsLeft < 10){
                secondsLeft = '0' + secondsLeft;
            }
        
            countSeconds--;
            if(countSeconds < 0){
                countSeconds = 0;
            }
        
            var timer = minuteLeft + ':' + secondsLeft
            // console.log(timer);
        
            document.querySelector('.span').textContent = timer;
    }, 1000)
    
}

heart.addEventListener('click', ()=>{
    

    beat.loop = true;
    beat.onplaying = ()=>{
        playing = true;
        console.log('Playing');
    }

    beat.onpause = ()=>{
        playing = false;
        console.log('Paused');
        time();
    }

    if(playing){
        beat.pause();
        tween.pause();
        console.log('click to play');
        document.querySelector('.timer').style.display = 'block';
    }else{
        beat.play();
        tween.play();
        console.log('click to pause');
        document.querySelector('.timer').style.display = 'none';
    }
})

