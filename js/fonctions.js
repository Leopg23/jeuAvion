//*********Les Fonctions ***********************************************//

function deplacerAvion(){
        //- À compléter - Calculer les futures positions de la sorciere
        if (droite) {
            avion.x += avion.vitesse;
        }

        if (gauche) {
            avion.x -= avion.vitesse;
        }

        if (haut) {
            avion.y -= avion.vitesse;
        }

        if (bas) {
            avion.y += avion.vitesse;
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
    oiseau.x -= oiseau.vitesse;
    
    
    
    if(oiseau.x < -oiseau.largeur){
        oiseau.x = leCanvas.width;
        oiseau.y = Math.random() * (leCanvas.height-oiseau.hauteur);
        oiseau.img.src = "images/oiseau" + Number(Math.ceil(3*Math.random())) + ".png";
    }
    ctx.drawImage(oiseau.img, oiseau.x, oiseau.y)
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
    if(seconde >= 10){
    ctx.fillText(minute + ":" + seconde, x, y);
    }
    //pour avoir l'autre 0 si les secondes sont a moins que 10 (2:01 a la place de 2:1)
    if(seconde < 10){
        ctx.fillText(minute + ":0" + seconde,x,y)
    }
    
}

function detecterCollision(rectangle1, rectangle2) {
    if (
        rectangle1.x < rectangle2.x + rectangle2.largeur &&
        rectangle1.x + rectangle1.largeur > rectangle2.x &&
        rectangle1.y < rectangle2.y + rectangle2.hauteur &&
        rectangle1.y + rectangle1.hauteur > rectangle2.y
    ) {
        return true;
    } else {
        return false;
    }
}
