const Dilemme = require('./model_dilemme.js');
var Mode = "Aléatoire";

// récupérer un dilemme dans la base de donnée
exports.choixDilemme = function(dilprec){
    precedent = SplitString(dilprec);
    return new Promise (function(resolve){
        setTimeout(
            ()=>{
                Dilemme.find(null, function (err, dil) {
                    if (err) { throw err; }
                    if (globalThis.Mode == "Aléatoire"){
                        var total = 0;
                        let tab = [];
                        for(i=0;i<dil.length;i++){
                            if(dil[i].visible =="True" && precedent[0]!=dil[i].choix1 && precedent[1]!=dil[i].choix2) {
                                total ++
                                tab.push(i);
                            }
                        }
                        var alea = Math.floor(Math.random()*total);
                        resolve(BDtoString(dil[tab[alea]]));
            
                    } if (globalThis.Mode == "Les + difficiles"){
                        var total = 0;
                        let tab = [];
                        for(i=0;i<dil.length;i++){
                            if(Math.abs(dil[i].nbClique1-dil[i].nbClique2)<10 && dil[i].visible =="True" && precedent[0]!=dil[i].choix1 && precedent[1]!=dil[i].choix2) {
                                total ++
                                tab.push(i);
                            }
                        }
                        var alea = Math.floor(Math.random()*total);
                        resolve(BDtoString(dil[tab[alea]]));
            
                    } if (globalThis.Mode == "Les + aimés"){
                        var totj =0;
                        let tab = [];
                        for(i=0;i<dil.length;i++){
                            totj = totj+dil[i].jaime;
                        }
                        total = 0;
                        for(i=0;i<dil.length;i++){
                            if(dil[i].jaime > 0.66*totj && dil[i].visible =="True" && precedent[0]!=dil[i].choix1 && precedent[1]!=dil[i].choix2) {
                                total ++
                                tab.push(i);
                            }
                        }
                        var alea = Math.floor(Math.random()*total);;
                        resolve(BDtoString(dil[tab[alea]]));
                    } else {
                        resolve( "Ce mode n'existe pas");
                    }
                })     
            } , 1
        );
    });
}

//Ajouter un dilemme dans la BD
exports.AddDilemme = function(dilemme){
    d = SplitString(dilemme);
    //console.log(d);

    const dil = new Dilemme ({
        choix1:d[0], 
        choix2:d[1],
        nbClique1:parseInt(d[2]),
        nbClique2:parseInt(d[3]),
        visible:d[4],
        jaime:parseInt(d[5]),
    });

    var j = Dilemme.find(null);
    j.where('choix1',d[0]);
    j.exec(function (err,dile){
        if (err){throw err;}
        if (dile.length == 0) {  
            dil.save(function (err) {
                if (err) {throw err;}
                console.log('Dilemme ajouté')
            });
        }else {
            console.log("Dilemme existe déjà");
        }
    });

}

//Mise à jour d'un dilemme
exports.UpdateDilemme = function(dile){
    d = SplitString(dile);

    Dilemme.updateOne({"choix1":d[0]},{nbClique1:parseInt(d[2])},function (err) {
        if (err) {throw err;}
    });
    Dilemme.updateOne({"choix1":d[0]},{nbClique2:parseInt(d[3])},function (err) {
        if (err) {throw err;}
    });
    Dilemme.updateOne({"choix1":d[0]},{visible:d[4]},function (err) {
        if (err) {throw err;}
    });
    Dilemme.updateOne({"choix1":d[0]},{jaime:parseInt(d[5])},function (err) {
        if (err) {throw err;}
    });
    
}

//Modifie la variable globale qui définie le mode de jeu
exports.UpdateMode = function(mode){
    if (mode == "Aléatoire" || mode == "Les + difficiles" || mode == "Les + aimés"){
        globalThis.Mode = mode;
    } else {
        globalThis.Mode = "Aléatoire";
    }
    console.log("mode : "+globalThis.Mode);
}

//Ajoute dans la base de donnée des dilemmes depuis un fichier texte formaté
exports.lectureDilemme = function(fichiertexte){
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
        exports.AddDilemme(text);
    });
}

//Pour séparer une chaine de caractère
function SplitString (dile){
    return dile.toString().split('|');
}

function BDtoString (dile){
    return dile.choix1 + "|"+dile.choix2+"|"+dile.nbClique1+"|"+dile.nbClique2+"|"+dile.visible+"|"+dile.jaime;
}
