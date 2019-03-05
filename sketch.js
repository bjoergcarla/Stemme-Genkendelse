let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt;
var billede = 0;
var fortniteslyd = new Audio('assets/fortnitelyd.mp3'); //bruger bare html i stedet for p5 fordi det ikke looper 2 gange som p5.sound gør >:(
var drik = new Audio('assets/drik.mp3'); //bruger bare html i stedet for p5 fordi det ikke looper 2 gange som p5.sound gør >:(
var musik = new Audio('assets/musik.mp3');

function setup() {
    hej = loadImage('assets/waving.jpg');
    malthe = loadImage('assets/malthe.jpg');
    nikolaj = loadImage('assets/niko.png');
    sodavand = loadImage('assets/booster.jpg');
    fortnite = loadImage('assets/fortnite.jpg');
    damer = loadImage('assets/damer.jpg');
    kebab = loadImage('assets/kebab.jpg');


    let SpeechRecognition = window.webkitSpeechRecognition ||
        window.mozSpeechRecognition ||
        window.msSpeechRecognition ||
        window.oSpeechRecognition ||
        window.SpeechRecognition;

    cnv = createCanvas(700, 700);
    background('blue');
    txttop = createElement("h6", "lytter for: Hej, Malthe / Malte, Nikolaj, Sodavand, Fortnite, Damer, Kebab.")
        .position(100,10)
        .style("color:white;")
        .show();
    txt = createElement("h5", "lytter")
        .position(20, 300)
        .style("color:black;")
        .hide();
    
    

    resultP = createP("")
        .position(0, 25)
        .parent(txt);
    //Check browser comp
    if (SpeechRecognition !== undefined) {
        btn = createButton("Klik for at aktivere mikrofon")
            .position(150, 500)
            .style("font-size:1em;background-color:#33C3F0;border-color:#33C3F0;border-radius:8px;color:white;cursor:pointer;")
            .mousePressed(function () {
                btn.hide();
                txt.show();
                myRec = new p5.SpeechRec();
                myRec.continuous = true;
                myRec.interimResults = true;
                myRec.onResult = showResult;
                myRec.start();
            });
    }
}

function draw() {  //okay det her er et virkelig dårlig måde at vise billeder baseret på at sidde og tælle billederne fra 1-7 
    if (billede == 1) {
        image(hej, 100, 30, 500, 500);
    } else if (billede == 2) {
        image(malthe, 100, 30, 500, 500);
    } else if (billede == 3) {
        image(nikolaj, 100, 30, 500, 500);
    } else if (billede == 4) {
        image(sodavand, 100, 30, 500, 500);
    } else if (billede == 5) {
        image(fortnite, 100, 30, 500, 500);
    } else if (billede == 6) {
        image(damer, 100, 30, 500, 500);
    }else if (billede == 7) {
        image(kebab, 100, 30, 500, 500);
    }
}

function showResult() { //okay det her er et virkelig dårlig måde at vise billeder baseret på at sidde og tælle billederne fra 1-7 
    if (myRec.resultValue == true) {
        sentence = myRec.resultString;
        resultP.html(sentence);

    if (sentence.includes("Start musik")) {
        musik.play();
        musik.volume = 0.1
    } else if (sentence.includes("Stop musik")) {
        musik.pause();
    }
    if (sentence.includes("op med lyden")) {
        musik.volume = 1
    }

    if (sentence.includes("Hej")) {
            billede = 1;
    }
    else if (sentence.includes("High")) {
            billede = 1;
    }
    if (sentence.includes("Malthe")) {
        billede = 2;
    }
    else if (sentence.includes("Malte")) {
        billede = 2;
    }
    if (sentence.includes("Nikolaj")) {
        billede = 3;
    }
    if (sentence.includes("sodavand")) {
        billede = 4;
        drik.play();
}
   if (sentence.includes("fortnite")) {
                billede = 5;
                fortniteslyd.play();
            }
        }
    if (sentence.includes("damer")) {
        billede = 6;
    }
    if (sentence.includes("kebab")) {
        billede = 7;
    }
}
