//Riddles
const riddles = [
    {
        id: 1,
        riddle: "Du går på rødt men stopper på grøndt, hva er jeg?",
        answer: ["vannmelon", "en vannmelon", "melon", "vannmeloner"]
    },
    {
        id: 2,
        riddle: "Jeg hjelper deg fra hode til tå, jo mer jeg jobber jo mindre blir jeg, hva er jeg?",
        answer: ["såpe", "såpe bar", "såper", "en såpe", "en såpe bar", "såpebar", "en såpebar"]
    },
    {
        id: 3,
        riddle: "Jeg kan fly men har ingen vinger, jeg kan gråte men har ingen øyne, hvor enn jeg går mørket følger meg, hva er jeg?",
        answer: ["skyer", "sky", "en sky", "skyene"]
    },
    {
        id: 4,
        riddle: "Hva må være ødelagt før du kan bruke det?",
        answer: ["et egg", "egg", "egget", "eggan", "egga", "negga"]
    },
    {
        id: 5,
        riddle: "Det er et 1 etasje hus hvor alt er gult. Gule vegger, gule dører og gule møbler. Hviken farge er trappa? ",
        answer: ["det er ingen", "det er ikke en trapp", "trappa er ikke der", "null trapp", "er ingen trapp", "ikke trapp", "ingen trapp", "ingen trapper", "det er ingen trapp"]
    },
    {
        id: 6,
        riddle: "En mann som var ute i regnet uten paraply eller hatt, fikk ikke et eneste hårstrå på hodet vått. Hvorfor?",
        answer: ["han var skalla", "hadde ikke hår", "null hår", "skalla", "han har ikke hår", "har ikke hår", "fordi han var skalla", "han er skalla"]
    },
    {
        id: 7,
        riddle: "Hva går opp og ned, men forblir på samme sted?",
        answer: ["en heis", "heis", "heisen", "heiser", "heisene"]
    },
    {
        id: 8,
        riddle: "Hva har en bunn på toppen?",
        answer: ["bein", "beina dine", "beinene dine", "beina", "bena dine"]
    },
    {
        id: 9,
        riddle: "Hva blir større jo mer du tar bort fra det?",
        answer: ["et hull", "hull", "huller", "hullene"]
    },
    {
    
        id: 10,
        riddle: "Hva går rundt hagen uten å bevege seg?",
        answer: ["et gjerdet", "gjerdet", "gjerder", "gjerdene", "gjærder"]
    },
    {
        id: 11,
        riddle: "Hvor mye har 10 kroner vært?",
        answer: ["10", "10kr", "10 kr", "10 kroner", "10kroner", "ti kroner", "ti kr", "tikr", "tikroner"]
    },
    {
        id: 12,
        riddle: "Du kan kaste meg fra den høyeste byggning, men det kommer til å gå bra med meg, hva er jeg?",
        answer: ["et papir", "emo", "papir", "en emo", "papirer", "mange papirer", "papirene", "parpira"]
    },
    {
        id: 13,
        riddle: "Du kan røre meg, men jeg kan ikke røre deg tilbake. Du kan se meg, men jeg kan ikke se deg tilbake, hva er jeg?",
        answer: ["et speil", "speilene", "det er et speil", "alle speilene", "de speilene", "speil"]
    },
    {
        id: 14,
        riddle: "Jeg blir skarpere hvor mere du bruker meg, hva er jeg?",
        answer: ["en hjerne", "hjerne", "hjerner", "det er en hjerne", "hjerna"]
    },
    {
        id: 15,
        riddle: "Jeg kan være så stor som en elefant, men veie ingenting. Hva er jeg?",
        answer: ["en skygge", "skygge", "skygger", "skygga", "det er en skygge", "skyggene"]
    },
    {
        id: 16,
        riddle: "Du kan kaste meg vekk, men jeg kommer alltid tilbake, hva er jeg?",
        answer: ["en boomerang", "boomerang", "boomeranger", "boomerangan", "det er en boomerang"]
    },
    {
        id: 17,
        riddle: "Hva tillhører deg, men blir mere brukt av andre?",
        answer: ["navnet ditt", "navn", "navnet", "ditt navn", "navnet mitt"]
    },
    {
        id: 18,
        riddle: "Hvilket ord i ordboken er skrevet feil?",
        answer: ["feil"]
    },
    {
        id: 19,
        riddle: "Hva er på slutten av en 'reinbue'?",
        answer: ["bokstaven e", "e", "bokstav e"]
    },
    {
        id: 20,
        riddle: "Hva mister du med en gang du deler det?",
        answer: ["en hemlighet", "en hemligheten", "hemligheten", "hemlighet", "jomfrudommen"]
    },
    {
        id: 21,
        riddle: "Hva veier mindre en et fjær, men vansklig å holde for 2 minutter?",
        answer: ["pusten", "puste", "en pust", "pustane", "det er pusten"]
    },
    {
        id: 22,
        riddle: "Hva kan du holde i din høyre hånd, men ikke i din venstre hånd?",
        answer: ["venstre hånda", "din venstre hånd", "venstre hånd", "venstre hånda", "venstre hand", "venstre hend", "tauet som ble brukt av en emo for å drepe seg selv"]
    },
    {
        id: 23,
        riddle: "Hva kan du putte i en bøtte for å få den til å veie mindre?",
        answer: ["et hull", "hull", "hulla", "putt et hull der", "hull der"]
    },
    {
        id: 24,
        riddle: "Hva er det lengste ordet i ordboken?",
        answer: ["smile(det er mil i midten)", "smile", "smilet", "smila", "smilet", "et smil", "smilene", "smiler"]
    },
    {
        id: 25,
        riddle: "Hvis du kaster en rød stein i det blå havet, hva kommer det til å bli?",
        answer: ["våt", "det blir våt", "det er våt", "det skal bli våt", "blir våt"]
    },
    
]

//Start variables
const riddlePlacement = document.querySelector("#gåte");
const input = document.querySelector("#gåte-input");
const skip = document.querySelector("#skip");
const sjekk = document.querySelector("#sjekk");

const right = document.querySelector(".right");
const wrong = document.querySelector(".wrong");
const wrong_rightText = document.querySelector("#wrong");

let poeng = 0;
const points = document.querySelector("#poeng");
const resetPoints = document.querySelector("#reset-points");

const rightAudio = new Audio("./sound/right.mp3");
const wrongAudio = new Audio("./sound/wrong.mp3");
const aaaaa = new Audio("./sound/AAaaaahh.mp3");

let oneMinuteRiddles = [];

let currentRiddle;
let currentAnswer;


//Event listeners
input.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "Enter") {
        check();
    }
});
sjekk.addEventListener("click", check);
skip.addEventListener("click", skipIt);
resetPoints.addEventListener("click", ()=>{
    poeng = 0;
    oneMinuteRiddles = [];
    placePoints();
})

//Functions:
function check() {
    let value = input.value;
    value = value.toLowerCase();
    input.value = "";
    console.log(value + "\n" + currentAnswer);
    if (currentAnswer.includes(value)){
        console.log("right");
        rightAudio.play();
        poeng++;
        rright()
        placePoints(); 
        skipIt(); //Får en ny gåte og plaserer den
    } else {
        console.log("wrong");
        poeng = poeng - 2;
        placePoints();
        wrongAudio.play();
        wwrong()
        placePoints(); //Displayer 
        skipIt(); //Får en ny gåte og plaserer den
    }
}
function placePoints(){
    points.innerHTML = poeng;
}
function skipIt() {
    getRiddle();
    placeRiddle();
}
function getRiddle() {
    const riddlesLength = riddles.length;
    
    let randomriddle;

    let i = 1;
    while (i === 1){
        randomriddle = riddles[Math.floor(Math.random()*riddlesLength)]
        if(!oneMinuteRiddles.includes(randomriddle)){
            oneMinuteRiddles.push(randomriddle);
            const index = oneMinuteRiddles.length - 1;
            setTimeout( async ()=>{
                oneMinuteRiddles.pop(index, 1);
            }, 60000)
            currentAnswer = randomriddle.answer;
            currentRiddle = randomriddle.riddle;
            i = 2;
        } 
    }
}

function placeRiddle(){
    riddlePlacement.innerHTML = currentRiddle;
}

async function wwrong(){
    wrong.classList.remove('hidden');
    wrong_rightText.innerHTML = currentAnswer[0];
    setTimeout(async function(){
    wrong.classList.add('hidden');
    }, 2500)
}

async function rright(){
    right.classList.remove(`hidden`);
    setTimeout(async function(){
    right.classList.add(`hidden`);
    }, 1500)
}


getRiddle();
placeRiddle();