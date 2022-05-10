const Dilemme = require('./model_dilemme.js');

// récupérer un dilemme dans la base de donnée
function choixDilemme (mode){
    Dilemme.find(null, function (err, dil) {
        if (err) { throw err; }
        if (mode == "alea"){
            var total = dil.length;
            //console.log(total);
            var alea = Math.floor(Math.random()*total);
            //console.log(alea);

            return BDtoString(dil[alea])
            
        } if (mode == "difficile"){
            var total = 0;
            for(i=0;i<dil.length;i++){
                if(Math.abs(dil[i].nbClique1-dil[i].nbClique2)<10) {
                    total ++
                }
            }
            //console.log(total);
            var alea = Math.floor(Math.random()*total);
            //console.log(alea);

            return BDtoString(dil[alea])

        } if (mode == "populaire"){
            var totj =0;
            for(i=0;i<dil.length;i++){
                totj = totj+dil[i].jaime;
            }
            total = 0;
            for(i=0;i<dil.length;i++){
                if(dil[i].jaime > 0.66*totj) {
                    total ++
                }
            }
            var alea = Math.floor(Math.random()*total);
            //console.log(alea);

            return BDtoString(dil[alea])
        } else {
            console.log("Ce mode n'existe pas");
        }
    })
}

//Ajouter un dilemme dans la BD
function AddDilemme (dile){
    d = SplitString(dile);

    const dil = new Dilemme ({
        choix1:d[0], 
        choix2:d[1],
        nbClique1:parseInt(d[2]),
        nbClique2:parseInt(d[3]),
        visible:d[4],
        jaime:parseInt(d[5]),
    });
    
    dil.save(function (err) {
        if (err) {throw err;}
        console.log('Dilemme ajouté')
    })
}

//Pour séparer une chaine de caractère
function SplitString (dile){
    return dile.split('|');
}

//Transformer la structure de la BD en chaine de caractère
function BDtoString (dile){
    return dile.choix1 + "|"+dile.choix2+"|"+dile.nbClique1+"|"+dile.nbClique2+"|"+dile.visible+"|"+dile.jaime;
}
