
(function(){
  const params = new URLSearchParams(window.location.search);
  const categorie = params.get("categorie");
  const container = document.querySelector('.projets-container');
  const projets = Array.from(document.querySelectorAll('.carte-projet'));

  function applyFilter() {
    const visible = categorie ? projets.filter(p => p.dataset.categorie === categorie) : projets.slice();

    projets.forEach(p => {
      const shouldShow = visible.includes(p);
      p.style.display = shouldShow ? '' : 'none';

      const descDefault = p.querySelector('.desc-default');
      const descCompetence = p.querySelector('.desc-competence');
      if (categorie && descDefault && descCompetence) {
        descDefault.style.display = 'none';
        descCompetence.style.display = 'block';
      } else {
        if (descDefault) descDefault.style.display = '';
        if (descCompetence) descCompetence.style.display = 'none';
      }
    });

    centerVisibleProjects(visible);
  }

  function centerVisibleProjects(visible) {
    if (!container) return;

    // Reset styles
    container.style.width = '';
    container.style.margin = '';

    if (visible.length === 0) return;

    if (visible.length >= 3) {
      // 3 projets ou plus → on garde le grid normal
      return;
    }

    // Si 1 ou 2 projets → calcul largeur totale
    const cardWidth = visible[0].offsetWidth;
    const gap = parseFloat(getComputedStyle(container).gap) || 20;
    const totalWidth = visible.length * cardWidth + (visible.length - 1) * gap;

    container.style.width = totalWidth + 'px';
    container.style.margin = '0 auto'; // centre horizontalement
    container.style.display = 'flex';  // force flexbox quand peu de projets
    container.style.justifyContent = 'center';
  }

  if (container) {
    applyFilter();
    window.addEventListener('resize', () => {
      const visibleNow = projets.filter(p => p.style.display !== 'none');
      centerVisibleProjects(visibleNow);
    });
  }
})();


