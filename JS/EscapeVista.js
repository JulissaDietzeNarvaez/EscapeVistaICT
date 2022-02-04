//List for keeping track which tasks have points
var PointList = {};
var LocationList = {};
var TotalScore = 0;
//variables to make typing easier
var Arrow1 = document.getElementById("ImageArrow1");
var Arrow2 = document.getElementById("ImageArrow2");
var Arrow3 = document.getElementById("ImageArrow3");
var Arrow4 = document.getElementById("ImageArrow4");


//this function is called everytime a new destination is travelled to
function TravelPath(Destination){
    //travel through each destination in the ImageDataList array
    ImageDataList.forEach(i => {
        //if the Image ID is equal to the requested destination, perform the following acts
        if (i.ImageID == Destination) {
            //======================================================show the image and move the arrow to the correct place=======================================
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
            //if the destination as a task, push that task through a function
            if (i.Task != null) {
                TaskQuestioning(i.Task);
            } else{
                //If the destination has no task, set the style of the taskholder div to none, so it is not continously displayed
                document.getElementById("Taskholder").style.display=("none");
            }
            let LandingsPage = false;
            if(i.ImageID ==="VistaCollege"){
            LandingsPage= true;
                
        }else{

        }
        } 
    })
}
function TaskQuestioning(QuestionTaskID){
    //remove the taskholder if it is still visible from a previous task.
    document.getElementById("Taskholder").style.display=("none");
    //empty variable to push the task to
    var TaskAnswers = [];
    //loop through the task array
    TaskList.forEach(j => {
        //if the correct task is found, proceed with the function
        if (QuestionTaskID == j.TaskID) {
            //check if the task hasn't been completed already
            if (j.TaskCompleted != true) {
                //set the display of the taskholder div to block to show it
                document.getElementById("Taskholder").style.display=("block");
                //if the task has a hint, it is a task the student must complete
                if (j.TaskHint != null) {
                    //loop through the answers of the task
                    for(k in j.TaskAnswers){
                        //add the answer to the variable
                        TaskAnswers.push("<label><input type='radio' name='TaskQuestion' value='"+k+"'> "+k+":"+j.TaskAnswers[k]+"</label><br><br>");
                    };
                    //convert the variable to a string
                    TaskAnswers = TaskAnswers.toString();
                    //clean de string, remove any unwanted , in the string
                    TaskAnswersCleaned = TaskAnswers.replace(/,/g,"");
                    //variable to hold the Task Name
                    TaskName = j.TaskID;
                    //place the question along with the answers and hint in the task holder div.
                    document.getElementById("Taskholder").innerHTML =j.TaskQuestion +"<br><form>"+TaskAnswersCleaned+"</form><button id='AnswerTaskButton'>Beantwoord vraag</button> <img id='TaskHint' src="+'"'+j.TaskHint+'"'+">";
                    document.getElementById('AnswerTaskButton').setAttribute('onclick',"AnswerTask('"+TaskName+"','"+j.TaskCorrectAnswer+"')");
                } 
                //if the task has no hint, it is a destination for the student to visit
                else{ 
                    document.getElementById("Taskholder").innerHTML=j.TaskQuestion;
                    LocationVisit(QuestionTaskID);
                }
            };
        }
    });     
}
//function is called if the visited destination is a location
function LocationVisit(LocationID){
    //place the destination info in a variable for easy access
    var LocationVari = (TaskList.find(i=>i.TaskID == LocationID));
    //check if the location has been visited before
    if(LocationVari.TaskCompleted == false){
        //check if the locationList of visited locations is present
        if (LocationList[LocationID] == null){
            //add the location to the list
            LocationList[LocationID] = 25;
            //update the progress bar 
            document.getElementById('VistaScore').value = document.getElementById('VistaScore').value + 10;
            //set TaskCompleted to true so it's information won't show up a second time when visited.
            LocationVari.TaskCompleted = true;
            PointUpdate(25);
        }
    }
}
//function is called if a question is answered
function AnswerTask(InputTask, TrueAnswer){
    //grab the value of the chosen answer
    var AnswerGiven = document.querySelector('input[name="TaskQuestion"]:checked').value;
    //place the task info in a variable for easy access
    var TaskVari = (TaskList.find(i=>i.TaskID == InputTask));
    //this is to prevent the user from answering again while the task is still on screen
    if(TaskVari.TaskCompleted == false){
        //Check the chosen answer against the correct answer
        if (AnswerGiven == TrueAnswer) {
            //if the values are equal, give 50 points to the user
            PointList[InputTask]= 50;
            //update the progress bar
            document.getElementById('VistaScore').value = document.getElementById('VistaScore').value + 10;
            PointUpdate(50);
        }else{
            //If the Values are not equal, set obtained points to 0. this prevents that the user can insert any answer and still get the points through brute force. 
            PointList[InputTask]=0;
            PointUpdate(0);
        }
    //set task to completed so it cannot be performed again
    TaskVari.TaskCompleted = true;
    } 
}
// function to view the achieved score 
function PointUpdate(Points){
    var PointOverview = "";
    //calculate total points
    TotalScore = TotalScore + Points;
    //walk through the point lists and show the points to the user
    //points from tasks
    for(var k in PointList){
        //add the points to the string
        PointOverview = PointOverview.concat("<br>Points van "+k+": "+PointList[k]+"<br>");
    }
    //points from visiting location
    for(var k in LocationList){
        //add the points to the string
        PointOverview = PointOverview.concat("<br>Points van "+k+": "+LocationList[k]+"<br>");
    }
    //write the points to the screen to show the user
        document.getElementById("score").innerHTML = PointOverview + "<br> Je Totale Score is: "+TotalScore;   
}
//Go back to LandingsPage
function GoHome(Home){ 
    //simutale a mouse click
    window. location.href="HTML\LandingsPagina.html";

}
