//*********Les variables ***********************************************//
//variable qui donne un nombre au hazard entre 1 et trois pourra etre utilise pour plusieur element de jeu au future
//let random = Number(Math.ceil(3*Math.random()));

//variable pour l'acceleration des oiseaux
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

//l'image si le joueur gagne
let imgGagneJeu = new Image();
imgGagneJeu.src = "images/imgGagne.png"

//variable pour les vies. le joueur commence avec trois vies
let nombreDeVies = 3;
//les sons et musique
//son quand il gagne de la vie
let sonVie = new Audio ("sons/sonVie.mp3");
let sonCollision = new Audio ("sons/sonCollision.mp3");
let sonPerd = new Audio ("sons/sonPerd.mp3");
let backgroundMusic = new Audio ("sons/backgroundMusic.mp3");
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
    nbVignettes: 4, //Nombre de vignettes
    sourceX: 0, //Coordonnée x de la vignette à afficher
}


let ciel = {
    img: new Image(), //image
    urlImage: "images/ciel.png", //url de l'image de départ
    x: 0, //Position sur l'axe des x
    y: 0, //Position sur l'axe des y
    largeur: 6000, //Largeur d'une vignette du personnage
    vitesse: 0.5
}


let oiseau1 = {
    img: new Image(), //image
    urlImage: "images/oiseau" + Number(Math.ceil(3*Math.random())) + ".png", //url de l'image de départ
    x: 0, //Position sur l'axe des x
    y: 0, //Position sur l'axe des y
    largeur: 75, //Largeur d'une vignette du personnage
    hauteur: 75, //Hauteur d'une vignette du personnage
    vitesse: 10 + Number(Math.ceil(3*Math.random()) - 3), // determine la vitesse de loiseau qui peut varier entre 7 et 10
    
}

let oiseau2 = {
    img: new Image(), //image
    urlImage: "images/oiseau" + Number(Math.ceil(3*Math.random())) + ".png", //url de l'image de départ
    x: 0, //Position sur l'axe des x
    y: 0, //Position sur l'axe des y
    largeur: 75, //Largeur d'une vignette du personnage
    hauteur: 75, //Hauteur d'une vignette du personnage
    vitesse: 10 + Number(Math.ceil(3*Math.random()) - 3), // determine la vitesse de loiseau qui peut varier entre 7 et 10

}

let vie = {
    img: new Image(), //image
    urlImage: "images/vie.png", //url de l'image de départ
    x: 0, //Position sur l'axe des x
    y: 0, //Position sur l'axe des y
    largeur: 25, //Largeur d'une vignette du personnage
    hauteur: 25, //Hauteur d'une vignette du personnage
    vitesse: 10 + Number(Math.ceil(3*Math.random()) - 3), // determine la vitesse de loiseau qui peut varier entre 7 et 10

}

let feu = {
    img: new Image(), //image
    urlImage: "images/animFeu.png", //url de l'image de départ
    x: 0, //Position sur l'axe des x
    y: 0, //Position sur l'axe des y
    largeur: 48, //Largeur d'une vignette du personnage
    hauteur: 64, //Hauteur d'une vignette du personnage
    indexVignette: 0, //Première vignette
    nbVignettes: 5, //Nombre de vignettes
    sourceX: 0, //Coordonnée x de la vignette à afficher
}
