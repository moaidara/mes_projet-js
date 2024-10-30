//une fonction pour fermer la boite a dialog lorsque l'on click sur ok 
function ok(){
    document.getElementById('dialog-box').classList.remove('d-flex');
    document.getElementById('dialog-box').classList.add('d-none');
}
// Attendre que le contenu du document soit complètement chargé avant d'exécuter le script
document.addEventListener('DOMContentLoaded', function(){
    
    
// Initialiser une variable pour stocker un nombre secret aléatoire entre 0 et 100
    
    let nombre_secret = Math.random().toFixed(2) *100;

// Initialiser une variable pour compter le nombre d'essais effectués  
    let essaie=1;
  
// Ajouter un écouteur d'événement pour détecter les clics sur le bouton "valider"

    document.getElementById('valider').addEventListener('click', function(){
// Déclarer une variable pour stocker le nombre saisi par l'utilisateur     
        let variable; 

// Désactiver le bouton "reessayer" lors de la première tentative     
        document.getElementById('reessayer').disabled = true;
// Récupérer la valeur saisie par l'utilisateur et la convertir en entier
        variable = parseInt(document.getElementById("nombre").value);
// Si la valeur de l'utilisateur est supérieure au nombre secret  
        if(variable > nombre_secret){
 // Afficher la boîte de dialogue pour donner un retour visuel
            document.getElementById('dialog-box').classList.remove('d-none');
            document.getElementById('dialog-box').classList.add('d-flex');
// Indiquer que le nombre choisi est trop élevé         
            document.getElementById('indication').innerHTML = "Le nombre choisie est superieur!"; 
// Afficher le nombre d'essais restants  
            document.getElementById('Attention').innerHTML = "il ne vous reste que " + (5-essaie) + (" essai");
        }else if(variable === nombre_secret){
            document.getElementById('dialog-box').classList.remove('d-none');
            document.getElementById('dialog-box').classList.add('d-flex');
            document.getElementById('indication').innerHTML = "vous avez gagniez";
            document.getElementById('Attention').innerHTML = "";
            document.getElementById('valider').disabled = true;
            document.getElementById('reessayer').disabled = false;
        }else if(variable < nombre_secret){
            document.getElementById('dialog-box').classList.remove('d-none');
            document.getElementById('dialog-box').classList.add('d-flex');
            document.getElementById('indication').innerHTML = "Le nombre choisie est inferieur!";
            document.getElementById('Attention').innerHTML = "il ne vous reste que " + (5-essaie) + (" essai");
        }
          
// Incrémenter le nombre d'essais après chaque tentative 
        essaie++

        if(essaie>5){
// Désactiver le bouton "valider" pour bloquer de nouvelles tentatives si le nombre d'essaie est superieur a 5 
            document.getElementById('valider').disabled = true;
//activer le boutton reessayer pour relancer le jeu
            document.getElementById('reessayer').disabled = false;
        }
//un ecouteur d'evenement pour recommencer le jeu si le boutton reessayer est clicker
        document.getElementById('reessayer').addEventListener('click', function(){
            location.reload();
        });
        
    });
    console.log(nombre_secret);

})



