let startX=0;
let currentX=0;
let isSwiping=false;
let hasSwapped=false;
//for swipe
const cakeScreen=document.getElementById('cakeScreen');
const letterScreen=document.getElementById('letterScreen');

function handleTouchStart(e){
    if(hasSwapped)return;
    startX=e.touches[0].clientX;
    isSwiping=true;
}
function handleTouchMove(e){
    if(!isSwiping||hasSwapped)return;
    currentX=e.touches[0].clientX;
    const diff=startX-currentX;

    //only move if swiping left(position diff)
    if(diff>0){
        cakeScreen.style.transform = `translateX(-${diff}px)`
    }
}
function handleTouchEnd(e){
    if(!isSwiping|| hasSwapped) return;
    const diff = startX-currentX;
    if(diff>100){
        hasSwapped=true;
        cakeScreen.classList.add('swiped');
        letterScreen.classList.add('show');
    }
    else{
        cakeScreen.style.transform='translateX(0)';
    }
    isSwiping=false;
}
cakeScreen.addEventListener('touchstart',handleTouchStart);
cakeScreen.addEventListener('touchstart', handleTouchStart);
cakeScreen.addEventListener('touchmove', handleTouchMove);
cakeScreen.addEventListener('touchend', handleTouchEnd);