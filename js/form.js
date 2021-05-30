
let nom = document.querySelector("#nom");
let age = document.querySelector("#n1");
let email = document.querySelector("#t2");
let message  = document.querySelector("#t3");
let submit = document.querySelector("#submit");
let response = document.querySelector("#response");



function contact(e){

    e.preventDefault();
    if(response.className === "close_response"){
        response.className = "response";
    }
    if( nom.value != "" && age.value != ""&& email.value != "" && message.value != ""){

     let html = `<h4> Message envoyé </h4>
                <p> nom : ${nom.value} </p>
                <p> âge : ${age.value} </p>
                <p> email : ${email.value} </p>
                <p> message : ${message.value} </p>`;

    response.innerHTML += html;

    }else{

    window.alert("veuillez remplir les champs !")
    
    }

}


submit.addEventListener("click", contact)
// let btn = document.getElementById('#submit');

//         btn.onclick = function() {

//             // Alerte de base
//             // swal("Hello ! ");

//             // modal et texte
//             // swal("Mon Titre !", "Et le texte.");

//             // Une alerte avec des icones info, warning, error, success
//             // swal("Félicitations !", "Votre commande est prise en compte.", "info");

//             // utilisation avec un objet en paramètre
//             /*
//             swal({
//                 title: "Bravo !",
//                 text: "La commande arrive",
//                 icon: "success",
//                 button: "Génial"
//             })
//             */

//             // utilisation d'un promesse Js
//             /*
//             swal("Cliquez sur le bouton pour confirmer !")
//             .then((value) => {
//                 swal(`La valeur retournée est: ${value}`);
//             });

//             */

//             swal({
//                 title: "Etes-vous sûr?",
//                 text: "Une fois cliqué sur 'Ok', pas de retour en arrière. ",
//                 icon: "warning",
//                 buttons: true,
//                 dangerMode: true
//             })
//             .then((ok) => {
//                 if(ok) {
//                     swal("votre message a bien etait envoyer!", {
//                         icon: "success",
//                     });
//                 } else {
//                     swal("Vous etes revenu en arrière.");
//                 }
//             });


//         }