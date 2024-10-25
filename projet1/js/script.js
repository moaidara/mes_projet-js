document.addEventListener('DOMContentLoaded', function(){
    
    
    
    let nombre_secret = 5;

    document.getElementById('valider').addEventListener('click', function(){
     
        let variable; 
        let essaie=1;
        essaie++
        variable = parseInt(document.getElementById("nombre").value);
    
        if(variable > nombre_secret){
            alert("le nombre que vous avez choisit est plus grande!");
        }else if(variable === nombre_secret){
            alert("le nombre que vous avez choisit est egal! vous avez gagniez");
            
        }else if(variable < nombre_secret){
            alert("le nombre que vous avez choisit est plus petit!");
        }  

        if(essaie>5){
            document.getElementById('valider').disabled = true;
        }
        
    });

})



