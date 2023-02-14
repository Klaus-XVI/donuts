let ctx = gameCanvas.getContext("2d");
let x = [100,300,500];
let y = [0,0,0];
let speed = [2,1,3];
let dogX = 0; changeX = 0; score = 0;
let heart1X = 60; changeX = 0
let heart2X = 60; changeX = 0
let heart3X = 60; changeX = 0
let missedCount = 0;

let heart1 = new Image();
heart1.src = document.getElementById('heart1').src;

let gameTimer = setInterval(mainLoop,20);

function mainLoop() {
    ctx.clearRect(0,0,640,480);
    ctx.font = "30px Arial";
    ctx.fillText("Score: " + score, 10, 30);

 
       
       
    

    for (let n = 0; n < 3; n++) {
        ctx.drawImage(donut, x[n],y[n],80,80);
        y[n] += speed[n]*6;
        checkForHits(n);
        if (y[n] > 480) {
            y[n] = -0;
            x[n] = Math.random()*6000;
            missedCount++;
            if (missedCount === 5) {
                heart1X += 60;
            }
                if (missedCount === 15) {
                    heart2X += 160;
                    
                }
                    if (missedCount === 25) {
                        heart3X = 800;
                
            }
        }
    }
    ctx.drawImage(dog, dogX,400,80,80);
    ctx.drawImage(heart1, heart1X + 520,20,40,40)
    ctx.drawImage(heart2, heart2X + 470, 20, 40, 40);
    ctx.drawImage(heart3, heart3X + 420, 20, 40, 40);
    dogX += changeX;
}




document.onkeydown = keyPressed;
function keyPressed(e) {
    let k = e.keyCode;
    if (k == 65) {changeX = -10;}
    if (k == 68) {changeX = 10;}
}

document.onkeyup = keyReleased;
function keyReleased(e) {
    let k = e.keyCode;
    if (k == 65) {changeX = 0;}
    if (k == 68) {changeX = 0;}
}
       
   
function checkForHits(n) {
    if (Math.abs(400-y[n] < 60) && Math.abs(dogX-x[n]) < 60) {
        score += 1;
        y[n] = -80;
        x[n] = Math.random()*600;
        beep.play();
        missedCount = 0;
    }
}


if (heart3X >= 180 ) {
    clearInterval(gameTimer);

    ctx.font="60px Arial";
    ctx.fillText("Game over!", 150, 250);
}









   
  
// change





