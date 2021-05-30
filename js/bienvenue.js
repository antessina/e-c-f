window.onload = () => {
    if(sessionStorage.prenom != null){
        var prenom = sessionStorage.prenom
    }else{
        var prenom = prompt("entrez votre prénom")
        sessionStorage.prenom = prenom
    }

    if(sessionStorage.nom != null){
        var nom = sessionStorage.nom
    }else{
        var nom = prompt("entrez votre nom")
        sessionStorage.nom = nom
    }

    document.querySelector("span").innerText = `${prenom} ${nom}`
}