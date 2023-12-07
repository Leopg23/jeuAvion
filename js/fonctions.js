//*********Les Fonctions ***********************************************//

function deplacerAvion(){
        //- À compléter - Calculer les futures positions de la sorciere
        if (droite) {
            avion.x += 7;
        }

        if (gauche) {
            avion.x -= 7;
        }

        if (haut) {
            avion.y -= 7;
        }

        if (bas) {
            avion.y += 7;
        }
        // si l'avion sortirai des limites du canvas
        //limite droite
        if (avion.x > leCanvas.width - avion.largeur){
            avion.x = leCanvas.width - avion.largeur;
        }
        //limite gauche
        if (avion.x <= 0){
            avion.x = 0;
        }
        //limite du bas
        if (avion.y > leCanvas.height - avion.hauteur){
        avion.y = leCanvas.height - avion.hauteur;
        }
        //limite du haut
        if (avion.y <= 0){
            avion.y = 0;
        }
        
        //dessiner l'avion
        ctx.drawImage(avion.img, avion.x, avion.y);
}

function deplacerOiseau(){

}

function deplacerCiel(){
    //le ciel ce deplace a la vitesse exacte ou ca lui prendra 3 minutes avant d'arriver au bout de l'image
    ciel.x -= 28/60;

    
    ctx.drawImage(ciel.img, ciel.x, ciel.y);
    
}

function presserTouche(event) {
    console.log("presserTouche", event.keyCode);
    //Enregistrer si une touche gauche/droite ou A/D est pressée
    if (event.keyCode == 39 || event.keyCode == 68) {
        //flèche droite - ou D
        droite = true;
    }

    if (event.keyCode == 37 || event.keyCode == 65) {
        //flèche gauche - ou A
        gauche = true;
    }

    //Enregistrer si une touche haut/bas ou W/S est pressée
    if (event.keyCode == 38 || event.keyCode == 87) {
        //flèche haut - ou W
        haut = true;    
    }

    if (event.keyCode == 40 || event.keyCode == 83) {
        //flèche bas - ou S
        bas = true;
    }
}

// Détecte quelles touches sont relâchées
function relacherTouche(event) {
    //console.log("relacherTouche", event.keyCode);

    //Enregistrer si une touche gauche/droite ou A/D est relâchée
    if (event.keyCode == 39 || event.keyCode == 68) {
        //flèche droite - ou D
        droite = false;
    }

    if (event.keyCode == 37 || event.keyCode == 65) {
        //flèche gauche - ou A
        gauche = false;
    }

    //Enregistrer si une touche haut/bas ou W/S est relâchée
    if (event.keyCode == 38 || event.keyCode == 87) {
        //flèche haut - ou W
        haut = false;
    }

    if (event.keyCode == 40 || event.keyCode == 83) {
        //flèche bas - ou S
        bas = false;
    }
}

function dessinerLeTimer(){
    //Styles du texte
    ctx.font = "italic 50px Arial";
    ctx.textBaseline = "bottom";
    ctx.fillStyle = "#000000";
    ctx.textAlign = "center";
    let x = leCanvas.width / 2;
    let y = 100;

    //Dessin du texte
    if(timer >= 10){
    ctx.fillText(minute + ":" + timer, x, y);
    }
    //pour avoir l'autre 0 si les secondes sont a moins que 10 (2:01 a la place de 2:1)
    if(timer < 10){
        ctx.fillText(minute + ":0" + timer,x,y)
    }
    
}
