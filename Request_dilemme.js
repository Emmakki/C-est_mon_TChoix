const Dilemme = require('./model_dilemme.js');
var Mode = "alea";

// récupérer un dilemme dans la base de donnée
function choixDilemme (){
    Dilemme.find(null, function (err, dil) {
        if (err) { throw err; }
        if (window.Mode == "alea"){
            var total = dil.length;
            //console.log(total);
            var alea = Math.floor(Math.random()*total);
            //console.log(alea);

            return BDtoString(dil[alea])

        } if (window.Mode == "difficile"){
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

        } if (window.Mode == "populaire"){
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

//Mise à jour d'un dilemme
function UpdateDilemme (dile){
    d = SplitString(dile);
    Dilemme.find({"choix1":d[0]},{"choix2":d[1]},function(err,dil){
        if (err) { throw err; }
        dil.nbClique1=parseInt(d[2]);
        dil.nbClique2=parseInt(d[3]);
        dil.visible=d[4];
        dil.jaime=parseInt(d[5]);
        dil.save();
    })
}

//Modifie la variable globale qui définie le mode de jeu
function UpdateMode (mode){
    if (mode != "alea" || mode != "difficile" || mode != "populaire"){
        window.Mode = mode;
    } else {
        console.log("ce mode n'existe pas");
    }
}

//Ajoute dans la base de donnée des dilemmes depuis un fichier texte formaté
function lectureDilemme (fichiertexte){
    const readLine = require('readline');
    const f = require('fs');
    var file = fichiertexte;
    var rl = readLine.createInterface({
        input : f.createReadStream(file),
        output : process.stdout,
        terminal: false
    });
    rl.on('line', function (text) {
        console.log(text);
        AddDilemme(text);
    });
}

//Pour séparer une chaine de caractère
function SplitString (dile){
    return dile.split('|');
}

function BDtoString (dile){
    return dile.choix1 + "|"+dile.choix2+"|"+dile.nbClique1+"|"+dile.nbClique2+"|"+dile.visible+"|"+dile.jaime;
}
