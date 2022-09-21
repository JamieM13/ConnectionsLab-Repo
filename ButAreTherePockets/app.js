
//id and select dropdown

let dropdown;
dropdown = document.getElementById('search_dropdown');
console.log(dropdown.selectedIndex);

let garmentImg;
garmentImg = document.getElementById('garmentImg');
//listen to event dropdown selection

dropdown.addEventListener("change", displayGarment);

function displayGarment(){
    console.log(dropdown.selectedIndex);
    console.log(garmentArray[dropdown.selectedIndex].src);
    garmentImg.src = garmentArray[dropdown.selectedIndex].src;
    garmentScore.innerHTML = "Does It Pass?";
}
//show the right picture for an array


//id and select button

let button;
button = document.getElementById('button');
console.log("button");

let garmentScore;
garmentScore = document.getElementById('garmentScore');
console.log("garmentscorefound");
//listen to event click on button
button.addEventListener("click", displayCriteria);


function displayCriteria() {
    console.log("display_Criteria", garmentArray[dropdown.selectedIndex].innerHTML);
    garmentScore.innerHTML = garmentArray[dropdown.selectedIndex].score;
};

let score;
let pockets;
let holdPhone;
let representation;

let garmentArray = [];
garmentArray[0] ={
    "src" : "https://placekitten.com/400/400",
}

garmentArray[1] = {
    "src": "DTW_britt_utility_fr_indigo_Kate_s22_2781_920x.webp",
    "score": "Pass",
    // pockets: yes,
    // holdPhone: yes,
    // representation: yes,
}

garmentArray[2] = {
    "src": "JCrew.jpg",
    "score": "Fail",
    // pockets: no,
    // holdPhone: no,
    // representation: no,
}

garmentArray[3] = {
    "src": "AthletaHustle.jpg",
    "score": "Pass",
    // pockets: yes,
    // holdPhone: no,
    // representation: yes,
}

garmentArray[4] = {
    "src": "everlane.avif",
    "score": "Pass",
    // pockets: yes,
    // holdPhone: yes,
    // representation: yes,
}