let words = [];
let sentence = "";
let resultP;
let leftDiv;
let counter;
let cnv, myRec, btn, txt;
var billede = 0;

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

    cnv = createCanvas(400, 600);
    background('cyan');
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
            .position(40, 200)
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

function draw() {
    if (billede == 1) {
        image(hej, 0, 0, 400, 300);
    } else if (billede == 2) {
        image(malthe, 0, 0, 400, 300);
    } else if (billede == 3) {
        image(nikolaj, 0, 0, 400, 300);
    } else if (billede == 4) {
        image(sodavand, 0, 0, 400, 300);
    } else if (billede == 5) {
        image(fortnite, 0, 0, 400, 300);
    } else if (billede == 6) {
        image(damer, 0, 0, 400, 300);
    }else if (billede == 7) {
        image(kebab, 0, 0, 400, 300);
    }
}

function showResult() {
    if (myRec.resultValue == true) {
        sentence = myRec.resultString;
        resultP.html(sentence);

        if (sentence.includes("Hej")) {
            billede = 1;
        }
    }
    if (sentence.includes("Malthe")) {
        billede = 2;
    }
    if (sentence.includes("Nikolaj")) {
        billede = 3;
    }
    if (sentence.includes("sodavand")) {
        billede = 4;
    }
    if (sentence.includes("fortnite")) {
        billede = 5;
    }
    if (sentence.includes("damer")) {
        billede = 6;
    }
    if (sentence.includes("kebab")) {
        billede = 7;
    }
}