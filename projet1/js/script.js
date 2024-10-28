function ok(){
    document.getElementById('dialog-box').classList.remove('d-flex');
    document.getElementById('dialog-box').classList.add('d-none');
}

document.addEventListener('DOMContentLoaded', function(){
    
    
    
    let nombre_secret = Math.random().toFixed(2) *100;
    let essaie=1;
    document.getElementById('valider').addEventListener('click', function(){
     
        let variable; 
        document.getElementById('reessayer').disabled = true;
        
        variable = parseInt(document.getElementById("nombre").value);
    
        if(variable > nombre_secret){
            document.getElementById('dialog-box').classList.remove('d-none');
            document.getElementById('dialog-box').classList.add('d-flex');
            document.getElementById('indication').innerHTML = "Le nombre choisie est superieur!"; 
            document.getElementById('Attention').innerHTML = "il ne vous reste que " + (5-essaie) + (" essai");
        }else if(variable === nombre_secret){
            document.getElementById('dialog-box').classList.remove('d-none');
            document.getElementById('dialog-box').classList.add('d-flex');
            document.getElementById('indication').innerHTML = "vous avez gagniez";
            document.getElementById('valider').disabled = true;
        }else if(variable < nombre_secret){
            document.getElementById('dialog-box').classList.remove('d-none');
            document.getElementById('dialog-box').classList.add('d-flex');
            document.getElementById('indication').innerHTML = "Le nombre choisie est inferieur!";
            document.getElementById('Attention').innerHTML = "il ne vous reste que " + (5-essaie) + (" essai");
        }  
        essaie++
        if(essaie>5){
            document.getElementById('valider').disabled = true;
            document.getElementById('reessayer').disabled = false;
        }
        document.getElementById('reessayer').addEventListener('click', function(){
            location.reload();
        });
        
    });
    console.log(nombre_secret);

})



