let startX=0;
let currentX=0;
let isSwiping=false;
let hasSwapped=false;
//for swipe
const cakeScreen=document.getElementById('cakeScreen');
const letterScreen=document.getElementById('letterScreen');

function handleTouchStart(e){
    if(hasSwapped)return;
    startX=e.touches[0].clientX;//clientX (e.touches[0].clientX = horizontal position of finger)
    isSwiping=true;
}
function handleTouchMove(e){
    if(!isSwiping||hasSwapped)return;
    currentX=e.touches[0].clientX;
    const diff=startX-currentX;

    //only move if swiping left(position diff)
    if(diff>0){
        cakeScreen.style.transform = `translateX(-${diff}px)`
        letterScreen.style.transform=`translateX(calc(100% - ${diff}px))`;
    }
}
function handleTouchEnd(e){
    if(!isSwiping|| hasSwapped) return;
    const diff = startX-currentX;
    if(diff>100){
        hasSwapped=true;
        cakeScreen.style.transform = '';
        letterScreen.style.transform = '';
        cakeScreen.classList.add('swiped');
        letterScreen.classList.add('show');
    }
    else{
        cakeScreen.style.transform='translateX(0)';
        letterScreen.style.transform=`translateX(100%)`
    }
    isSwiping=false;
}
cakeScreen.addEventListener('touchstart', handleTouchStart);
cakeScreen.addEventListener('touchmove', handleTouchMove);
cakeScreen.addEventListener('touchend', handleTouchEnd);
function handleMouseDown(e){
    if(hasSwapped)return;
    startX=e.clientX;
    isSwiping=true;
}
function handleMouseMove(e){
    if(!isSwiping || hasSwapped)return;
    currentX=e.clientX;
    const diff= startX-currentX;
    if (diff>0){
        cakeScreen.style.transform = `translateX(-${diff}px)`;
        letterScreen.style.transform=`translateX(calc(100% - ${diff}px))`;
    }
}
function handleMouseUp(e){
    if(!isSwiping || hasSwapped) return;
    const diff= startX - currentX;
    if (diff>100){
        hasSwapped=true;
        cakeScreen.style.transform='';
        letterScreen.style.transform='';
        cakeScreen.classList.add('swiped');
        letterScreen.classList.add('show');
    }
    else{
  cakeScreen.style.transform='translateX(0)';
        letterScreen.style.transform=`translateX(100%)`
    }
    isSwiping=false;
}

cakeScreen.addEventListener('mousedown',handleMouseDown);
cakeScreen.addEventListener('mousemove',handleMouseMove);
cakeScreen.addEventListener('mouseup',handleMouseUp);

const backButton=document.getElementById('backButton')

backButton.addEventListener('click',function(){
    hasSwapped=false;
    cakeScreen.classList.remove('swiped');
    letterScreen.classList.remove('show');
    cakeScreen.style.transform = 'translateX(0)';
})

function creatConfetti(){
    const colors = ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#655ce7', '#fd79a8'];

    for(let i=0; i<180 ; i++){
        setTimeout(()=> {
            const confetti = document.createElement('div');
            confetti.classList='confetti';

            confetti.style.left= Math.random()*100+'%';
            confetti.style.background=colors[Math.floor(Math.random()*colors.length)];
            confetti.style.animationDelay= Math.random()*2+2+'s';
            confetti.style.animationDuration = (Math.random()*2+2)+'s';
            confetti.style.transform=`rotate(${Math.random()*360}deg)`;
            document.body.appendChild(confetti);
            setTimeout(()=>confetti.remove(),5000);
        },i*50);
    }
}
setTimeout(creatConfetti,2000);
setInterval(creatConfetti,4000);

function creatBalloonPair(){
    const colors= ['#ff6b6b', '#feca57', '#48dbfb', '#ff9ff3', '#a29bfe', '#fd79a8'];
    const balloonCount= 5;
    for (let i= 0; i<bulloonCount;i++){
        setTimeout(()=>{
            const balloon=document.createElement('div');
            balloon.className= 'ballon ballon-left';
            balloon.style.background=colors[Math.floor(Math.random() * colors.length)];
            balloon.style,StyleProperty('--start-left',(20+i*15)+'px');
            balloon.style.animationDelay= (i*0.2)+'s';

            document.body.appandchild(balloon);

            setTimeout(()=>balloon.remove(),4000);

        },i*100);
    }
}