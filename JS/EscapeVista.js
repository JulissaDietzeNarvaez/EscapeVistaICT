//Zet de imagemap area's naar coordinaten 0, zodat ze niet klikbaar zijn.
function HideTestImage(){
    document.getElementById("TestMap").areas[0].coords="0,0,0";
    document.getElementById("TestMap").areas[1].coords="0,0,0";
}
//zet de klik area's terug naar hun standaard waarden waardoor ze weer klikbaar worden.
function ShowTestImage(){
    document.getElementById("TestMap").areas[0].coords="170,110,50";
    document.getElementById("TestMap").areas[1].coords="170,110,350,400";
}

//switch the test image
function ShowImage1(){
    document.getElementById("ImageHolder").src='../IMAGES/Test Image.png'
}
//switch the test image
function ShowImage2(){
    document.getElementById("ImageHolder").src='../IMAGES/Test Image2.png'
}