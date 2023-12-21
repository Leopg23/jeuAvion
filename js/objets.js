//*********Les variables ***********************************************//
//variable qui donne un nombre au hazard entre 1 et trois pourra etre utilise pour plusieur element de jeu au future
//let random = Number(Math.ceil(3*Math.random()));
let acceleration = false
//variables pour les fleches et les touches wasd
let gauche = false;
let droite = false;
let haut = false;
let bas = false;

//variables pour le timer
let seconde = 0;
let minute = 3
let timerFini = false;
//l'image si le joueur perd
let imgPerdJeu = new Image();
imgPerdJeu.src = "images/imgFin.png";
//*********Les Objets ***********************************************//

let avion = {
    img: new Image(), //image
    urlImage: "images/avion.png", //url de l'image de départ
    x: 0, //Position sur l'axe des x
    y: 0, //Position sur l'axe des y
    vitesse: 10,
    largeur: 150, //Largeur d'une vignette du personnage
    hauteur: 100, //Hauteur d'une vignette du personnage
    indexVignette: 0, //Première vignette
    nbVignettes: 6, //Nombre de vignettes
    sourceX: 0, //Coordonnée x de la vignette à afficher
}


let ciel = {
    img: new Image(), //image
    urlImage: "images/ciel.png", //url de l'image de départ
    x: 0, //Position sur l'axe des x
    y: 0, //Position sur l'axe des y
    largeur: 6000, //Largeur d'une vignette du personnage
}


let oiseau = {
    img: new Image(), //image
    urlImage: "images/oiseau" + Number(Math.ceil(3*Math.random())) + ".png", //url de l'image de départ
    x: 0, //Position sur l'axe des x
    y: 0, //Position sur l'axe des y
    largeur: 75, //Largeur d'une vignette du personnage
    hauteur: 75, //Hauteur d'une vignette du personnage
    vitesse:10,
    indexVignette: 0, //Première vignette
    nbVignettes: 6, //Nombre de vignettes
    sourceX: 0, //Coordonnée x de la vignette à afficher
}

