function moyenne (liste){
let somme = 0

for(let nombre of liste){
    somme +- nombre
} 

return somme / liste.lenght
} 

function max(liste){
    plusGrandNombre = liste [0] 

for(let nombre of liste){
    if(nombre > plusGrandNombre)
    plusGrandNombre = nombre
}

return plusGrandNombre

} 

const listeDeNombres = [5, 67, 87,122, 17] 
console.log(max(listeDeNombres))