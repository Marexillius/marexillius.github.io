const chaptersObj = {
    // début
    begin: {
        titre: `L'appel`,
        description: `Vous recevez l'appel d'un client qui souhaite se débarasser d'un fantôme chez lui. Ceci est votre première aventure paranormal, donc vous considèrez faire un appel pour de l'aide. Qui appelez?`,
        image: "../assets/image/begin.jpg",
        buttons: [
            { titre: "Domino's", destination: "confrontationPizza" },
            { titre: "Personne", destination: "confrontationSolo" },
            { titre: "Professionels", destination: "confrontationPro" }
        ]
    },

    // Chapitre 2, choix 1
    confrontationPizza: {
        titre: `Face-à-Face`,
        description: `Après avoir commandé votre récompense pour après l'investigation, vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "../assets/image/confrontation.jpg",
        buttons: [
            { titre: "Confusion", destination: "mortDistraction" },
            { titre: "Fuir", destination: "cachette" },
            { titre: "Rien", destination: "mortRien" }
        ]
    },

    // Chapitre 2, choix 2
    confrontationSolo: {
        titre: `Face-à-Face`,
        description: `Après un peu de réflexion, vous déterminez que vous pouvez réussir seul. Vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "../assets/image/confrontation.jpg",
        buttons: [
            { titre: "Confusion", destination: "mortDistraction" },
            { titre: "Fuir", destination: "cachette" },
            { titre: "Rien", destination: "mortRien" }
        ]
    },

    // Chapitre 2, choix 3
    confrontationPro: {
        titre: `Face-à-Face`,
        description: `Les meilleurs chasseurs de créatures paranormals vont arriver sous-peu en back-up, en attendent vous allez à la maison du client et vous entrez. La porte se ferme derrière vous et vous êtes face-à-face avec le fantôme. Comment survivre ?`,
        image: "../assets/image/confrontation.jpg",
        buttons: [
            { titre: "distraction", destination: "mortDistraction" },
            { titre: "Fuir", destination: "cachette" },
            { titre: "Rien", destination: "mortRien" }
        ]
    },

    // Chapitre 3
    cachette: {
        titre: `Cache-Cache`,
        description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
        image: "../assets/image/cachette.jpg",
        buttons: [
            { titre: "Chambre", destination: "compagnon" },
            { titre: "Garage", destination: "compagnon" },
            { titre: "Cuisine", destination: "mortCuisine" }
        ]
    },

    // Chapitre temporaire
    compagnon: {
        titre: `Compagnon`,
        description: `Qui avez vous appelez avant votre investigation ?`,
        image: "../assets/image/compagnon.jpg",
        buttons: [
            { titre: "Domino's", destination: "finPizza" },
            { titre: "Personne", destination: "finSolo" },
            { titre: "Professionels", destination: "finPro" }
        ]
    },

    // Chapitre finale, fin acceptable, si chapitre 2 choix 1
    finPizza: {
        titre: "Fin Acceptable",
        description: "Quelqu'un sonne à la porte. Peu après, le fantôme libère un cri de douleur. Le livreur de pizza a défoncé le fantôme car il n'a pas été donné un pourboire. Malheureusement pour vous, le livreur de pizza se fait payer pour s'avoir occuper du fantôme... Vous avez au moins de la pizza...",
        image: "../assets/image/end-pizza.jpg",
        buttons: [
            { titre: "Recommencer", destination: "begin" }
        ]
    },

    // Chapitre finale, bonne fin, si chapitre 2 choix 2
    finSolo: {
        titre: "Bonne Fin",
        description: "Vous attendez pour attaquer le fantôme depuis derrière. Il s'enfuit de la maison. Vous avez réussi ! Mais votre client a maintenant une bosse sur la tête...",
        image: "../assets/image/end-solo.jpg",
        buttons: [
            { titre: "Recommencer", destination: "begin" }
        ]
    },

    // Chapitre finale, mauvaise fin, si chapitre 2 choix 3
    finPro: {
        titre: "Mauvaise Fin",
        description: "Les professionels arrivent et, croyant que vous êtes le monstre, vous arrêtes. Même dans votre cellule dans la prison, vous entendez le cri du chien des professionnels... SCOOBY-DOO-BY DOOO !",
        image: "../assets/image/end-scooby.jpg",
        buttons: [
            { titre: "Recommencer", destination: "begin" }
        ]
    },

    // mort chapitre 3
    mortCuisine: {
        titre: "Trouvé !",
        description: "Vous vous cachez derrière un comptoir dans la cuisine, mais, malheureusement pour vous, le fantôme a décidé de vérifiez la cuisine en premier comme salle. Il vous trouve et vous étrangle...",
        image: "../assets/image/mort-cuisine.jpg",
        buttons: [
            { titre: "Recommencer", destination: "begin" }
        ]
    },

    // première mort chapitre 2
    mortRien: {
        titre: "...Quoi ?",
        description: "Vous ne faites... rien ? Le fantôme vous étrangle. Vous vous attendiez à quoi exactement ?",
        image: "../assets/image/mort-rien.jpg",
        buttons: [
            { titre: "Recommencer", destination: "begin" }
        ]
    },

    // deuxième mort chapitre 2
    mortDistraction: {
        titre: "Distraction !",
        description: "Vous tentez de distraire le fantôme en dansant. Peut-être que ça va le rendre confus ! ... il s'approche de vous et vous casse le cou. Vous n'auriez probablement pas avoir fait une dance Fortnite...",
        image: "../assets/image/mort-distraction.jpg",
        buttons: [
            { titre: "Recommencer", destination: "begin" }
        ]
    },
}

// liste de variables
let chapterTitle = document.querySelector("#chapter");
let chapterDescription = document.querySelector("#text");
let chapterImg = document.querySelector("#image");
// les Twists
let pizza = false;
let solo = false;
let mysteryInc = false;

function goToChapter(chapterKey) {
    if (chaptersObj[chapterKey]) {
        const chapterInput = chaptersObj[chapterKey];
        chapterTitle.innerHTML = chapterInput.titre;
        chapterDescription.innerHTML = chapterInput.description;
        chapterImg.src = chapterInput.image;
        
        // twist
        if (chapterInput === chaptersObj.begin){
            pizza = false;
            solo = false;
            mysteryInc = false;
        }

        if (chapterInput === chaptersObj.confrontationPizza){
            pizza = true;
            solo = false;
            mysteryInc = false;
        }

        if (chapterInput === chaptersObj.confrontationSolo){
            pizza = false;
            solo = true;
            mysteryInc = false;
        }

        if (chapterInput === chaptersObj.confrontationPro){
            pizza = false;
            solo = false;
            mysteryInc = true;
        }

        // Fin Twist
        if (pizza === true){
            chaptersObj.cachette = {
                titre: `Cache-Cache`,
                description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
                image: "../assets/image/cachette.jpg",
                buttons: [
                    { titre: "Chambre", destination: "finPizza" },
                    { titre: "Garage", destination: "finPizza" },
                    { titre: "Cuisine", destination: "mortCuisine" }
                ]
            }
        }

        if (solo === true){
            chaptersObj.cachette = {
                titre: `Cache-Cache`,
                description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
                image: "../assets/image/cachette.jpg",
                buttons: [
                    { titre: "Chambre", destination: "finSolo" },
                    { titre: "Garage", destination: "finSolo" },
                    { titre: "Cuisine", destination: "mortCuisine" }
                ]
            }
        }

        if (mysteryInc === true){
            chaptersObj.cachette = {
                titre: `Cache-Cache`,
                description: `Vous fuiez du fantôme, mais il vous poursuis à grande vitesse. Au lieu de continuer à fuir, vous décidez que se cacher serait la meilleure solution pour survire, mais où se cacher ?`,
                image: "../assets/image/cachette.jpg",
                buttons: [
                    { titre: "Chambre", destination: "finPro" },
                    { titre: "Garage", destination: "finPro" },
                    { titre: "Cuisine", destination: "mortCuisine" }
                ]
            }
        }

        const boutons = document.querySelector('#button-container'); 
		while (boutons.firstChild) { 
  		boutons.removeChild(boutons.firstChild); 
		} 

		for (let i = 0; i < chapterInput.buttons.length; i++) { 
			const nouveauBtn = document.createElement('button'); 
            nouveauBtn.setAttribute("class", "choice");
			nouveauBtn.textContent = chapterInput.buttons[i].titre; 
			nouveauBtn.addEventListener('click', function() {
                goToChapter(chapterInput.buttons[i].destination);
            });
			boutons.appendChild(nouveauBtn); 
		  }; 
	} else {
        console.log("...you broke it.");
    }
}

goToChapter("begin");
