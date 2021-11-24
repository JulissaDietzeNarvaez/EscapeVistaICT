//maak een variable aan zodat de hoeveelheid getypte tekst minder wordt
var ImageMap = document.getElementById("ImageMap");
//een functie om door het pa te lopen
function TravelPath(Destination){
    //loop door ieder item in de lijst heen en check of de destination overeen komt met de ImageID of het item
    ImageDataList.forEach(i => {
        //als het ImageID overeen komt doe de volgende aanpassingen
        if (i.ImageID == Destination) {
            //verander de coordinaten van de areas zodat ze correct overeen komen met de image. coordinaten zonder punten worden als 'null' neergezet
            ImageMap.areas[0].coords=i.Coordinates1;
            ImageMap.areas[1].coords=i.Coordinates2;
            ImageMap.areas[2].coords=i.Coordinates3;
            ImageMap.areas[3].coords=i.Coordinates4;
            //verander de onclick attribut van de area zodat deze correct overeen komt met het gewenste resultaat
            ImageMap.areas[0].setAttribute('onclick','TravelPath("'+i.Destination1+'")'); 
            ImageMap.areas[1].setAttribute('onclick','TravelPath("'+i.Destination2+'")'); 
            ImageMap.areas[2].setAttribute('onclick','TravelPath("'+i.Destination3+'")'); 
            ImageMap.areas[3].setAttribute('onclick','TravelPath("'+i.Destination4+'")'); 
            //verander de image zodat de juiste image geplaatst worden
            document.getElementById("ImageHolder").src='../IMAGES/School/'+i.ImageID+'.jpg'
        }
    });
}
//voor testen, zodat ik niet telkens handmatig de areas moet focusen, aangezien dat de enige manier om ze op de website te zien.
ImageMap.areas[1].focus();