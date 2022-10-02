//initialize and map variables 
let dropdown;
let pocketIcon;
let phoneIcon;
let realIcon;
let passFail;
let button;
let garmentImg;
let garmentScore;
let score;
let pockets;
let holdPhone;
let real;

dropdown = document.getElementById('search_dropdown');
pocketIcon = document.getElementById('pocketIcon');
phoneIcon = document.getElementById('phoneIcon');
realIcon = document.getElementById('realIcon');
garmentImg = document.getElementById('garmentImg');
button = document.getElementById('button');
garmentScore = document.getElementById('garmentScore');

//listen to event dropdown selection
//show the right picture for an array

dropdown.addEventListener("change", displayGarment);

function displayGarment() {
    // console.log(dropdown.selectedIndex);
    // console.log(garmentArray[dropdown.selectedIndex].src);
    garmentImg.src = garmentArray[dropdown.selectedIndex].src;
    garmentScore.innerHTML = "Does It Pass?";
    pocketIcon.src = "checkbox.png";
    phoneIcon.src = "checkbox.png";
    realIcon.src = "checkbox.png";
    displayCriteria();
}

// update the criteria and change the score to pass/fail
function displayCriteria() {
    console.log("display_Criteria", garmentArray[dropdown.selectedIndex].innerHTML);

    if (garmentArray[dropdown.selectedIndex].pockets == 1) {
        pocketIcon.src = "checkmark.png";
    } else {
        pocketIcon.src = "x-mark-512.png";
    }
    if (garmentArray[dropdown.selectedIndex].holdPhone == 1) {
        phoneIcon.src = "checkmark.png";
    } else {
        phoneIcon.src = "x-mark-512.png";
    }
    if (garmentArray[dropdown.selectedIndex].real == 1) {
        realIcon.src = "checkmark.png";
    } else {
        realIcon.src = "x-mark-512.png";
    }

    if ((garmentArray[dropdown.selectedIndex].pockets + garmentArray[dropdown.selectedIndex].holdPhone + garmentArray[dropdown.selectedIndex].real) > 2) {
        console.log("pass");
        passFail = "Pass";
        garmentScore.innerHTML = "Pass"
        button.innerHTML = "Are more pockets ever a bad thing?"
       
    } else {
        console.log("fail");
        passFail = "Fail"
        garmentScore.innerHTML = "Fail"
        button.innerHTML = "Add some pockets"
    }

};

//--------------------p5-----------------//

let pocketAdd = [];
let pocketX, pocketY;
let pocketW = 20;
let pocketL;
let pocketRotate = 0;
let imgX;
let imgY;
let img;
let currentCol =0;

function preload() {
  img = loadImage('JCrewPants.jpeg');
}


function setup() {
  background(200);

}

function draw() {
  // background(220);
  pixelDensity(2.5);
  let myCanvas = createCanvas(600, 600);
  // background(200);
  image (img, 0, 0);
  
  angleMode(DEGREES);
  rectMode(CENTER);
  noStroke();
  
  
  pocketL = pocketW + 10;
  fill(colorArray[currentCol].col);
  rect(mouseX, mouseY, pocketW, pocketL);
  triangle(
    mouseX - pocketW / 2,
    mouseY + pocketL / 2,
    mouseX + pocketW / 2,
    mouseY + pocketL / 2,
    mouseX,
    mouseY + pocketL / 2 + pocketW / 3
  );
  for (i = 0; i < pocketAdd.length; i++) {
    rotate(pocketRotate);
    fill(pocketAdd[i].pocketCol);
    rect(pocketAdd[i].x, pocketAdd[i].y, pocketAdd[i].w, pocketAdd[i].l);
    triangle(
    pocketAdd[i].tx1,
    pocketAdd[i].ty1,
    pocketAdd[i].tx2,
    pocketAdd[i].ty2,
    pocketAdd[i].tx3,
    pocketAdd[i].ty3
    );
  }
}

function mousePressed() {
  pocketAdd.push({
    pocketCol: colorArray[currentCol].col,
    x: mouseX,
    y: mouseY,
    w: pocketW,
    l: pocketL,
    tx1: mouseX - pocketW / 2,
    ty1: mouseY + pocketL / 2,
    tx2: mouseX + pocketW / 2,
    ty2: mouseY + pocketL / 2,
    tx3: mouseX,
    ty3: mouseY + pocketL / 2 + pocketW / 3,
  });
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    pocketW += 5;
  }
  if (keyCode === DOWN_ARROW) {
    pocketW -= 5;
    if (pocketW < 1) {
      pocketW = 10;
    }
  }
  if (keyCode === LEFT_ARROW) {
     currentCol--;
     if (currentCol <0){
        currentCol = colorArray.length-1;
        console.log(currentCol);
     }
     }
if (keyCode === RIGHT_ARROW) {
        currentCol++;
        if (currentCol >= colorArray.length){
           currentCol = 0;
        }
        }
}

//-------------------p5------------------------------//


// let hoverScore;
// hoverScore = document.getElementById('hover_score');
// let hoverNum;


// //listen for mouseover event
// garmentScore.addEventListener("mouseover", displayScoreOver);
// //display pass/fail percentage score

// function displayScoreOver() {
//     console.log(passFail);
    // hoverNum= ((garmentArray[dropdown.selectedIndex].pockets + garmentArray[dropdown.selectedIndex].holdPhone + garmentArray[dropdown.selectedIndex].representation) / 3 * 100);
    // console.log((garmentArray[dropdown.selectedIndex].pockets + garmentArray[dropdown.selectedIndex].holdPhone + garmentArray[dropdown.selectedIndex].representation) / 3 * 100);
    // hoverScore.innerHTML = hoverNum;
    
// }




