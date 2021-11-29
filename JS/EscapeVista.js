//List voor bijhouden welke punten verdient zijn.
var PointList = {"Rekenen": 0,};
//maak een variable aan zodat de hoeveelheid getypte tekst minder wordt
var Arrow1 = document.getElementById("ImageArrow1");
var Arrow2 = document.getElementById("ImageArrow2");
var Arrow3 = document.getElementById("ImageArrow3");
var Arrow4 = document.getElementById("ImageArrow4");


//een functie om door het pa te lopen
function TravelPath(Destination){
    ImageDataList.forEach(i => {
        //als het ImageID overeen komt doe de volgende aanpassingen
        if (i.ImageID == Destination) {
            //======================================================showen van destination image en arrows verplaatsen=======================================
            console.log("Image found");
            //===========X coordinates=============
            Arrow1.setAttribute('x', i.Arrow1CoordsX);
            Arrow2.setAttribute('x', i.Arrow1CoordsX);
            Arrow3.setAttribute('x', i.Arrow1CoordsX);
            Arrow4.setAttribute('x', i.Arrow1CoordsX);
            console.log("X coordinates");
            //===========Y Coordinates=============
            Arrow1.setAttribute('y', i.Arrow1CoordsX);
            Arrow2.setAttribute('y', i.Arrow1CoordsX);
            Arrow3.setAttribute('y', i.Arrow1CoordsX);
            Arrow4.setAttribute('y', i.Arrow1CoordsX);
            console.log("y coordinates");
            //=============Image===================
            document.getElementById("ImageHolder").src='../IMAGES/School/'+i.ImageID+'.jpg';
            console.log("Image");
            //==========Destinations===============
            Arrow1.setAttribute('onclick','TravelPath("'+i.Destination1+'")'); 
            Arrow2.setAttribute('onclick','TravelPath("'+i.Destination2+'")'); 
            Arrow3.setAttribute('onclick','TravelPath("'+i.Destination3+'")'); 
            Arrow4.setAttribute('onclick','TravelPath("'+i.Destination4+'")'); 
        }
        if (i.Task != null) {
            //als de destination een task heeft, loop door de tasklist totdat een task gevonden is met de bijbehorende taskID
            TaskList.forEach(j => {
                if (i.Task == j.TaskID) {
                    //check of the task al eens eerder voltooid is.
                    if (j.TaskCompleted != true) {
                        //als de task niet eerder voltooid is, laat de bijbehorende tekst zien, en display de div waarin deze geplaatst wodt
                        document.getElementById("Taskholder").style.display=("block");
                        document.getElementById("Taskholder").innerHTML=j.TaskQuestion + "<br><br><br><p>Hint:</p><img id='TaskHint'>";
                        document.getElementById("TaskHint").src=j.TaskHint;
                        //zet de task naar completed zodat deze niet nogmaals gedaan kan worden.
                        j.TaskCompleted = true;
                    }
                };
            });
        } else{
            //als de destination geen bijbehorende task heeft, zet de display van de div naar 'none' zodat deze niet continue zichtbaar is.
            document.getElementById("Taskholder").style.display=("none");
        }
    })
}

document.getElementById("Taskholder").style.display=("block");
document.getElementById("Taskholder").innerHTML= TaskList[0].TaskQuestion+ "<br><br><br><p>Hint:</p><img id='TaskHint'>";
document.getElementById("TaskHint").src=TaskList[0].TaskHint;

//function TravelPath(Destination){
    //loop door ieder item in de lijst heen en check of de destination overeen komt met de ImageID of het item
    
        
        

            //verander de onclick attribut van de area zodat deze correct overeen komt met het gewenste resultaat
            //ImageMap.areas[0].setAttribute('onclick','TravelPath("'+i.Destination1+'")'); 
            //ImageMap.areas[1].setAttribute('onclick','TravelPath("'+i.Destination2+'")'); 
            //ImageMap.areas[2].setAttribute('onclick','TravelPath("'+i.Destination3+'")'); 
            //ImageMap.areas[3].setAttribute('onclick','TravelPath("'+i.Destination4+'")'); 
            //verander de image zodat de juiste image geplaatst worden
            //document.getElementById("ImageHolder").src='../IMAGES/School/'+i.ImageID+'.jpg'
            //======================================================checken van task en displayen=======================================================
            //check of the destination een task heeft
            
     
//}
function AnwserTask(inputVal, InputTask){
    console.log(inputVal, InputTask);
    if (inputVal.value == 213) {
        console.log(InputTask);
        PointList[InputTask]=50;
    }
    console.log(PointList);
}
//voor testen, zodat ik niet telkens handmatig de areas moet focusen, aangezien dat de enige manier om ze op de website te zien.
