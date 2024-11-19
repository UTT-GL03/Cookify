# Cookify
Cookify est une plateforme dédiée aux amateurs de cuisine à la recherche de recettes responsables et accessibles.
# Choix du sujet
Nous avons choisi de créer Cookify en raison de la montée en popularité des plateformes culinaires en ligne et de l'engouement croissant pour la cuisine maison. Nous sommes dans un monde où l'alimentation saine, diversifiée et respectueuse de l'environnement prend une place importante. Il nous semble alors essentiel de donner à tout le monde l'opportunité de pouvoir trouver des recettes à leur goût et respectant leur valeurs. Ce prototype vise donc à fournir des idées que les plateformes majeures pourraient intégrer pour offrir des options plus durables et éco-responsables.
# Utilité sociale
L’utilité sociale de ce projet réside dans sa capacité à proposer une alternative plus durable et plus saine aux recettes que nous avons l’habitude de cuisiner au quotidien. Ce projet permettra de limiter la pollution grâce à des recettes adaptées aux enjeux actuels. En rendant notre prototype public, nous espérons que les plateformes établies pourront adopter certaines de ses idées, telles que : 
- permettre l'exploration des cultures à travers la cuisine et le partage de savoir-faire
- Encourager les habitudes alimentaires saines et responsables
- Renforcer les liens entre les utilisateurs
- Offrir une plateforme allégée, sans publicité, qui met en avant l’essentiel pour l’utilisateur
# Effet de la numérisation
L'impact de la numérisation sur le partage de recettes est double. En remplaçant les livres de cuisine par des services en ligne, nous facilitons l'accès à une vaste base de données de recettes, mais augmentons aussi la consommation de ressources numériques. Ce prototype vise à inspirer une approche plus éco-responsable pour les services existants en mettant l’accent sur :
- Accès facilité à une large base de recettes, accessible à toute heure et partout dans le monde.
- Développement de communautés culinaires en ligne, encourageant les échanges de savoirs et de conseils.
- Incitation à une utilisation raisonnée grâce à des fonctionnalités éco-responsables (algorithmes optimisés, recherche rapide).
- Réduction de l’empreinte carbone numérique par la sensibilisation des utilisateurs à des pratiques durables (réduction du temps de navigation, gestion optimisée des ressources).
# Scénarios d'usage et impacts
Nous partons de l'hypothèse que les utilisateurs visitent les sites de recettes principalement dans le but de découvrir de nouvelles idées de repas, de trouver des recettes spécifiques, ou de s'inspirer pour leur prochain repas. Ces visites peuvent se produire à tout moment de la journée, notamment lors de pauses ou pendant la préparation des repas.
<!-- # Scénario 1 : "Consulter la liste recettes de la page d'accueil"
1. L’utilisateur se rend sur le site internet
2. L’utilisateur accède à la page d'accueil où sont affichés un certains nombre de recette
3. L'utilisateur consulte toute les recettes de page d'accuei en scrollant en bas de la page -->
# Scénario 1 : "L'utilisateur souhaite consulter une recette"
1. L'utilisateur se rend sur la page d'accueil
2. Il regarde la liste des recettes qui lui sont proposées
3. Il choisit une recette au hasard et il l'a consulte
4. Il retourne à la page d'accueil
# Scénario 2 : "L'utilisateur souhaite consulter une recette en particulier"
1. L'utilisateur se rend sur la page d'accueil
2. Il recherche une recette en particulier dans l'index ou dans la barre de recherche
3. Il consulte la recette
4. Il retourne à la page d'accueil
# Impact de l'exécution des scénarios auprès de différents services concurrents
L'EcoIndex d'une page (de A à G) est calculé (sources : EcoIndex, Octo, GreenIT) en fonction du positionnement de cette page parmi les pages mondiales concernant :
- le nombre de requêtes lancées,
- le poids des téléchargements,
- le nombre d'éléments du document.

Nous avons choisi de comparer l'impact des scénarios sur les services de quotidiens nationaux de diverses sensibilités politiques, économiques et environementales :
- Marmiton
- Cuisine AZ
- PtitChef

Vous pouvez accéder au résultat en cliquant sur le lien suivant (attention, d'une journée à l'autre, on peut observer une certaine variabilité) : [résultats](https://htmlpreview.github.io/?https://raw.githubusercontent.com/UTT-GL03/Cookify/refs/heads/main/benchmarks/results.html)

## Maquette de l'interface et échantillon de données

Au vu des différents services comparés, des exigences environnementales exprimées plus haut et des scénarios retenus, nous avons défini pour notre prototype une maquette de l'interface et un échantillon de données réalistes.

L'interface retenue est composée de trois types de "pages Web" :

- la page d'accueil composée des types de programme de recette (Pour le sport, pour les végétariens, pour le plaisir,etc...),
- la page composée des recettes disponibles d'un des programmes,
- La page d'une recette.

![Maquette de la page d'accueil](./frontend/mockup_page_accueil.png)
__Fig.1__: Maquette de la page d'accueil

![Maquette de la liste de recette](./frontend/mockup_liste_recette.png)
__Fig.2__: Maquette de la liste de recette après avoir cliqué sur un programme 

![Maquette de la recette](./frontend/mockup_recette.png)
__Fig.3__: Maquette d'une recette

Pour des raisons de respect des droits d'auteurs, nous utilisons des données générées (avec [`dummy-json`](https://dummyjson.com)).
Bien que fictives, ces données correspondent à la structure des services concurrents : 10 recettes comportant un titre, son programme, son temps de préparation, sa difficulté, ses ingrédients et ses étapes(voir [modèle de données](./frontend/sample_data.hbs)). 
Dans un objectif de sobriété environnementale, les photos ont été limités au maximum et le nombres de recettes limités à 30 par programme.

# Prototype n°1 : Fonctionnalités pour le scénario prioritaire avec données statiques

Pour cette première version du prototype :

- l'échantillon de données est encore chargé dans le code de manière statique,
- les fonctionnalités implémentées ne sont que celles nécessaires pour suivre le scénario prioritaire ("Lire une recette").

## Page de selection des categories

La page de sélection des catégories est conçue pour offrir aux utilisateurs un point d'entrée intuitif vers les différentes recettes disponibles en fonction de leurs préférences ou besoins. Dans cette page nous avons fait le choix de ne pas inclure d'image afin de rendre la page plus légère et plus respectueuse de l'environnement.

![page des categories](./frontend/categories.png)
__Fig.4__: Page de choix des categories

## Page de présentation des différentes recettes

Nous avons développé la page d'accueil pour qu'elle affiche l'échantillon de données sous une forme proche de ce que prévoyait la maquette.

![page d'accueil](./frontend/page_accueil.png)
__Fig.5__: Page d'accueil

Pour l'intant, notre design est minimaliste. Dans la suite du projet, nous verrons si l'impact environnemental du passage à un framework de mise en page plus puissant (comme Bootstrap) est acceptable.

De même, nous avons décidé, contrairement à l'ensemble des services concurrents, de ne pas inclure de photographies dans cette page. Même si ces photographies ont probablement un impact sur l'attention portée à une recette, elles ne sont pas strictement requises pour la consultation des recettes et ne sont donc pas incluses dans le produit minimum viable. Si une telle fonctionnalité devait par la suite être introduite, il faudrait mettre en balance son utilité et son impact a priori important. En effet, à moins de mettre en place des techniques avancées d'optimisation (et possiblement ambivalentes) comme les sprites en CSS ou le multiplexage dans HTTP/2 (cf. Wikipédia), une requête supplémentaire est nécessaire pour chaque image.

Dans l'état actuel du prototype, il est possible d'avoir une première idée de l'impact environnemental du frontend. Bien entendu, il manque encore le chargement dynamique des données, mais nous pouvons déjà évaluer l'impact de l'affichage des données et du framework (au sens large : React, DayJS). Cette évaluation de l'impact (cf. Tab.1) est déjà encourageante en mode "développement" mais encore plus en mode "pré-production". Nous mesurons ici l'effet positif de l'adoption d'outils de développement Web intégrant la "minification" (cf. Wikipédia) du code et la concaténation du code d'une part et des feuilles de style d'autre part.

|   | EcoIndex| GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko)
|---|--------:|------------:|--------------:|---------:|---------------------:
| Mode "développement"  | 85.20 A🟢 |  1.30 | 28 | 23 | 1523
| Mode "pré-production" | 95.56 A🟢 | 1,09 | 23 | 5 | 59

__Tab.1__: Évaluation de l'impact du prototype de la page d'accueil.

### Pages d'information d'une recettes

Les pages des recettes ont pour HTTP-URI `/{id}`.
Comme l'écahntillon de données ne comportait pas d'identifiants pour les recettes, nous avons adopté pour l'intant leur titre en tant qu'identifiant.

De même que précédemment, nous avons tenté d'implémenter cette page (cf. Fig. 3) conformément à ce que prévoyait la maquette.

![page info recettes](./frontend/info_recette.png)
__Fig.6__: Page de la recette

Avec l'ajout de ce modèle de page et la mise en place de la navigation entre les deux modèles, il devient possible d'exécuter le scénario prioritaire complet et de mesurer son impact.

|   | EcoIndex| GES (gCO2e) | Taille du DOM | Requêtes | Taille de la page (ko)
|---|--------:|------------:|--------------:|---------:|---------------------:
| 1. Choisir la categorie 					   | 95.69 A🟢 | 1,09 | 23 | 4 | 59
| 2. Choisir et lire une recette 			   | 95.69 A🟢 | 1,09 |  23 | 4 | 59
| 3. Revenir à la page de choix des categories	| 95.69 A🟢 | 1,09 | 23 | 4 | 59

__Tab.2__: Évaluation de l'impact du scénario "Lire des recettes parmi les recettes du jour" dans le prototype n°1.

Ces estimations bien qu'artificiellement basses (puisque les données sont chargées de manière statique) sont tout de même à comparer avec celle des site différents

Si nous arrivons à maintenir les émissions en dessous de 1,5 g pour notre produit minimum viable, nous pouvons donc espérer proposer une alternative 2 à 3 fois moins impactante que les services existants.

## Prototype n°2 : Fonctionnalités pour le scénario prioritaire avec données statiques chargées de manière dynamique

Pour cette deuxième version du prototype, les données (toujours statiques) sont désormais chargées par le *frontend* à travers le réseau immédiatement après un premier affichage à vide.
Ce comportement, plus réaliste, n'a pour effet qu'une requête supplémentaire par page affichée.

Concernant l'évaluation de l'impact environemental du scénario, par rapport au tableau précédent (cf. Tab.2), à l'exception du nombre de requêtes qui est incrémenté de 1, les résultats sont strictement identiques. D'ailleurs, à partir de cette version, et à moins de changements profonds, l'EcoIndex ne devrait plus évoluer de manière significative. Nous utiliserons désormais un autre logiciel, GreenFrame, qui évalue non pas l'impact "environné" de la consultation (incorporant une participation au cycle de vie du terminal) mais celui de la consultation proprement dite (cf. Tab.3) et de manière beaucoup plus fiable à partir des statistiques d'utilisation des ressources physiques (CPU, mémoire, réseau, disque).

| | Impact de la consultation des recettes | Impact de la consultation d'une recette
|--------------|----:|---------:
| Papilles et pupilles  | 72     | 92
| Cuisine Actuelle   | 65     | 92
| PtitChef     | 138     | 151
| CuisineAZ     | 60     | 69
| Marmiton   | 94      | 115
| __Cookify__ | __31__  | __31__

__Tab.3__ : Impact en mg CO2e de la consultation proprement dite des pages des services existants et de notre prototype.

Pour les services existants, sur le graphique présentant l'utilisation dans le temps des ressources (cf. Fig.4), on constate d'autres pics que le pic initial, probablement associés au chargement et à l'affichage de contenus multimédias et de publicités, ou causés par des techniques de pistage sur le Web.

![Impact de site de recette Marmiton] (./benchmark/Marmiton_homepage.png)
__Fig.4__: Consommation de ressource lors de la consultation de la page des recettes de *Marmiton*.

Pour notre prototype, au contraire, le graphique (cf. Fig.5) présente un unique pic significatif de consommation de CPU et de réseau.
Notons par ailleurs que le pic de CPU est 25 fois plus faible que celui de la figure précédente.
Par ailleurs, nous remarquons que cette consommation ne compte que pour 7% de la consommation totale, le reste étant consommé par l'écran durant la durée de la mesure.

![Impact du prototype](./benchmark/Cookify_homepage.png)
__Fig.5__ : Consommation de ressources par le navigateur lors de la consultation de la page des titres dans notre prototype.

Par ailleurs, il nous est possible désormais d'évaluer l'impact écologique de la partie "serveur", possiblement hébergée par un *data center* (cf. Fig.6).
Réduite au simple hébergement de données statiques sur un serveur Web, cette partie a pour l'instant un impact très faible et quasi négligeable (3%) par rapport à la partie "client" . 

![Impact du prototype](./benchmark/Cookify_homepage_static_hosting.png)
__Fig.6__ : Consommation de ressources par le serveur Web lors de la consultation de la page des titres dans notre prototype.
