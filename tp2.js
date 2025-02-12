var parags=document.getElementsByTagName("p");
parags[0].textContent="entrez la distance parcourue de votre voiture en km";
parags[1].textContent="entrez la comsommation moyenne de votre voiture en litre/100 km";
parags[2].textContent="enrez coute l'essence aujourd'hui";
document.innerHTML=parags;
function afficher(){
 var x = document.getElementById("n1").value;
 document.getElementById("n11").innerHTML = "vous avez parcouru "+x +"KM";
 var y = document.getElementById("n3").value;
 document.getElementById("n22").innerHTML = "vous avez consomme "+y+ " L d'essance";
 var a = document.getElementById("n2").value;
 document.getElementById("n33").innerHTML = "Votre consommation moyenne est "+a+ " L/100 KM";
 var b;
 b=(x*0.5) + y + (a*14);
 document.getElementById("n44").innerHTML="Vos charges pour ce voyage sont de :"+ b +"Dh";

}  






