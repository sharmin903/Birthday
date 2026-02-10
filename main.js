
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

const backButton = document.querySelector('.back-button');

if (backButton) { 
    backButton.addEventListener('click', function() {
        hasSwapped = false;
        cakeScreen.classList.remove('swiped');
        letterScreen.classList.remove('show');
        cakeScreen.style.transform = 'translateX(0)';
        letterScreen.style.transform = 'translateX(100%)';  
    });
}

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

function createBalloonPair() {
    // Gradient colors for prettier balloons
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #7f2bd4 100%)',
        'linear-gradient(135deg, #f093fb 0%, #b01d31 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00878f 100%)',
        'linear-gradient(135deg, #43e97b 0%, #006e5a 100%)',
        'linear-gradient(135deg, #fa709a 0%, #aa9103 100%)',
        'linear-gradient(135deg, #30cfd0 0%, #250053 100%)',
        'linear-gradient(135deg, #a8edea 0%, #7e062c 100%)',
        'linear-gradient(135deg, #ff9a9e 0%, #7b0054 100%)'
    ];
    
    const balloonCount = 10;  // Increased to 6 balloons per side
    
    // LEFT side balloons
    for (let i = 0; i < balloonCount; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon balloon-left';
            balloon.style.background = gradients[Math.floor(Math.random() * gradients.length)];
            balloon.style.setProperty('--start-left', (30 + i * 30) + 'px');
            balloon.style.animationDelay = (i * 1.15) + 's';
            
            // Random size variation
            const size = 0.8 + Math.random() * 0.4;  // 0.8 to 1.2
            balloon.style.transform = `scale(${size})`;
            
            document.body.appendChild(balloon);
            
            setTimeout(() => balloon.remove(), 5000);
        }, i * 150);
    }
    
    // RIGHT side balloons
    for (let i = 0; i < balloonCount; i++) {
        setTimeout(() => {
            const balloon = document.createElement('div');
            balloon.className = 'balloon balloon-right';
            balloon.style.background = gradients[Math.floor(Math.random() * gradients.length)];
            balloon.style.setProperty('--start-right', (30 + i * 30) + 'px');
            balloon.style.animationDelay = (i * 1.15) + 's';
            
            // Random size variation
            const size = 0.8 + Math.random() * 0.4;
            balloon.style.transform = `scale(${size})`;
            
            document.body.appendChild(balloon);
            
            setTimeout(() => balloon.remove(), 5000);
        }, i * 150);
    }
}

window.addEventListener('load', createBalloonPair);