const imageArray = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg"
];

let index = 0;

function displayImage() {
    document.getElementById("currentImage").src = imageArray[index];
}

function goNext() {
    index++;
    if (index >= imageArray.length) index = 0;
    displayImage();
}

function goPrev() {
    index--;
    if (index < 0) index = imageArray.length - 1;
    displayImage();
}

displayImage(); // Load first image


