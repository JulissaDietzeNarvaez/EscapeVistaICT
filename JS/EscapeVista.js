//List voor bijhouden welke punten verdient zijn.
var PointList = {"Rekenen": 0, "Hard- en Software": 0, "Database": 0, "AMO": 0, "CCCCC":0};
var LocationList = {};
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
            //===========X coordinates=============
            Arrow1.setAttribute('x', i.Arrow1CoordsX);
            Arrow2.setAttribute('x', i.Arrow2CoordsX);
            Arrow3.setAttribute('x', i.Arrow3CoordsX);
            Arrow4.setAttribute('x', i.Arrow4CoordsX);
            //===========Y Coordinates=============
            Arrow1.setAttribute('y', i.Arrow1CoordsY);
            Arrow2.setAttribute('y', i.Arrow2CoordsY);
            Arrow3.setAttribute('y', i.Arrow3CoordsY);
            Arrow4.setAttribute('y', i.Arrow4CoordsY);
            //=============Image===================
            document.getElementById("ImageHolder").src='../IMAGES/School/'+i.ImageID+'.jpg';
            //==========Destinations===============
            Arrow1.setAttribute('onclick','TravelPath("'+i.Destination1+'")'); 
            Arrow2.setAttribute('onclick','TravelPath("'+i.Destination2+'")'); 
            Arrow3.setAttribute('onclick','TravelPath("'+i.Destination3+'")'); 
            Arrow4.setAttribute('onclick','TravelPath("'+i.Destination4+'")'); 
            //==========Arrow Directions===========
            Arrow1.setAttribute('href', '../IMAGES/Blue arrow '+i.Arrow1Direction+'.png');
            Arrow2.setAttribute('href', '../IMAGES/Blue arrow '+i.Arrow2Direction+'.png');
            Arrow3.setAttribute('href', '../IMAGES/Blue arrow '+i.Arrow3Direction+'.png');
            Arrow4.setAttribute('href', '../IMAGES/Blue arrow '+i.Arrow4Direction+'.png');
            //als de destination een task defined heeft, loop door de functie.
            if (i.Task != null) {
                TaskQuestioning(i.Task);
            } else{
                //als de destination geen bijbehorende task heeft, zet de display van de div naar 'none' zodat deze niet continue zichtbaar is.
                document.getElementById("Taskholder").style.display=("none");
            }
        } 
    })
}
function TaskQuestioning(QuestionTaskID){
    //lege variable om de antwoorden in op te slaan
    var TaskAnswers = [];
    //als de destination een task heeft, loop door de tasklist totdat een task gevonden is met de bijbehorende taskID
    TaskList.forEach(j => {
        if (QuestionTaskID == j.TaskID) {
            //check of the task al eens eerder voltooid is.
            if (j.TaskCompleted != true) {
                //als de task niet eerder voltooid is, laat de bijbehorende tekst zien, en display de div waarin deze geplaatst wodt
                document.getElementById("Taskholder").style.display=("block");
                //als de task een hint geeft, zet deze neer in het block
                if (j.TaskHint != null) {
                    //loop door de antwoorden van de vraag
                    for(k in j.TaskAnswers){
                        //voeg het antwoord toe aan de variable
                        TaskAnswers.push("<label><input type='radio' name='TaskQuestion' value='"+k+"'> "+k+":"+j.TaskAnswers[k]+"</label><br>");
                    };
                    //zet de array om naar een string
                    TaskAnswers = TaskAnswers.toString();
                    //clean de string
                    TaskAnswersCleaned = TaskAnswers.replace(/,/g,"");
                    //zet de opdracht samen met de antwoorden en hint in de TaskHolder.
                    document.getElementById("Taskholder").innerHTML=j.TaskQuestion +"<br><br><form>"+TaskAnswersCleaned+"</form><button onclick=AnwserTask("+"'"+j.TaskID+"'"+","+"'"+j.TaskCorrectAnswer+"'"+")>Beantwoord vraag</button> <img id='TaskHint' src="+'"'+j.TaskHint+'"'+">";
                } 
                //als de task geen hint heeft, zet alleen de task tekst neer.
                else{ 
                    document.getElementById("Taskholder").innerHTML=j.TaskQuestion;
                    LocationVisit(QuestionTaskID);
                }
                //zet de task naar completed zodat deze niet nogmaals gedaan kan worden.
                j.TaskCompleted = true;
            }
        };
    });
}
//functie voor het bezoeken van bepaalde locaties.
function LocationVisit(LocationID){
    if (LocationList[LocationID] == null){
        LocationList.push(LocationID);
        LocationList[LocationID] = 25;  
    }
}
function AnwserTask(InputTask, TrueAnswer){
    //pakt de value van het gekozen antwoord
    var AnswerGiven = document.querySelector('input[name="TaskQuestion"]:checked').value;
    //check de gekozen waarde tegenover de correcte waarde
    if (AnswerGiven == TrueAnswer) {
        //als de waarde overeen komen, zet de verkregen punten naar 50
        PointList[InputTask]=50;
        alert("Vraag beantwoord.");
    }else{
        //als de waardes niet overeen komen, zet de verkregen punten naar 0. dit voorkomt ook dat gebruiker ieder gegeven antwoord kunnen invoeren en de punten alsnog krijgen ondanks een fout antwoord 
        PointList[InputTask]=0;
        alert("Vraag beantwoord.");
    }
}