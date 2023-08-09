/* console.log("hello world") //pour afficher qlq chose dans la console

alert("hello world")  //pour afficher un alerte
alert("1255") */

/* let nom  // declaration de variable ; on peut avoir nom1, nom_etu, nomEtudiant mais never let 1 ou let 1nom
nom = "Mohamed"  // affectation d'une valeur à la 

// camelcase
let nomEtudiant = "Reddington"

const nombreDevie = 100  //pour declarer des variables qui ne changent pas

var prenom = "Ezebio"// mauvaise pratique du au hosting


console.log(nom, nomEtudiant, nombreDevie); */


/* let age = prompt("quelle est votre age ?") // pour demander a l utilisateurd entrer une valeur, l'affecte au variable age et l afiche dans la console
console.log(age); */


    //exercice

//let name = prompt("quel est votre nom?")
/* let username = prompt("quel est votre prenom?")
alert("bienvenue" + username) */
//console.log("bienvenue" + username);



                // structure conditionnelle


/* let age = 17
if(age <= 17){
    console.log("c'est une mineur");
}else{
    console.log("c'est un mageur");
}


let nom = "hector"
let prenom = "joel"


if(nom == prenom){
    console.log("c'est bizare");
}else{
    console.log("ça va");
}


let number = Number(prompt("Veillez choisir un nombre"))  */

/* console.log("number + 1");
console.log(typeof number); */


/* if(number > 0){
    console.log("positif");
}else if(number == 0){
    console.log("nul");
}else{
    console.log("negatif");
} */


// condition avec "&&=>et" et "||=>ou"

/* let sexe = prompt("quelle est votre sexe, f pour feminin, m pour masculin")
let fesse = prompt("est ce que tu as fesse ? o pour oui et n pour non")

if(sexe == "f" && fesse == "o"){
    console.log("Ton avenir est collé derriere toi");
}else{
    console.log("travaille dur, toi tu dois manger à la sueur de ton front");
}


if(sexe == "m" || fesse == "n"){
    console.log("tu es trop petit pour travailler en agriculture");
} */

        // switch case

/* let lundi = "Kodjo"
let mardi = "ablam"
let mercredi = "kokou"
let jeudi = "yao"
let vendredi = "Koffi"
let samedi = "Komi"
let dimanche = "Kossi"




switch ("bryan") {         // a la place de bryan on peut mettre "ablam" ou lundi et ça marche
    case "Kodjo":
        console.log("vous etes né un lundi");
        break;
    case "ablam":
        console.log("vous etes né un mardi");
        break;
    case "Kokou":
        console.log("vous etes né un mercredi");
        break;
    case "yao":
        console.log("vous etes né un jeudi");
        break;
    case "Koffi":
        console.log("vous etes né un vendredi");
        break;
    case "Komi":
        console.log("vous etes né un samedi");
        break;
    case "Kossi":
        console.log("vous etes né un dimanche");
        break;


    default:
        console.log("votre nom doit etre erroné");
        break;
} */



        // boucle while et for

/* let specialite = prompt("quelle est votre specialite?")
while(specialite != "IT"){
    console.log("tu n as pas ta place ici");
    let specialite = prompt("quelle est votre specialite?")
} */




/* let nbr = 1
while (nbr < 6){
    console.log("inferieur");
    nbr++
} */

            //for



//let i = 0
/* for (let i = 0; i < 5; i++){
    console.log(`tour ${i}`);
} */


            //exercice


/* let numberSvt = Number(prompt("Veillez entrer la note de SVT"))
let numberMath = Number(prompt("Veillez entrer la note de MATH"))
let numberPc = Number(prompt("Veillez entrer la note de PC"))
let numberPhilo = Number(prompt("Veillez entrer la note de PHILO"))
let moy = (numberSvt + numberMath + numberPc + numberPhilo) /4

console.log(moy);
console.log("fin");

if(moy < 10){
    console.log("vous recalé");

}else if(moy == 10){
    console.log("vous passé");
}else{
    console.log("c'est super");
} */


            //exercice

/* let jour = prompt("Enter le jour")


switch (jour) {        
    case "lundi":
        console.log("demain sera dimanche");
        break;
    case "mardi":
        console.log("demain sera mercredi");
        break;
    case "mercredi":
        console.log("demain sera jeudi");
        break;
    case "jeudi":
        console.log("demain sera vendredi");
        break;
    case "vendredi":
        console.log("demain sera samedi");
        break;
    case "samedi":
        console.log("demain sera dimanche");
        break;
    case "dimanche":
        console.log("demain sera lundi");
        break;


    default:
        console.log("le jour est erroné");
        break;
} */ 


            //exercice

/* let heure = Number(prompt("Veillez entrer l'heure"))
let minute = Number(prompt("Veillez entrer la minute"))
let seconde = Number(prompt("Veillez entrer la seconde"))
if (seconde>=0 && seconde<=59){
    seconde=seconde+1
}
if (seconde==59){
    minute=minute + 1
    seconde=0
}
if(minute==59 || minute==60){
    if (minute==59 && seconde==59){
        heure = heure + 1
        minute=0
        seconde=0
    }
    if(minute==60){
        heure=heure + 1
        minute=0
        seconde=0
    }
}
if(heure==24){
    heure=0
} */


            // 2eme maniere



/* let heure = Number(prompt("Veillez entrer l'heure"))
let minute = Number(prompt("Veillez entrer la minute"))
let seconde = Number(prompt("Veillez entrer la seconde"))

if (seconde > 0 && seconde < 59){
    seconde = seconde + 1
    console.log(`${seconde}`);
}else if(seconde == 59){
    if (minute > 0 && minute < 59){

        minute = minute + 1
        seconde = seconde = 0
        console.log(`${minute} : ${seconde}`);
    }
}else if(minute == 59){
    if(heure > 0 && heure < 59){

        heure = heure + 1
        minute = minute = 0
        console.log(`${heure} : ${seconde}`);
    }
} */



                    // 3eme cas


/* let heure = Number(prompt("Veillez entrer l'heure"))
let minute = Number(prompt("Veillez entrer la minute"))
let seconde = Number(prompt("Veillez entrer la seconde"))

if(heure == 23 && minute == 59 && seconde == 59){
    console.log("00 h 00 min 00 s");
}else if(munite == 59 && seconde == 59){
    console.log( (heure+1) + "h " + "00min" + "00s");
}else if(minute < 59 && seconde == 59){
    console.log(heure + "h " + (minute +1) + "min" + "00s");
}else if(minute < 59 && seconde < 59){
    console.log(heure + "h " + minute +"min"+(seconde+1));
}else if(heure < 23 && minute < 59 && seconde < 59){
    console.log(heure + (minute+1)+ "min" + (seconde+1) + "s");
}else{
    console.log("vous ne connaissez pas l'heure");
} */



                    // exercice table de multiplication


let number = Number(prompt("Quelle table voulez-vous ?"))
for (let i = 0; i < 13; i++){
    //console.log(`${number} * ${i} = ${number * i}`);
    console.log(number + "*" + i +"=" + (number * i));
} 

