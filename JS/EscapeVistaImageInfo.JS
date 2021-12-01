//Lijst uitleg
//ImageID: De naam van de item and de naam van de image die moet verschijnen
//Coordinates: de coordinaten voor de areas waarop geklikt kan worden
//Destination: Waar de gebruiker naartoe gaat als op de bijbehorende area geklikt wordt
//task: als de image een opdracht of bericht heeft voor de gebruiker dan wordt deze hier aan gegeven, bij het laden van de image wordt dan de task uit de TaskList[] gehaald.


var ImageDataList = [
    {
        //Id
        ImageID: "Hoofdweg",
        //x Coordinates
        Arrow1CoordsX: "30",
        Arrow2CoordsX: "680",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "180",
        Arrow2CoordsY: "220",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Left",
        Arrow2Direction: "Up",
        Arrow3Direction: null,
        Arrow4Direction: null,
        //Destinations
        Destination1: "Pad naar Hoofdingang",
        Destination2: "Zijweg aan Hoofdweg",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "Rekenen",
    },
    {
        //Id
        ImageID: "Zijweg aan Hoofdweg",
        //x Coordinates
        Arrow1CoordsX: "30",
        Arrow2CoordsX: "320",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "500",
        Arrow2CoordsY: "200",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Left",
        Arrow2Direction: "Up",
        Arrow3Direction: null,
        Arrow4Direction: null,
        //Destinations
        Destination1: "Hoofdweg",
        Destination2: "Zij pad",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "Rekenen",
    },
    {
        //Id
        ImageID: "Zij pad",
        //x Coordinates
        Arrow1CoordsX: "70",
        Arrow2CoordsX: "485",
        Arrow3CoordsX: "360",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "180",
        Arrow2CoordsY: "160",
        Arrow3CoordsY: "500",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Left",
        Arrow2Direction: "Left",
        Arrow3Direction: "Down",
        Arrow4Direction: null,
        //Destinations
        Destination1: "Fietsenstalling",
        Destination2: "Receptie",
        Destination3: "Zijweg aan Hoofdweg",
        Destination4: null,
        //tasks
        Task: "Rekenen",
    },
    {
        //Id
        ImageID: "Pad naar Hoofdingang",
        //x Coordinates
        Arrow1CoordsX: "350",
        Arrow2CoordsX: "360",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "250",
        Arrow2CoordsY: "500",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Up",
        Arrow2Direction: "Down",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "Hoofdingang",
        Destination2: "Hoofdweg",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "Rekenen",
    },
    {
        //Id
        ImageID: "Hoofdingang",
        //x Coordinates
        Arrow1CoordsX: "390",
        Arrow2CoordsX: "360",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "220",
        Arrow2CoordsY: "500",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Up",
        Arrow2Direction: "Down",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "Receptie",
        Destination2: "Pad naar Hoofdingang",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "Rekenen",
    }
]
//Tasklist uitleg
//TaskID: waar naar gekeken worden waar de opdracht bij hoort
//TaskQuestion: De vraag die wordt gesteld aan de gebruiker, dit kan ook eventuele tekst zijn om iets aan de gebruiker duidelijk te maken.
//TaskAnswer:
//Completed: als de opdracht deze variable op 'true' heeft staan dan heeft de gebruiker deze opdracht gezien en wordt deze niet nogmaals weergegeven.
var TaskList = [
    {
        TaskID: "Rekenen",
        TaskQuestion: "Reken onderstaand Binair getal om naar Decimaal. <br><br><br><input type='text placeholder='antwoord'  id='RekenInput'><button type='button' onclick='AnwserTask(document.getElementById("+'"'+"RekenInput"+'"'+"), "+'"'+"Rekenen"+'"'+");'>beantwoord vraag</button>",
        TaskCompleted: false,
        TaskHint:"../IMAGES/School/Hint Rekenen.png",
    },
    {
        TaskID: "Toilet",
        TaskQuestion: "Je hebt de toiletten gevonden, gefeliciteerd.",
        TaskCompleted: false,
        TaskHint:"",
    },
    {
        TaskID: "Mees",
        TaskQuestion: "Dit is Mees, hier kun je eten en drinken kopen.",
        TaskCompleted: false,
        TaskHint:"",
    },
]