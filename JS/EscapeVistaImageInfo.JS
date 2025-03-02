//List explanation
//X coordinates: the X coordinates of the corresponding arrow
//y Coordinates: the Y coordinates of the corresponding arrow
//Arrow direction: the direction the arrow points
//Destinations: where you go to when you click the arrow
//tasks: any tasks the destination has to give the user

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
        Destination1: "B-toren_etage_1",
        Destination2: "Onder aan Trap B Toren",
        Destination3: "Kantine",
        Destination4: null,
        //tasks
        Task: "B Toren",
    },
    {
        //Id
        ImageID: "Onder aan Trap B Toren",
        //x Coordinates
        Arrow1CoordsX: "360",
        Arrow2CoordsX: "130",
        Arrow3CoordsX: "550",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "500",
        Arrow2CoordsY: "250",
        Arrow3CoordsY: "250",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Down",
        Arrow2Direction: "Up",
        Arrow3Direction: "Up",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "B Toren",
        Destination2: "Lokaal B0.02",
        Destination3: "Lokaal B0.01",
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Lokaal B0.01",
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
        Destination1: "Onder aan Trap B Toren",
        Destination2: null,
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "Rekenen",
    },
    {
        //Id
        ImageID: "Lokaal B0.02",
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
        Destination1: "Onder aan Trap B Toren",
        Destination2: null,
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "CCCCC",
    },
    {
        //Id
        ImageID: "B-toren_etage_1",
        //x Coordinates
        Arrow1CoordsX: "725",
        Arrow2CoordsX: "260",
        Arrow3CoordsX: "360",
        Arrow4CoordsX: "70",
        //y coordinates
        Arrow1CoordsY: "250",
        Arrow2CoordsY: "220",
        Arrow3CoordsY: "500",
        Arrow4CoordsY: "250",
        //Arrow Direction
        Arrow1Direction: "Up",
        Arrow2Direction: "Left",
        Arrow3Direction: "Down",
        Arrow4Direction: "Left",
        //Destinations
        Destination1: "B Toren Etage 2",
        Destination2: "Gang naar docenten kamer",
        Destination3: "B Toren",
        Destination4: "Lokaal B1.17",
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Lokaal B1.17",
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
        Destination1: "B-toren_etage_1",
        Destination2: null,
        Destination3: null,
        Destination4: null,
        //tasks
        Task: "Database",
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
        Destination2: "B-toren_etage_1",
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
        Arrow4CoordsX: "475",
        //y coordinates
        Arrow1CoordsY: "125",
        Arrow2CoordsY: "175",
        Arrow3CoordsY: "500",
        Arrow4CoordsY: "200",
        //Arrow Direction
        Arrow1Direction: "Left",
        Arrow2Direction: "Right",
        Arrow3Direction: "Down",
        Arrow4Direction: "Up",
        //Destinations
        Destination1: "Gang Etage 2",
        Destination2: "Kluisjes Etage 2",
        Destination3: "B-toren_etage_1",
        Destination4: "Lokaal B2.01",
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "Lokaal B2.01",
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
        Task: "Hard- en Software",
    },
    {
        //Id
        ImageID: "Gang Etage 2",
        //x Coordinates
        Arrow1CoordsX: "360",
        Arrow2CoordsX: "70",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "500",
        Arrow2CoordsY: "250",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Down",
        Arrow2Direction: "Left",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "B Toren Etage 2",
        Destination2: "Lokaal B2.08",
        Destination3: null,
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
        Task: "AMO",
    },
    {
        //Id
        ImageID: "Kluisjes Etage 2",
        //x Coordinates
        Arrow1CoordsX: "360",
        Arrow2CoordsX: "350",
        Arrow3CoordsX: "-50",
        Arrow4CoordsX: "-50",
        //y coordinates
        Arrow1CoordsY: "500",
        Arrow2CoordsY: "50",
        Arrow3CoordsY: "-50",
        Arrow4CoordsY: "-50",
        //Arrow Direction
        Arrow1Direction: "Down",
        Arrow2Direction: "Down",
        Arrow3Direction: "Down",
        Arrow4Direction: "Down",
        //Destinations
        Destination1: "B Toren Etage 2",
        Destination2: "VistaCollege",
        Destination3: null,
        Destination4: null,
        //tasks
        Task: null,
    },
    {
        //Id
        ImageID: "VistaCollege",
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
//Tasklist explanation
//TaskID: ID of the task
//TaskQuestion: The question given to the student, if the destination is simply a location, it's just text
//TaskAnswer: the multiple choice answers given to the user
//Completed: whether or not the task has been answered of the locaction is visited.
var TaskList = [
    {
        TaskID: "Rekenen",
        TaskQuestion: "<h1>Rekenen</h1><br><br>Reken onderstaand Binair getal om naar Decimaal.<br><br>11010101",
        TaskAnswers: {
            A: "213",
            B: "220",
            C: "185",
            D: "253"
        },
        TaskCorrectAnswer: "A",
        TaskCompleted: false,
        TaskHint:"../IMAGES/School/Hint Rekenen.png",
    },
    {
        TaskID: "Hard- en Software",
        TaskQuestion: "<h1>Hard- en Software</h1><br><br>Wat is het verschil tussen Hardware en Software?",
        TaskAnswers: {
            A: "Hardware is gereedschap en Software is windows OS",
            B: "Hardware is de CPU, GPU, en processor van de PC en Software is het toetsenbord, beeldscherm en de luidsprekers van de PC.",
            C: "Hardware is alles wat je kunt aan raken van een PC en software is alles van programma en applicaties die op de pc staan.",
            D: "Hardware is de de bekabeling van de computer en Software is de signaalen waar mee je de computer aanstuurd"
        },
        TaskCorrectAnswer: "C",
        TaskCompleted: false,
        TaskHint:"",
    },
    {
        TaskID: "Database",
        TaskQuestion: "<h1>Database</h1><br><br>Wat is het verschil tussen een Primary Key en een Foreign Key?",
        TaskAnswers: {
            A: "Een Primary key is nodig om in de database te komen en een Foreign key is nodig voor iedere tabel in een database",
            B: "Een Primary key is uniek voor iedere tabel en een Foreign Key legt een link vast tussen tabellen.",
            C: "Een Primary key is een unieke key voor iedere tabel en een Foreign key is de back-up als de Priamry Key niet werkt.",
            D: "Een Primary key wordt gebruikt om een tabel te identificeren en een Foreign key is om een individuele record binnen de tabel te indentificeren."
        },
        TaskCorrectAnswer: "B",
        TaskCompleted: false,
        TaskHint:"",
    },
    {
        TaskID: "AMO",
        TaskQuestion: "<h1>AMO</h1><br><br>Waar staat de afkorting HTML voor?",
        TaskAnswers: {
            A: "Hyperlinks and Text Markup Language",
            B: "Hyper Type Machine Language",
            C: "Hypertext Meta-Language",
            D: "Hypertext Markup Language"
        },
        TaskCorrectAnswer: "D",
        TaskCompleted: false,
        TaskHint:"",
    },
    {
        TaskID: "CCCCC",
        TaskQuestion: "<h1>CCCCC</h1><br><br>Waar staat de afkorting CCCCC voor?",
        TaskAnswers: {
            A: "Composing Clean Coders Code of Conduct",
            B: "Comments, Code Conventions, Clean Coding ",
            C: "Copy, Corrupt, Copyright, Circulate, Control",
            D: "Cascade, Code, Copy, Create, "
        },
        TaskCorrectAnswer: "B",
        TaskCompleted: false,
        TaskHint:"",
    },
    {
        TaskID: "Toilet",
        TaskQuestion: "Je hebt de toiletten gevonden, gefeliciteerd.",
        TaskAnswers: null,
        TaskCorrectAnswer: null,
        TaskCompleted: false,
        TaskHint: null,
    },
    {
        TaskID: "Mees",
        TaskQuestion: "Dit is Mees, hier kun je eten en drinken kopen.",
        TaskAnswers: null,
        TaskCorrectAnswer: null,
        TaskCompleted: false,
        TaskHint: null,
    },
    {
        TaskID: "IT helpdesk",
        TaskQuestion: "Hier bij de IT helpdesk kun je terecht komen als je ICT problemen hebt met je apparatuur.",
        TaskAnswers: null,
        TaskCorrectAnswer: null,
        TaskCompleted: false,
        TaskHint: null,
    },
    {
        TaskID: "Docenten Kamer",
        TaskQuestion: "De docenten kamer, de eerste locatie waar je zult gaan kijken om een docent te vinden",
        TaskAnswers: null,
        TaskCorrectAnswer: null,
        TaskCompleted: false,
        TaskHint: null,
    },
    {
        TaskID: "B Toren",
        TaskQuestion: "In de B toren zul je de meeste tijd doorbrengen, want dit is de toren die gebruikt wordt door ICT opleidingen.",
        TaskAnswers: null,
        TaskCorrectAnswer: null,
        TaskCompleted: false,
        TaskHint: null,
    }
]