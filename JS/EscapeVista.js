//maak een variable aan zodat de hoeveelheid getypte tekst minder wordt
var ImageMap = document.getElementById("ImageMap");
//een functie om door het pa te lopen
function TravelPath(Destination){
    //loop door ieder item in de lijst heen en check of de destination overeen komt met de ImageID of het item
    ImageDataList.forEach(i => {
        //======================================================showen van destination image en areas verplaatsen=======================================
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
            //======================================================checken van task en displayen=======================================================
            //check of the destination een task heeft
            if (i.Task != null) {
                //als de destination een task heeft, loop door de tasklist totdat een task gevonden is met de bijbehorende taskID
                TaskList.forEach(j => {
                    if (i.Task == j.TaskID) {
                        //check of the task al eens eerder voltooid is.
                        if (j.TaskCompleted != true) {
                            //als de task niet eerder voltooid is, laat de bijbehorende tekst zien, en display de div waarin deze geplaatst wodt
                            document.getElementById("Taskholder").style.display=("block");
                            document.getElementById("Taskholder").innerHTML=j.TaskQuestion;
                            //zet de task naar completed zodat deze niet nogmaals gedaan kan worden.
                            j.TaskCompleted = true;
                        }
                    };
                });
            } else{
                //als de destination geen bijbehorende task heeft, zet de display van de div naar 'none' zodat deze niet continue zichtbaar is.
                document.getElementById("Taskholder").style.display=("none");
            }
        }
    });
}

//voor testen, zodat ik niet telkens handmatig de areas moet focusen, aangezien dat de enige manier om ze op de website te zien.
//ImageMap.areas[1].focus();