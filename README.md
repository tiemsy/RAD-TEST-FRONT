# Instructions :

Vous avez besoin d'aucune installation pour faire tourner la page. J'ai utilisé les cdn pour les JS et CSS.

J'ai plutôt pensé au resultat final qu'à l'optimisation du code sinon je pourrais le faire autrement en explorant par exemple $('form').validate() avec la gestions des rules.

# Consignes :

Forkez le projet et reproduire le formulaire `screen.png` (uniquement la page web, pas le background en pointillé ni les couleurs sur la droite) pour une vue : Desktop (gestion du widescreen), Tablette, Mobile en l'adaptant à votre goût pour que le formulaire soit utilisable et ergonomique sur tous les devices.

Vous êtes libres d'utiliser les libraries (JS / CSS / HTML) que vous souhaitez.

Les assets et images ne sont pas fournies. Réutilisez une bibliothèque d'icônes et si besoin des screens de l'image existante pour intégrer les logos.

Les deux encarts sont des menus déroulants lorsque l'on clique sur les headers (titre + flèche en haut à droite).

Le premier encart dispose :
- d'un encart "Date" qui respectera la regex DD/MM/YYYY et disposera le texte sous la forme "DD/MM/YYYY" même en ne spécifiant pas le "/". Il n'est pas possible d'entrer autre chose qu'un chiffre dans ce menu.
- d'un encart "Heure" qui respectera la regex HH:MM et disposera le texte sous la forme "HH:MM" même en ne spécifiant pas le ":". Il n'est pas possible d'entrer autre chose qu'un chiffre dans ce menu.
- d'un menu radio avec le 3ème disable.

Le deuxième encart dispose :
- D'un dropdown qui aura 2 options fictives (Evenement interne + un autre au choix).
- Nombre de partipant est un dropdown menu de 1 à 10. Il est également possible d'entrer un chiffre entre 1 et 10 directement.
- L'area "NOM" sera capitalisé directement lorsqu'une lettre est détectée.
- L'area "Prénom" aura directement la première lettre capitalisée.
- Direction sera un dropdown menu comportant "Option 1" et "Option 2".

Sauvegarder active un console.log() qui loggera toutes les variables du formulaire dans la console, ainsi qu'une modale de validation utilisant la librarie : https://sweetalert2.github.io/

Merci de me renvoyer le lien de votre fork (repository public).

Typographies : Pluto / OpenSans.
