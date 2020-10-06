

const validateEmail= (email) =>{
    
        let result = /\S+@\S+\.\S+/;
        return result.test(email);
    }

const validate = () => {
  let saisieLastName = document.getElementById("lastname").value;
  let saisieFirstName = document.getElementById("firstname").value;
  let saisieAge = document.getElementById("age").value;
  let saisieMail = document.getElementById("mail").value;
  let saisieMail2= document.getElementById("mail2").value;
  let saisieMdp = document.getElementById("mdp").value;
  let saisieMdp2 = document.getElementById("mdp2").value;
  let cgu = document.getElementById("myCheck").checked;
  let error = document.getElementById("error");
 

console.log(saisieFirstName,saisieLastName,saisieAge,saisieMail,saisieMail2,saisieMdp,cgu);

if (saisieFirstName.length < 3){
  console.log('Votre Prénom doit contenir au moins 3 caractères');
  error.innerHTML = "Votre Prénom doit contenir au moins 3 caractères"
  return false
} else if (saisieMdp !== saisieMdp2){
  console.log('Vos mots de passe ne sont pas identique');
  error.innerHTML = "Vos mots de passe ne sont pas identiques"
  return false
} else if (saisieAge < 18){
  console.log("Votre age doit être un chiffre supérieur a 18")
  error.innerHTML = "Votre age doit être un chiffre supérieur a 18"
  return false
} else if (saisieMdp.length < 6){
  console.log("Votre mot de passe doit contenir au moins 6 caractères");
  error.innerHTML = "Votre mot de passe doit contenir au moins 6 caractères"
  return false
} else if (saisieMail !== saisieMail2){
  console.log("Vos adresses mail sont differentes")
  error.innerHTML = "Vos adresses mail sont differentes"
  return false
} else if (validateEmail(saisieMail) === false){
console.log("Le format de votre adresse mail n'est pas valide")
error.innerHTML = "Le format de votre adresse mail n'est pas valide"
return false
} else if (saisieLastName == "" || saisieFirstName == "" || saisieAge == "" || saisieMail == "" || saisieMail2 == "" || saisieMdp == "" || saisieMdp2 == ""){
  console.log("Merci de bien vouloir compléter le formulaire")
  error.innerHTML = "Merci de bien vouloir compléter le formulaire"
  return false
} else if (cgu === false){
  console.log("Veuillez accepter les conditions d'utilisation")
  error.innerHTML = "Veuillez accepter les conditions d'utilisation"
}else {
  document.location.href="redirection.html"
  
}

};




document.querySelector('button').addEventListener("click", validate);


