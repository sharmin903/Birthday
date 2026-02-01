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
cakeScreen.addEventListener('touchstart', handleTouchStart);
cakeScreen.addEventListener('touchmove', handleTouchMove);
cakeScreen.addEventListener('touchend', handleTouchEnd);

cakeScreen.addEventListener('mousedown',handleMouseDown);
cakeScreen.addEventListener('mousemove',handleMouseMove);
cakeScreen.addEventListener('mouseup',handleMouseUp);