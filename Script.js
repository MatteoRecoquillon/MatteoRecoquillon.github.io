// Variable globale pour se souvenir de ce qui est ouvert
let categorieActive = null;

function filtrerProjets(categorieChoisie) {
    const tousLesProjets = document.querySelectorAll('.carte-projet');
    const container = document.getElementById('zone-projets');

    // --- CAS 1 : On clique sur la catégorie DÉJÀ ouverte (On ferme tout) ---
    if (categorieActive === categorieChoisie) {
        
        // On cache tous les projets
        tousLesProjets.forEach(projet => {
            projet.classList.add('hidden');
            projet.classList.remove('fade-in');
        });

        // On cache le conteneur global pour remonter la page proprement
        container.style.display = 'none';
        
        // On réinitialise la mémoire
        categorieActive = null;
        
        return; // On arrête la fonction ici, on ne fait rien d'autre
    }

    // --- CAS 2 : C'est une NOUVELLE catégorie (On affiche) ---
    
    // On met à jour la mémoire avec la nouvelle catégorie
    categorieActive = categorieChoisie;

    // On s'assure que le conteneur est visible (Grid ou Flex selon ton CSS)
    container.style.display = 'grid'; 

    tousLesProjets.forEach(projet => {
        // On récupère la catégorie de la carte
        const categorieProjet = projet.getAttribute('data-categorie');

        if (categorieProjet === categorieChoisie) {
            // C'est la bonne catégorie : on affiche
            projet.classList.remove('hidden');
            
            // Petite astuce pour relancer l'animation
            void projet.offsetWidth; 
            projet.classList.add('fade-in');
        } else {
            // Ce n'est pas la bonne : on cache
            projet.classList.add('hidden');
            projet.classList.remove('fade-in');
        }
    });

    // Scroll automatique vers les projets
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


