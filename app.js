/* PARTIE 1 */




/*
const lis = document.querySelectorAll('li') //permet de selectionner un élement de tout type
console.log(lis)

const Tab = Array.from(lis)  // La liste ne peut pas utiliser les fonctions de type Array Array.from permet de l'instencier en tant que tableau
console.log(Tab)

const r = Tab.filter((p)=> p.length > 1)  // ca marche pas 
console.log(r)


const test= ['vayne','galio','Parus','falzar','rio','li']  // exemple de la fonction filter
console.log(test)
const r1 = test.filter((w)=> w.length > 4)
console.log(r1)
*/


//// Utilisation de Arrayfrom
/*
const lis = document.querySelectorAll('ul li:nth-child(2)')  // selecteur de node avec first-child ou nth-child(x)
console.log(Array.from(lis))
console.log(
    ul.nodeName,        // Permet de donner le nom du noeud selectinonné
)
*/


//// Propriété d''affiche disponible
/*
const ul = document.querySelector('ul')        //les differentes propriétés d'affichage
console.log(
    ul.nodeName,  
    ul.innerHTML,           //  Afiiche toute la structure html et peut modifié nimportqu'elle element ou chaine de caractère

    ul.innerText,           //Affiche uniquement le contuenu textuel si un le contenu d'un noeud est hidden il ne l'affiche pas 

    ul.textContent,         // Affiche tout le contenu textuel + les noeuds hidden et +
)
*/


//// Utilisation de setAttribute
/*
const ul = document.querySelector('ul')
ul.setAttribute('hidden','hidden')   //permet d'effacer un noeud
ul.removeAttribute('hidden')        // Permet de clear les attributs 
*/


////  Utilisation de getAttribute
/*
const ul = document.querySelector('ul li:nth-child(3)')    // on selectionne le noeud de la classe red
console.log(
    ul.getAttribute('class')                // Permet de retourner l'attribut de la classe "red" 
)
*/


////  On utilise la propriété classList On souhaite ajouter ou modifier la classe d'un élement html
/* 
const ul = document.querySelector('ul li:nth-child(3)')    
console.log(         
    // Classlist Objet de retour -> "DOMTokenList" qui permet de manipuler une liste d'element              
    ul.classList.remove('red') // L'element ul contient 2 class (bold red) or c'est que red ici qui est supprimé comme prévu     
)  
*/


//// On utilise la methode toggle (Permet de changer l'etat d"un element => remove/reset ) 
/*
const ul = document.querySelector('ul li:nth-child(3)')  
setInterval(() => {
    ul.classList.toggle('red') // Permet de faire un texte qui clignote 
}, 1000);
*/


//// On utilise la methode add qui permet d'ajouter une ou plusieurs  class
/*
const ul = document.querySelector('ul li:nth-child(3)') 
setInterval(() => {
    ul.classList.add('bold')  
}, 1000);
*/

/*  PARTIE 2 */
// On joue avec les propriété de style via le Js
/* 
const li = document.querySelector('ul li:first-child')
console.log(
    li.style.color = 'blue',
    li.style.fontWeight = 'bold'
)
*/

//// On veut voir la couleur d'un élement d'une class 
/*
const li = document.querySelector('ul li:first-child')
console.log(li.style.color) // Ca n'affiche rein pcq la propriété style affiche les valeurs dans l'atribut or la on a une class
// pour une class on utilise la propriété getComputedStyle()
console.log(getComputedStyle(li))
console.log(getComputedStyle(li).color)
*/

////   Comment rajouter un elément via le document
/*
const li = document.querySelector('ul li:first-child')

const newLi = document.createElement('li') // Creer un element dans le document 
newLi.innerHTML = 'Boujour les gens NOCAP' // Rajoute du text dans le innerHTML de newLI

////On veut maintenant ajouter cet élement dans notre DOM
document.querySelector('ul').appendChild(newLi) // appendChild prend en parametre un noeud la fonction rajoute notre "li" fictif à "ul"
//Hiérarchie d'heritage :  eventTarget(Document etc...) <- Node <- Element <- HTMLElement <- Le reste
// on peut alors par exemple avoir un node en paramètre et tt ce qui extend du node et vis verca
// apendChild retourne un node 
document.querySelector('ul').appendChild(newLi) // append est une verson plus optimisée de appendchild car elle ne prend en compte que les elements
document.querySelector('ul').prepend(newLi) // rajoute l'élement au tout debut  
*/


//// On utilise le insertAdjacentELement
/*
const ul = document.querySelector('ul')
const div = document.createElement('div')
div.innerHTML = 'I use to pray for time like this'
ul.insertAdjacentElement("afterbegin",div) // Les paramètres possoible qui gère la position 

/* ul est le targetElement
'beforebegin' : Avant targetElement 
'afterbegin' : A l'intérieur de targetElement, avant son premier enfant.
'beforeend' : A l'intérieur de targetElement, après son dernier enfant.
'afterend' : Après targetElement 
*/

//// on utilise la propriété children
/*
const ul = document.querySelector('ul')
console.log (ul.children)            //Renvoie une HTMLCollection d'un tableau des 3 éléments


console.log (ul.childNodes)           // Donne tous les nodes meme les élement qui ne le sont pas comme les espaces


console.log (ul.firstChild)           // renvoie un espace qui est consideré comme un node


console.log (ul.firstElementChild)    // renvoie le premier element de la liste de Node


console.log (ul.childNodes[1])        // Fonctionne comme un tableau [1] est donc le premier element et [0] un Node espace


console.log(
    ul.childElementCount,   //          le nombre d'
    ul.children.length      // Renvoie                Elements  
)
*/

//Si l'on veut partir d'un element enfant à un élément parent 
/*
const li = document.querySelector('ul li:nth-child(2)')
console.log(li.parentNode)          // Donne le Node parent
console.log(li.parentElement)       // donne l'element parent
console.log(li.nextElementSibling)  //donne le prochain élement
console.log(li.previousElementSibling) // donne le precédent élement


//// Supprimer un element dans le DOM
console.log(li.remove())
*/

//// On utilise cloneNode() pour "dupliquer" un élement different de la propriété append
/*
const li = document.querySelector('li')
const ul = document.querySelector('ul')
ul.append(li.cloneNode())       // clone l'élement sans ses enfants
ul.append(li.cloneNode(true))   //clone l'élement avec tous ses enfants
*/

/**
Exercice qui permet de recupérer les donées d'une API(fetch)
on recupère les donnée grace aux promesses / fonction async 
on manipule les données de type JSON en HTML pour l'afficher sur le document 
 */


/*

/**
 * Crée un élement HTML représentant un article
 * @param {{title: string, body: string}} post
 * @return {HTMLElement}
 */

/*

// Fonction qui permet de génerer un article à partir d'un titre et d'un paragraphe
function createArticle(post){
    const article = document.createElement('article')
    article.append(createElementWithText('h2',post.title))
    article.append(createElementWithText('p',post.body))
    return article
}
// focntion qui permet de créer un élement avec comme paramètre sa nature et son contenu
// Dans cette exercice la fonction sera utlisée pour génerer un titre et un paragraphe le tout séparement 
function createElementWithText(tagName,content){
    const element = document.createElement(tagName)
    element.innerText = content
    return element
}

//Création d'une fonction asychrone dans main
// on affiche chargement en attendant la réponse du fetch 
// Si la reponse est différente de ok c'est qu'il y a une erreur 
//si la reponse est ok on supprime le chragement 
//  On affiche le contenu de r.json() grace a nos fonctions 
 async function main(){
    const wrapper = document.querySelector('#lastPosts')
    const loader = document.createElement('p')
    loader.innerText = 'Chargement...'
    wrapper.append(loader)
    try{
        const r = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=5',{
            headers: {
                Accept: 'application/json'
            }
        })
        if (!r.ok){
            throw new Error('Erreur serveur')
        }

        const posts = await r.json()
        loader.remove()
        for(let post of posts){
            wrapper.append(createArticle(post))
        }

    }catch(e){
        loader.innerText = 'Impossible de charger les articles'
        loader.style.color = 'red'
        return
    }
}

main()



*/
////// LES ECOUTEURS D'EVENEMENTS 


// Exemple 1 Créer un écouteur d'évenement

/*
const button = document.querySelector('button')        
button.addEventListener('click',function (event){
    console.log(event.target, event.currentTarget)
})
*/



//  Exemple 2 Donner une action à un évenement

/**
 * 
 * @param {PointerEvent} event 
 */


/*
function onButtonClick (event) {
    console.log(event.currentTarget);   // contient l'élément sur lequel on a greffé l'écouteur
}

document.querySelectorAll('button').forEach((button) => 
    button.addEventListener('click', onButtonClick)
)
*/

// exemple 3 La propagation

/**
 * 
 * @param {PointerEvent} event 
 */

/* 
function onButtonClick (event) {
    console.log('clique du button');
    event.preventDefault()              // Annule l'évènement exemple: un lien GOOGLE / formulaire
    event.stopPropagation()             // Empèche l'évènement de remonter vers les éléments parents
    // Autrement l'écouteur verifie si il n y a pas des événement plus haut         

}

document.querySelectorAll('button').forEach((button) => 
    button.addEventListener('click', onButtonClick)
)

document.querySelector('div').addEventListener('click',()=>{
    console.log('clique de la Div')
    
})
*/


// LES 4 METHODES PRINCIPALES DES EVENEMENTS 
/*
element.addEventListener('click', function (e) {
    e.preventDefault() // Annule l'évènement
    e.stopPropagation() // Empèche l'évènement de remonter vers les éléments parents
    e.target // contient l'élément sur lequel on a cliqué
    e.currentTarget // contient l'élément sur lequel on a greffé l'écouteur 
})
*/



// EXEMPLE 4 LES FORMULAIRES
/*

document.querySelector('form').addEventListener('submit',(e)=>{
    const form = e.currentTarget
    const data = new FormData(form)             // Form data est un objet constructeur permetant de manipuler les formulaires
    const firstname = data.get('firstname')     // data.get est une methode du constructeur FormData
    if (firstname.length <= 4){                 // L'élement n'est pas soumis si il est inférieur à 4 carac.
        e.preventDefault()
    }
})

*/

//INPUT methodes 

// L'ECOUTEUR CHANGE
/*
document.querySelector('form')
    .addEventListener('change',(e)=>{       //l'évenement change est appelé à la suite d'une modification dans l'input
        console.log('change')
    })

*/

//  EVENEMENT INPUT
/*
document.querySelector('input')
    .addEventListener('input',(e)=>{     
    console.log('input',e.currentTarget.value)
    })
*/


//  EVENEMENT KEYDOWN
/* 
document.querySelector('input')
    .addEventListener('keydown',(e)=>{   
    console.log('keydown',e.key)
})
*/

// RACCOURCI AVEC KEYDOWN 
 // Les evenement permetant de manipuler le comprtement du clavier 
 //keydown      Detecte quand la touche est appuyé meme en matient 
 //keypress     Detecte quand la touche est appuyé
 //keyup        Detecte quand la touche est relaché

 /*
document.addEventListener('keydown',(e)=>{      
    if (e.ctrlKey === true && e.key === 'k') {
        e.preventDefault()
        console.log('raccourci');
    }
})
*/

//  EVENEMENT FOCUS 
/*
document.querySelector('input').addEventListener('focus',(e)=>{
    console.log(e);         // Focus est appelé quand on clique sur l'input  
                 // variante avec blur qui est appteelé quand on survole un éléément et qu'on le quitte
})
*/

//  EVENEMENT CHECKBOX
/*
document.querySelector('input').addEventListener('change',(e)=>{
    console.log(e.currentTarget.checked)    // Renvoie TRUE/FALSE sur l'etat de la case
})
*/

//EVENEMENT SELECT
/*
document.querySelector('select')
.addEventListener('change', (e)=>{
    console.log(e.currentTarget.selectedOptions,
        Array.from(e.currentTarget.selectedOptions) // array.from instencie un élement 
        .map(option=> option.value)                 // map permet de manipuler les tableaux
    )
})
*/

// EXERCICE SPOILER
/*
document.querySelectorAll('.spoiler')
.forEach((e)=>e.addEventListener('click',(e)=>{
    e.currentTarget.classList.toggle('spoiler')
}
))
*/

/*
-Créer des variables pour referencer les elements HTML pertinents 
-Créer un tableau (ou une liste) pour stocker les taches.
-Ecouter les évenements sur le formulaire d'ajout de taches (submit)
-lorsqu'une nouvelle tach est ajoutée, 
    récuperer la valeur saisie,
    l'ajouter au tableau des taches,
    et mettre à jour l'affichage de la liste 
-Ajouter des boutons pour marquer une tache comme terminée ou la supprimer 
-Ecouter les évenement de ces boutons pour mettre à jour l'état de la tache dans le tableau 
et rafraichir l'affichage 


*/
//// MON CODE QUI A FLOP 
/*
// Déclaration d'un tableau pour stocker les taches 
const arrayTask = []

//Réferencement des élements HTML du formulaire 
const form = document.querySelector('.d-flex')                              // formulaire 
const taskInput = document.querySelector('input.form-control')              //champs de saisie
const addButton = document.querySelector('button.btn btn-primary')          //Boutton d'ajout


const check = document.querySelector('.form-check-input')
const labelTask = document.querySelector('.ms-2')                   // checkbox
const suppr = document.querySelector('.ms-auto')                              // delete
const bin =  document.querySelector ('.bi-trash')                             // logo bin


//Réferencement de l'élément HTML dans la liste des taches 
const taskList = document.querySelector('ul.list-group')

//Ecoute de e submit

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const taskText = taskInput.value            // Récupere la valeur saisie par l'utilisateur
    if(taskText.trim() !== '' ){                // trim() retire les blancs ( espace , tabulation etc )
        arrayTask.push(taskText)
        listeMAJ()
        
    }
    taskInput.value = ''
    console.log(arrayTask)                     
})

function listeMAJ(){
                             //Efface le contenue actuel de la liste 
    arrayTask.forEach(task=>{
        const taskContainer = document.createElement('li')

        taskContainer.appendChild(check)
        
        taskContainer.appendChild(suppr)
        suppr.appendChild(bin)
        


        taskList.classList.add('list-group-item')
        const referenceNode = taskList.firstChild
        const majLISTE = taskList.insertBefore(taskContainer,referenceNode)
        
        return majLISTE
    })                                     
}
*/


 





