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
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "Pad naar Hoofdingang",
        Destination2: "Zijweg aan Hoofdweg",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: null,
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
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "Hoofdweg",
        Destination2: "Zij pad",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: null,
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
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "FietsenStalling",
        Destination2: "Receptie",
        Destination3: "Zijweg aan Hoofdweg",
        Destination4: null,
        //tasks
        Task: null,
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
        Task: null,
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
        Task: null,
    },
    {
        //Id
        ImageID: "Receptie",
        //x Coordinates
        Arrow1CoordsX: "10",
        Arrow2CoordsX: "575",
        Arrow3CoordsX: "360",
        Arrow4CoordsX: "700",
        //y coordinates
        Arrow1CoordsY: "375",
        Arrow2CoordsY: "280",
        Arrow3CoordsY: "500",
        Arrow4CoordsY: "450",
        //Arrow Direction
        Arrow1Direction: "Left",
        Arrow2Direction: "Up",
        Arrow3Direction: "Down",
        Arrow4Direction: "Right",
        //Destinations
        Destination1: "IT helpdesk",
        Destination2: "Zij pad",
        Destination3: "Hoofdingang",
        Destination4: "Gang van Receptie naar Fietsenstalling",
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "IT helpdesk",
        //x Coordinates
        Arrow1CoordsX: "360",
        Arrow2CoordsX: "-50",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "500",
        Arrow2CoordsY: "-50",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Down",
        Arrow2Direction: "Down",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "Receptie",
        Destination2: null,
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "IT helpdesk",
    },
    {
        //Id
        ImageID: "FietsenStalling",
        //x Coordinates
        Arrow1CoordsX: "480",
        Arrow2CoordsX: "360",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "225",
        Arrow2CoordsY: "500",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Up",
        Arrow2Direction: "Down",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "gang met Toiletten",
        Destination2: "Zij pad",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "gang met Toiletten",
        //x Coordinates
        Arrow1CoordsX: "380",
        Arrow2CoordsX: "240",
        Arrow3CoordsX: "360",
        Arrow4CoordsX: "680",
        //y coordinates
        Arrow1CoordsY: "275",
        Arrow2CoordsY: "300",
        Arrow3CoordsY: "500",
        Arrow4CoordsY: "500",
        //Arrow Direction
        Arrow1Direction: "Up",
        Arrow2Direction: "Left",
        Arrow3Direction: "Down",
        Arrow4Direction: "Right",
        //Destinations
        Destination1: "Kantine",
        Destination2: "Toilet",
        Destination3: "FietsenStalling",
        Destination4: "Gang van Receptie naar Fietsenstalling",
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Gang van Receptie naar Fietsenstalling",
        //x Coordinates
        Arrow1CoordsX: "380",
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
        Destination1: "gang met Toiletten",
        Destination2: "Receptie",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Toilet",
        //x Coordinates
        Arrow1CoordsX: "360",
        Arrow2CoordsX: "-50",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "500",
        Arrow2CoordsY: "-50",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Down",
        Arrow2Direction: "Down",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "gang met Toiletten",
        Destination2: null,
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "Toilet",
    },
    {
        //Id
        ImageID: "Kantine",
        //x Coordinates
        Arrow1CoordsX: "210",
        Arrow2CoordsX: "20",
        Arrow3CoordsX: "360",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "200",
        Arrow2CoordsY: "290",
        Arrow3CoordsY: "500",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Up",
        Arrow2Direction: "Left",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "B Toren",
        Destination2: "Mees",
        Destination3: "gang met Toiletten",
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Mees",
        //x Coordinates
        Arrow1CoordsX: "700",
        Arrow2CoordsX: "20",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "290",
        Arrow2CoordsY: "290",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Right",
        Arrow2Direction: "Left",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "B Toren",
        Destination2: "Kantine",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "Mees",
    },
    {
        //Id
        ImageID: "B Toren",
        //x Coordinates
        Arrow1CoordsX: "600",
        Arrow2CoordsX: "240",
        Arrow3CoordsX: "360",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "10",
        Arrow2CoordsY: "290",
        Arrow3CoordsY: "500",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Up",
        Arrow2Direction: "Up",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "B Toren Etage 1",
        Destination2: "Lokaal B0.01",
        Destination3: "Kantine",
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "B Toren Etage 1",
        //x Coordinates
        Arrow1CoordsX: "725",
        Arrow2CoordsX: "260",
        Arrow3CoordsX: "360",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "250",
        Arrow2CoordsY: "220",
        Arrow3CoordsY: "500",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Up",
        Arrow2Direction: "Left",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "B Toren Etage 2",
        Destination2: "Gang naar docenten kamer",
        Destination3: "B Toren",
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Gang naar docenten kamer",
        //x Coordinates
        Arrow1CoordsX: "230",
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
        Destination1: "Docenten Kamer",
        Destination2: "B Toren Etage 1",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Docenten Kamer",
        //x Coordinates
        Arrow1CoordsX: "360",
        Arrow2CoordsX: "-50",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "500",
        Arrow2CoordsY: "-50",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Down",
        Arrow2Direction: "Down",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "Gang naar docenten kamer",
        Destination2: null,
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "Docenten Kamer",
    },
    {
        //Id
        ImageID: "B Toren Etage 2",
        //x Coordinates
        Arrow1CoordsX: "120",
        Arrow2CoordsX: "120",
        Arrow3CoordsX: "360",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "125",
        Arrow2CoordsY: "175",
        Arrow3CoordsY: "500",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Left",
        Arrow2Direction: "Right",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "Lokaal B2.08",
        Destination2: "Kluisjes Etage 2",
        Destination3: "B Toren Etage 1",
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Lokaal B2.08",
        //x Coordinates
        Arrow1CoordsX: "360",
        Arrow2CoordsX: "-50",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "500",
        Arrow2CoordsY: "-50",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Down",
        Arrow2Direction: "Down",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "B Toren Etage 2",
        Destination2: null,
        Destination3: null,
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Kluisjes Etage 2",
        //x Coordinates
        Arrow1CoordsX: "360",
        Arrow2CoordsX: "-50",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "500",
        Arrow2CoordsY: "-50",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Down",
        Arrow2Direction: "Down",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "B Toren Etage 2",
        Destination2: null,
        Destination3: null,
        Destination4: null,
        //tasks
        Task: null,
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
        TaskQuestion: "Reken onderstaand Binair getal om naar Decimaal. <br><br>11010101<br><br><input type='text placeholder='antwoord'  id='RekenInput'><button type='button' onclick='AnwserTask(document.getElementById("+'"'+"RekenInput"+'"'+"), "+'"'+"Rekenen"+'"'+");'>beantwoord vraag</button>",
        TaskAnswer: 213,
        TaskCompleted: false,
        TaskHint:"../IMAGES/School/Hint Rekenen.png",
    },
    {
        TaskID: "Toilet",
        TaskQuestion: "Je hebt de toiletten gevonden, gefeliciteerd.",
        TaskCompleted: false,
        TaskHint: null,
    },
    {
        TaskID: "Mees",
        TaskQuestion: "Dit is Mees, hier kun je eten en drinken kopen.",
        TaskCompleted: false,
        TaskHint: null,
    },
]