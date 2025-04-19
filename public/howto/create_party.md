# Comment déclarer un parti sur le serveur ?

 

Pour qu'un parti soit officiellement reconnu, il vous faudra le déclarer au système du serveur. Ce tutoriel est là pour vous expliquer la démarche nécessaire afin de déclarer un parti, mais aussi plusieurs conseils pour éviter les mauvaises surprises. Mais n'oubliez pas: les techniques fournies ici sont universelles, donc tous les partis sont susceptibles de les utiliser. Démarquez-vous, innovez, trouvez vos idéaux et soyez fidèles à eux ; vous serez aux portes du pouvoir !



> **Note:** Vous pourrez créer votre parti même avec un casier judiciaire non-vide. Néanmoins, vous ne serez pas en mesure de vous inclure dans la liste des candidats de ce parti.

## 1. Pensez votre parti

Une fois la procédure initiale entamée, vous n'avez que 48h pour trouver un deuxième membre, et le nombre requis est susceptible d'augmenter au fur et à mesure des semaines. Il est donc recommandé d'arriver accompagné avant de créer le parti. Pour se faire, diffusez vos idéaux, jusqu'à les crier sous tous les toits. Certains médias privés pourront vous offrir une occasion de vous exprimer, de faire votre pub: ne la laissez pas passer. 



Comme dit plus haut, il faut que vous ayez au moins une idéologie solide à défendre, et des gens non seulement prêts à voter pour vous, mais des gens prêts à vous épauler ! La fanbase c'est bien, mais les piliers c'est mieux. 

Ensuite, trouvez une identité à votre parti, une devise, etc...

- Le nom de votre parti peut être attaché à votre idéologie comme au groupe de personnes concernés par cette idéologie, ou encore le groupe de personnes qui défend cette idéologie (ex. Parti Communiste, Lutte Ouvrière, Europe Écologie les Verts...). Veillez à ne pas prendre un nom trop proche d'un autre parti: en plus de vous valoir des poursuites judiciaires, le risque que vos électeurs votent pour votre homonyme est bien trop élevé.
- Prenez des couleurs qui correspondent à votre idéologie. Le rouge représente habituellement des idéaux révolutionnaires et anti-taoxistes, tandis que le bleu remplit plutôt des idéaux nationalistes. Bien évidemment, les couleurs ne définissent pas les idéaux: vous pouvez très bien prendre du rouge et être totalement contre la révolution, c'est votre idéologie qui intéressera les gens, la couleur n'est qu'une facette.
- Vous pouvez également choisir une devise qui accompagne votre parti.



Une fois que vous aurez suivi toutes ces étapes, votre parti sera créé.



## 2. Déclarez officiellement votre parti

Maintenant que votre parti est créé, il reste à le déclarer. Car aussi populaire qu'il puisse être, il est encore inexistant d'un point de vue légal. Pour le déclarer, il suffit d'entrer la commande `/create_party` du bot **Hôtel de Ville**, puis vous devrez suivre les instructions en suivant les champs demandés:



- Nom du parti
- Couleur de référence (optionnelle)
- Devise (optionnelle)
- Discours d'accroche



> **Note:** Il vous sera demandé un discours d'accroche de maximum 1000 caractères. Présentez votre parti et décrivez-y vos revedications.



Une fois votre parti déclaré, vous aurez accès à un canal d'informations spécialisé dans le forum des partis



## 3. Trouvez vos membres

Maintenant que votre parti est créé, vous pouvez [le gérer comme un groupe normal](/legal/howto/manage_orgs).

Vous avez 48h pour trouver un **deuxième membre**, sans quoi votre parti sera officiellement rétrogradé au stade d'organisation simple. Si les choses ont bien été faites, vous avez déjà ce membre sous la main, peut-être même d'autres membres supplémentaires. Il vous suffit de les inviter par le procédé habituel d'invitation:

**Bot Communauté** > `/edit group <NSID>` > **Inviter un membre** 


Une fois ces membres ajoutés, votre parti est éligible à ces élections.



## 4. Candidatez aux élections

Avant chaque début d'élection, vous devez déposer votre candidature au bot (sauf si vous ne souhaitez pas y participer). Pour y procéder, rendez-vous sur le protail suivant:

**Bot HDV** > `/candidate`



Ce portail vous indique votre éligibilité aux diverses élections ou aux postes du gouvernement. Vous aurez la possibilité de sélectionner une option parmi plusieurs:

- **Candidater aux présidentielles:** Cette option permet de vous présenter aux présidentielles. Une profession de foi vous sera demandée, votre parti sera automatiquement renseigné si vous en avez un.
- **Candidater aux législatives:** C'est cette option qui nous intéresse. Elle permet de présenter votre parti aux prochaines élections législatives et n'est disponible que pour les chefs de partis. Cette fois, vous devrez renseigner une liste de députés **rangée par ordre de priorité**, ce sont les députés que vous souhaitez mettre au pouvoir. Vous n'êtes pas obligé de tous les renseigner, le cas échant on prendra vos députés non-renseignés en les classant par ordre croissant de NSID.
- **Candidater en tant que fonctionnaire:** Cette demande s'adresse directement au Président de la République. Vous devrez renseigner une profession de fois indiquant les missions que vous visez, et un rôle de fonctionnaire vous sera peut-être donné en fonction de ces missions. Vous pouvez aussi directement demander un rôle précis.


> Concernant la liste des députés: Le fonctionnement est simple. Considérons ces nombres comme des députés: 1, 5, 4, 2, 6 et vous représentez le nombre 3. Si vous proposez une liste dans l'ordre ci-dessus et que seuls trois sièges vous sont accordés, les députés 1, 5 et 4 auront un siège, mais le député 2 et vous-même n'en auront aucun. 
> 
> En revanche, si vous donnez une liste de 3 députés (1, 3, 2) et que 5 sièges vous sont accordés, alors les députés 4 seront choisis par ordre croissant mais le député 6, lui, ne sera pas choisi car il vient après.