
//id and select dropdown

let dropdown;
dropdown = document.getElementById('search_dropdown');
// console.log(dropdown.selectedIndex);

let pocketIcon;
pocketIcon = document.getElementById('pocketIcon');
let phoneIcon;
phoneIcon = document.getElementById('phoneIcon');
let repIcon;
repIcon = document.getElementById('repIcon');
let passFail;

let garmentImg;
garmentImg = document.getElementById('garmentImg');
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
    repIcon.src = "checkbox.png";

}



//id and select button
let button;
button = document.getElementById('button');
// console.log("button");
let garmentScore;
garmentScore = document.getElementById('garmentScore');
console.log("garmentscorefound");

//listen to event click on button
button.addEventListener("click", displayCriteria);


// let wrapperColor;
// wrapperColor = document.getElementById('garmentWrapper');




//change the score to pass/fail
function displayCriteria() {
    console.log("display_Criteria", garmentArray[dropdown.selectedIndex].innerHTML);
    garmentScore.innerHTML = garmentArray[dropdown.selectedIndex].score;

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
    if (garmentArray[dropdown.selectedIndex].representation == 1) {
        repIcon.src = "checkmark.png";
    } else {
        repIcon.src = "x-mark-512.png";
    }

    if ((garmentArray[dropdown.selectedIndex].pockets + garmentArray[dropdown.selectedIndex].holdPhone + garmentArray[dropdown.selectedIndex].representation) > 1) {
        console.log("pass");
        passFail = "Pass";
        // wrapperColor.garment_img_wrapper == "#41521f";

        /////////////////////////////////        wrapperColor = 

    } else {
        console.log("fail");
        passFail = "Fail"
    }

};

let hoverScore;
hoverScore = document.getElementById('hover_score');
let hoverNum;


//listen for mouseover event
garmentScore.addEventListener("mouseover", displayScoreOver);
//display pass/fail percentage score

function displayScoreOver() {
    console.log(passFail);
    // hoverNum= ((garmentArray[dropdown.selectedIndex].pockets + garmentArray[dropdown.selectedIndex].holdPhone + garmentArray[dropdown.selectedIndex].representation) / 3 * 100);
    // console.log((garmentArray[dropdown.selectedIndex].pockets + garmentArray[dropdown.selectedIndex].holdPhone + garmentArray[dropdown.selectedIndex].representation) / 3 * 100);
    // hoverScore.innerHTML = hoverNum;
    
}



let score;
let pockets;
let holdPhone;
let representation;

let garmentArray = [];
garmentArray[0] = {
    "src": "https://placekitten.com/400/400",
    // "pockets" : -1,
    // "holdPhone" : -1,
    // "representation" : -1,
}

garmentArray[1] = {
    "src": "DTW_britt_utility_fr_indigo_Kate_s22_2781_920x.webp",
    "score": "Pass",
    "pockets": 1,
    "holdPhone": 1,
    "representation": 1,
}

garmentArray[2] = {
    "src": "JCrew.jpg",
    "score": "Fail",
    "pockets": 0,
    "holdPhone": 0,
    "representation": 0,
}

garmentArray[3] = {
    "src": "AthletaHustle.jpg",
    "score": "Pass",
    "pockets": 1,
    "holdPhone": 0,
    "representation": 1,
}

garmentArray[4] = {
    "src": "everlane.avif",
    "score": "Pass",
    "pockets": 1,
    "holdPhone": 1,
    "representation": 1,
}

let criteriaArray = [];
criteriaArray[0] = {
  "src" : "checkbox.png"
}
criteriaArray[1] = {
    "src": "checkmark.jpg"
}
criteriaArray[2] = {
    "src": "x-mark-512.png"
}