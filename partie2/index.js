"use strict"
//function

/* function direBonjour() {
    console.log("Bonjour!!!!");
}

direBonjour()


function direBonjourAmi(nomAmi) {
    //console.log("Bonjour" + nomAmi);
    console.log(`Bonjour ${nomAmi}`);
}

direBonjourAmi("Zartan")


function chiffreSacre(nombre) {
    console.log(`Mon chiffre sacré est ${nombre}`);
}

chiffreSacre (7)
chiffreSacre ("abalo") */  // probleme de typage

/* function identite() {
    let nom = prompt("quel est votre nom?")
    let prenom = prompt("quel est votre prenom?")
    let age = Number(prompt("quel est votre age?")) 
    console.log(`votre nom est ${nom}, votre prenom est ${prenom} et votre age est ${age}`);
}

identite () */

// avec parametre
/* function identite(nom,prenom,age) {
console.log(`votre nom est ${nom}, votre prenom est ${prenom} et votre age est ${age}`);
}
let nom = prompt("quel est votre nom?")
let prenom = prompt("quel est votre prenom?")
let age = Number(prompt("quel est votre age?"))

identite ("Zartan","kinkaid","14") */
//identite (nom,prenom,14)



// function avec return❤️❤️❤️❤️❤️
//return de base n'affiche rien mais renvoit seulement

/* function bonjour() {
    return "Bonjour!!!!"
}

let salution = bonjour()
console.log(salutation);


//exercice

function addition (nbre1, nbre2){
    console.log(nbre1 + nbre2)
    return nbre1 + nbre2
}

let nombre = addition(2,2)

for (let i = 0; i < 13; i++){
    console.log(nombre*i);
}


let direBonjour = () => {
    console.log("Bonjour!!!!");
}
let bonjourAmi = (nomAmi) =>console.log("Bonjour!!!!" + nomAmi);
direBonjour() */


//tableau 😁😁

/* let mesFilms = ["tintin", "zombie", "spartacus", "365jours"] */
/* mesFilms[0]  //1er element "tintin"
mesFilms.length   //la taille du tableau
mesFilms.push("rica")   // pour enregistrer dans le tableau**disons à la suite

console.log(mesFilms);
mesFilms.pop();     //supprimer le dernier element
console.log(mesFilms);
mesFilms.splite(1, 1);  //supprimer un element à partir de l'indice 1
console.log(mesFilms); */

// TRES IMPORTANT❤️❤️❤️❤️❤️
/* for (let i = 0; i < mesFilms.length; i++) {
    console.log(mesFilms[i]);
}
            //boucle for|of❤️❤️❤️ super👌
for (let film of mesFilms) {
    console.log(`j'ai regardé le film ${film}`);
}
 */

//pour afficher  un element precis du tableau
//console.log(mesFilms[2]);


/* let randomTab = [15, true, ["edwige", "rose"], {nom: "linda"}, () =>{}]

console.log(randomTab);
console.log(randomTab[1]);
console.log(randomTab[2][0]);
console.log("taille du tableau: " + randomTab.length); */


    //objet ❤️❤️❤️


/* let etudiant = {
    nom: "zartan",
    age: 55,
    statutMatrimonial: "CELIBATAIRE",


    presentation(){
        console.log(
            `je m'appel ${this.nom}
            j'ai ${this.age} ans et je suis ${this.statutMatrimonial}`
            );
    }
}

etudiant.presentation() */



/* console.log(
    `je m'appelle ${etudiant.nom},
    je suis un etudiant agé de ${etudiant.age} ans et je suis 
    ${etudiant.statutMatrimonial}`
);


//etudiant.nom
console.log(etudiant.nom);

etudiant.nom = "Satoru"
console.log(etudiant.nom);

//presentation(){} */



        // exercice👺👺👺

        /* let addition = (nbre1, nbre2) => {
            console.log(Number(prompt("entrer le 1er nombre")));
            console.log(nbre1 + nbre2)
            return nbre1 + nbre2

        };
        addition(5,6) */

        
        /* let nombre = (addition(5,6)) => {
            
            if(nombre % 2 == 0){
                console.log("paire");
            }else{
                console.log("impaire");
            }
        }; */



        // exercice2

        

        /* let table = (tableau) => {

        for (let i = 0; i < tableau.length; i++){
            let nombre = tableau[i]%2
            if(nombre !=0){
                console.log(tableau[i]);
            }
            
}
        }
        let tableau = [2,4,6,3,7,5,8]
        table(tableau) */


        //exercice

/* let tab = [{titre:"tintin", annee:2000}, {titre:"milou", annee:2001}, {titre:"noel", annee:1999}, {titre:"zombie", annee:2005}]
let parcourir = (tab) => {
    for (let element of tab) {
        console.log(element.titre);
    }

}
parcourir(tab) */

/* let tab = [{titre:"tintin", annee:2000}, {titre:"milou", annee:2001}, {titre:"noel", annee:1923}, {titre:"zombie", annee:2005}]
let parcourir = (tab) => {
    let petit = tab[0].annee
    for (let element of tab) {
        if (petit > element.annee){
            petit = element
        }
    }
console.log(petit);
}
parcourir(tab) */





// ❤️❤️❤️ création de class (elle commence tjrs par une lettre majiscule)


/* class Personne {             // 1er cas tout simple
    nom = "Franklin"
    prenom = "Delano";

    presentation() {
        console.log(`je m'appellle ${this.nom} ${this.prenom}`);
    }
}

//👌 new Personne()

let koffi = new Personne()

console.log(koffi);

let audrey = new Personne()

console.log(audrey); */


class Personne {
    constructor (n,p) {
        this.nom = n
        this.prenom = p
    }
    isLiving = true

    presentation() {
        console.log(`je m'appellle ${this.nom} ${this.prenom}`);
    }
}

//👌 new Personne()

let koffi = new Personne("Franklin", "Delano")

console.log(koffi);

let audrey = new Personne("Alan", "Madelaine")

console.log(audrey);


                //exercice


                class Animal {
                    constructor (nom) {
                        this.nom = nom
                    }    
                }
                
                //👌 new animal()
                
                let chien = new Animal("milou")
                
                console.log(chien);
                
                let chat = new Animal("Alan")
                
                console.log(chat);

//❤️❤️❤️ principe de mere-fille

class Professeur extends Personne {
    constructor(nom, prenom, filiere){
        super(nom, prenom)
        this.filiere = filiere
    }
    frequente = true
}

let agbodjan = new Professeur("Agbodjan", "Eric", "D")
console.log(agbodjan);