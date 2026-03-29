// --- FONCTION EXISTANTE : FILTRAGE DES PROJETS ---
let categorieActive = null;

function filtrerProjets(categorieChoisie) {
    const tousLesProjets = document.querySelectorAll('.carte-projet');
    const container = document.getElementById('zone-projets');

    if (categorieActive === categorieChoisie) {
        tousLesProjets.forEach(projet => {
            projet.classList.add('hidden');
            projet.classList.remove('fade-in');
        });
        container.style.display = 'none';
        categorieActive = null;
        return;
    }

    categorieActive = categorieChoisie;
    container.style.display = 'grid'; 

    tousLesProjets.forEach(projet => {
        const categorieProjet = projet.getAttribute('data-categorie');
        if (categorieProjet === categorieChoisie) {
            projet.classList.remove('hidden');
            void projet.offsetWidth; 
            projet.classList.add('fade-in');
        } else {
            projet.classList.add('hidden');
            projet.classList.remove('fade-in');
        }
    });

    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

