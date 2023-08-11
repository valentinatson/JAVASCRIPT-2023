//nom ,nbreVie ,experience
//3 armes

/* class Personnage {
    constructor(nom){
        this.nom = nom
    }
    nbreVie = 100
    expérience = 0
    arme = [{nom:"epee", degatVie:20}, {nom:"marteau", degatVie:10}, {nom:"fusil", degatVie:35}]

    presentation(){             //presentation est methode
        console.log(`Je suis ${this.nom}`)
    }


    attaquer(Personnage, arme){
        let vie;
        while(vie != 0){
            if(arme==this.arme[0].nom){
                    Personnage.nbreVie = Personnage.nbreVie - this.arme[0].degatVie
                    console.log(`${this.nom} a attaqué ${Personnage.nom} avec ${arme}.
                    il lui reste ${Personnage.nbreVie} points`);
                    vie=Personnage.nbreVie
            }

            if(arme==this.arme[1].nom){
                    Personnage.nbreVie = Personnage.nbreVie - this.arme[1].degatVie
                    console.log(`${this.nom} a attaqué ${Personnage.nom} avec ${arme}.
                    il lui reste ${Personnage.nbreVie} points`);
                    vie=Personnage.nbreVie
            }

            if(arme==this.arme[2].nom){
                    Personnage.nbreVie = Personnage.nbreVie - this.arme[2].degatVie
                    console.log(`${this.nom} a attaqué ${Personnage.nom} avec ${arme}.
                    il lui reste ${Personnage.nbreVie} points`);
                    vie=Personnage.nbreVie
            }
            if(vie == 0){
                person2.expérience=10
                console.log(person2);
            }

    }
}
// 2émé etape



}

// new personnage

let person1 = new Personnage("tintin");
person1.presentation()
let person2 = new Personnage("cina");
person2.attaquer(person1, "marteau"); */












class Acteur{
    constructor(nom,prenom,age){
        this.nom = nom
        this.prenom = prenom
        this.age = age
}
 start = true
}

let alan = new Acteur ("Alan", "Nasir", 55)
console.log(alan);




class Etudiant{
    constructor (nom,prenom,filiere){
        this.nom = nom
        this.prenom = prenom
        this.filiere = filiere
}
notes = []
calculMoy(){
    let moy=0;

    if (this.notes.length < 1 ){
        console.log("vous n'avez pas de moyenne");
    }else{
        
        for (let element of this.notes) {
            moy = (moy + element.note*element.coefficient)/this.notes.length
        }
        console.log(`votre moyenne est ${moy}`);
    }
}
ajouterNote(){
    //for (let i=0 ; i<3; i++){
        let ask = prompt("Voulez vous ajoutez ? taper o pour oui, n pour non");
        while(ask!="n"){
            
        
            
        let matiere = prompt("entrer la matiere")
        let note = Number(prompt("entrer la note"))
        let coefficient = Number(prompt("entrer le coefficient"))
        this.notes.push({matiere, note, coefficient})
        ask = prompt("Voulez vous ajoutez ? taper o pour oui, n pour non");
        }
        
        //ou bien on fait ça this.note.push({matiere,note,coefficient}) dans le cas ou on fait this.note.push({matiere:matiere, note:note, coefficient:coefficient})
        
    }
    
//}
}
let zartan = new Etudiant ("Zartan", "Koffi", "D")
zartan.ajouterNote()
console.log(zartan);
zartan.calculMoy()
