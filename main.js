// Pour cibler un élément html, on va mettre  = document.querySelector
let calcul = document.querySelector("#calcul"); //# Dièse, c'est quand on cible un id 
// un point (.) quand c'est une classe
let reponse = document.querySelector("#reponse");
let button = document.querySelector("#valider");
let score = document.querySelector("#score");
let timer = document.querySelector("#timer");


let temps = 30;
let nombres = [];
let points = 0; //0 parce qu'il commence à 0
// on l'a mis dans une variable (let interval) parce qu'on va intéragir avec pour stopper ça (le tmps)
let interval; 

displayScore();
generateNumbers();

displayTime();
generateTime(); 

console.log(nombres);

button.addEventListener("click",validation); 
//on veut dire par là que qund on click sur Valider, il execute la fct valider

function validation() {
   reponse.classList = [];
    // console.log(nombres[0]  *  nombres[1]); //ce qui est attendu 
         
    // console.log(reponse.value); //reponse.value sera ce que l'utilisateur a rentré

    if(nombres[0]  *  nombres[1] == reponse.value){
        console.log("Vrai");
        reponse.classList.add("vert");
        points++;
        displayScore(); //pour afficher notre score, il faut faire appel à notre fonction
        // Autre façon de l'écrire : redéfinir ma variable : points = points + 1 
        generateNumbers() //regénérer des nmbres aléatoires après avoir fait rentrer la réponse
    }
    else {
        console.log("faux");
        reponse.classList.add("rouge");
    }
    reponse.value = ""; //on a réaffecté la réponse pr vider le champ où l'utilisateur a saisi sa rép.
    //on met ça à la fin pour éviter que ça nous dise que c'est faux 
}

// la fonction va générer deux nmbres aléatoires
//là on veut deux nombres, c'est pour ça qu'on fait deux tours 
function generateNumbers() {
    nombres = []; 
    //on met dans notre genertenumbers un nv tableau vide afin qu'il supprime les valeurs d'avant
    for (let i=2; i>0; i--){
        
        nombres.push(Math.round(Math. random()*8)+2);  
        // le math.random... insérer ds le tabl nmbre, deux nvs nombres
        // cette fct crée un nmbre aléatoire entre 0 et 1. mais nous on veut un nmbre entre 1 et 50
        //round c'est our avoir l'arrondi (psk de base on a des chiffres avec virgule)
    } 
    calcul.innerHTML = nombres[0] + " x " + nombres[1];
}

//on a besoin d'une nvlle fonction qui remet à jour le score :

function displayScore() {
    score.innerHTML = points; 
}

function displayTime() {
    timer.innerHTML = temps;
}

function generateTime() {
    interval = setInterval(() => {
        temps--;
        displayTime();
        if(temps<= 0) {
            endGame();
        }
    }, 1000);
    // 1000 psk c'est en millisecondes et qu'on veut 1 sec
}

function endGame() {
    clearInterval(interval)  //permet de stopper le timer
    alert("Bravo ! Votre score est de " + points + " points !");
    points=0;
    temps=30;
    displayScore();
    generateNumbers();
    displayTime();
    generateTime(); 
}
