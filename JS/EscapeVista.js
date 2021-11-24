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
    document.getElementById("ImageHolder").src='../IMAGES/School/Hoofdweg.jpg'
}
//switch the test image
function ShowImage2(){
    document.getElementById("ImageHolder").src='../IMAGES/School/Hoofdingang.jpg'
}

var ImageMap = document.getElementById("ImageMap");
function TravelPath(Destination){
    ImageDataList.forEach(i => {
        if (i.ImageID == Destination) {
            //Set the coordinates of the areas to the correct coordinates associated with that image
            ImageMap.areas[0].coords=i.Coordinates1;
            ImageMap.areas[1].coords=i.Coordinates2;
            ImageMap.areas[2].coords=i.Coordinates3;
            ImageMap.areas[3].coords=i.Coordinates4;
            //set the the onclick variable to the correct destination that can be reached from that image.
            ImageMap.areas[0].setAttribute('onclick','TravelPath("'+i.Destination1+'")'); 
            ImageMap.areas[1].setAttribute('onclick','TravelPath("'+i.Destination2+'")'); 
            ImageMap.areas[2].setAttribute('onclick','TravelPath("'+i.Destination3+'")'); 
            ImageMap.areas[3].setAttribute('onclick','TravelPath("'+i.Destination4+'")'); 
            //change the image to the correct image
            document.getElementById("ImageHolder").src='../IMAGES/School/'+i.ImageID+'.jpg'
        }
    });
}

ImageMap.areas[1].focus();
alert("Dit is een alert.");

