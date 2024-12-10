const visit = async (page) => {
    // Étape 1 : Aller sur la page de la section Sport
    await page.goto('/recipes/Sport', {
        waitUntil: 'networkidle',
    });

    await Promise.all([
        // Étape 2 : Attendre que l'input de recherche soit chargé
        page.waitForSelector('.search-input'),

        // Étape 3 : Taper un mot-clé dans la barre de recherche
        page.type('.search-input', 'ultrices'),

        // Étape 4 : Attendre que les résultats filtrés apparaissent
        page.waitForTimeout(2000),
    ]);

    // Étape 5 : Vérifier la présence d'au moins un résultat
    const results = await page.$$('.recipe-card');
    if (results.length === 0) {
        throw new Error('Aucun résultat trouvé pour "Salade"');
    }
    await Promise.all([
        // Étape 6 : Attendre quelques secondes avant de terminer
        page.waitForTimeout(5000)
    ]);

};

module.exports = visit;