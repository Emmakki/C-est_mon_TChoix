const Dilemme = require('./model_dilemme.js');

// récupérer un dilemme dans la base de donnée
function choixDilemme (mode){
    if (mode == "alea"){
        Dilemme.find(null, function (err, dil) {
            if (err) { throw err; }
            var total = dil.length;
            console.log(total);
            var alea = Math.floor(Math.random()*total);
            console.log(alea);

            console.log(dil[alea]);
        })
    } if (mode == "difficile"){
        
    } if (mode == "populaire"){
        Dilemme.find({"jaime": {"$gt" : 10}},function(err, dil){
            if (err) { throw err; }
            var total = dil.length;
            console.log(total);
            var alea = Math.floor(Math.random()*total);
            console.log(alea);

            console.log(dil[alea]);
        })
        
    } else {
        console.log("Ce mode n'existe pas");
    }
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
