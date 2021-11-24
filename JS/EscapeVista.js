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
            //change the clickable coordinates on the image map to correspond to the new image
            //if no coordinates are defined, set area location to 0,0,0,0
            //top area defined in HTML
            if (i.Coordinates1 != null) {
                ImageMap.areas[0].coords= i.Coordinates1;
            } else{
                ImageMap.areas[0].coords= "0,0,0,0";
            }
            //second area defined in HTML
            if (i.Coordinates2 != null) {
                ImageMap.areas[1].coords= i.Coordinates2;
            } else{
                ImageMap.areas[1].coords= "0,0,0,0";
            }
            //third area defined in HTML
            if (i.Coordinates3 != null) {
                ImageMap.areas[2].coords= i.Coordinates3;
            }  else{
                ImageMap.areas[2].coords= "0,0,0,0";
            }
            //fourth area defined in HTML
            if (i.Coordinates4 != null) {
                ImageMap.areas[3].coords= i.Coordinates4;
            } else{
                ImageMap.areas[3].coords= "0,0,0,0";
            }
            //change the destination tags in the onclick event so that the next click sends the users to the correct image  
            //if there is no destination define, set the travelpath variable to null
            //top area defined in HTML
            if (i.Destination1 != null) {
                ImageMap.areas[0].setAttribute('onclick','TravelPath("'+i.Destination1+'")'); 
            } else {
                ImageMap.areas[0].setAttribute('onclick','TravelPath(null)'); 
            }
            //second area defined in HTML
            if (i.Destination2 != null) {
                ImageMap.areas[1].setAttribute('onclick','TravelPath("'+i.Destination2+'")'); 
            } else {
                ImageMap.areas[1].setAttribute('onclick','TravelPath(null)'); 
            }
            //third area defined in HTML
            if (i.Destination3 != null) {
                ImageMap.areas[2].setAttribute('onclick','TravelPath("'+i.Destination3+'")'); 
            }else {
                ImageMap.areas[2].setAttribute('onclick','TravelPath(null)'); 
            }
            //fourth area defined in HTML
            if (i.Destination4 != null) {
                ImageMap.areas[3].setAttribute('onclick','TravelPath("'+i.Destination4+'")'); 
            }else {
                ImageMap.areas[3].setAttribute('onclick','TravelPath(null)'); 
            }
            //change the image to the correct image
            document.getElementById("ImageHolder").src='../IMAGES/School/'+i.ImageID+'.jpg'
        }
    });
}