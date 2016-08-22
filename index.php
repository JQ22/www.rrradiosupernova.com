<?php
$page_title = "Rrradio Supernova";
?>

<!doctype html>
<html>
<head>
    <?php
    include "include/header.php";
    echo "<title>" . $page_title . "</title>";
    ?>
</head>

<body ng-app="app">
  <div class="receiver">
    <div class="swiper-container">
      <div class="swiper-wrapper">



        <!-- POETICUS MORDICUS -->
        <div class="swiper-slide clearfix" data-hash="poeticusmordicus">
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover11.png')">

            <div plangular="https://soundcloud.com/supernovaeditions/radio-supernova-5-poeticus-mordicus-part-1" class="player" >
              <button ng-click="playPause()" class="play-button">
                <svg class="icon" data-icon="play" viewBox="0 0 32 32"><path d="M4 4 L28 16 L4 28 z "></path></svg>
              </button>
              <div class="waveform-ctnr">
                <div class="progress" style="width:{{ 100 * (currentTime / duration) || 0 }}%"></div>
                <div class="seek-zone" ng-click="seek($event)"></div>
                <img class="waveform" ng-src="{{ track.waveform_url }}" alt="waveform" />
              </div>
            </div>

          </div>
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">poeticus mordicus</h1>
              <span class="date">25 juin 2016</span>
              <div class="plus">
                <p>
                  PART 1 <br>
                  Marius Loris <br>
                  Marin Fouqué <br>
                  Anna Serra <br><br>
                  PART 2 <br>
                  Marie Möör <br>
                  Sébastien Lespinasse <br>
                  Laurie Bellanca
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- BRUISSONNANTES -->
        <div class="swiper-slide clearfix" data-hash="bruissonnantes">
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover10.png')">
            <div plangular="https://soundcloud.com/supernovaeditions/radio-supernova-5-poeticus-mordicus-part-1" class="player" >
              <button ng-click="playPause()" class="play-button">
                <svg class="icon" data-icon="play" viewBox="0 0 32 32"><path d="M4 4 L28 16 L4 28 z "></path></svg>
              </button>
              <!-- <progress
                ng-click="seek($event)"
                ng-value="currentTime / duration || 0">
              </progress> -->
            </div>
          </div>
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">bruissonnantes</h1>
              <span class="date">11 mars 2016</span>
              <div class="plus">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <br>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </div>
            <div class="lecteur">


            </div>
          </div>
        </div>

        <!-- ZUZANA -->
        <div class="swiper-slide clearfix" data-hash="zuzanahusarova">
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover8.png')">
            <div plangular="https://soundcloud.com/supernovaeditions/radio-supernova-5-poeticus-mordicus-part-1" class="player" >
              <button ng-click="playPause()" class="play-button">
                <svg class="icon" data-icon="play" viewBox="0 0 32 32"><path d="M4 4 L28 16 L4 28 z "></path></svg>
              </button>
              <!-- <progress
                ng-click="seek($event)"
                ng-value="currentTime / duration || 0">
              </progress> -->
            </div>
          </div>
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">stela /// zuzana husarova</h1>
              <span class="date">19 mars 2016</span>
              <div class="plus">
                <p class="italic">
                  Thus, liminality is frequently likened to death, to being in the womb, to invisibility, to darkness, to bisexuality, to the wilderness, and to an eclipse of the sun or moon. <br>
                  Victor Turner, The Ritual Process: <br> Structure and AntiStructure, 1969. in <a target="_blank" href="http://zuz.delezu.net/">zuz.delezu.net</a>
                </p>
                <br>
                <p>
                  <h3>questions pour zuzana husarova</h3>
                  <h4>par Anna Serra, jan. 2016</h4>
                </p>
                <br>
                <article>
                  <p>1- A quoi	peut	bien	ressembler	un	cours	de	littérature	électronique ?</p>
                  <br>
                  <p>2- Pourrais-tu	nous	donner	quelques	titres	de	tes	leçons </p>
                  <br>
                  <p>3- Que	reste-t-il	de	la	littérature	dans	la	littérature électronique	?</p>
                  <br>
                  <p>4- Est-ce	un	dépassement	des	limites de	la	littérature ?	Ou	bien	la	découverte	d’ouvertures	que	la	littérature	offre dès	lors	qu’on	considère	celle-ci	comme	une	forme	génératrice	d’autres	formes,	comme	un	espace	sémantique,	comme	un	code	et	un	support	d’un	code,	comme	une	corde	faisant	vibrer	un	réseau	culturel	?</p>
                  <br>
                  <p>5- La	littérature n’étant	pas	le	seul	espace	d’exploration	et	de	compréhension	du	fonctionnement	du	langage,	tu	t’intéresses	en	même	temps	à	d’autres	médias,	tu	fais	du	multimédia	mais	aussi	du transmedia	avec	le	projet	LIMINAL	et	LUCENT.	Peux-tu	nous	expliquer ce	qu’est	le	transmedia ?</p>
                  <br>
                  <p>6- Tu	manipules	le	son	guidée	par	deux	concepts,	celui	du	seuil	et	de	la	lumière,	LUMINAL	et	LUCENT.	Quand	j’ai	découvert	les	différentes	pièces	du	puzzle	Lucent,	j’ai	cru	découvrir	le	poids	du	son,	sa	gravité.	En	écoutant	plus	spécifiquement	ta	création	sonore	pour	le	FESTIVAL	O	DE	BRATISLAVAque	tu	as	organisé	en	2015,		j’ai	eu	l’impression	d’écouter	un	espace	abstrait	commun,	un	espace	dans	lequel	mon	corps	n’avait	pas	le	même	poids,	la	succession	de	rythmes	crée des	dimensions	nouvelles,	nouvelles	mais	je	semblais	les	reconnaître	car	une	autre	mémoire	est	sollicitée.		Pendant	l’expérience	que	je	fais	de	tes	créations	sonores,	les	combinaisons	de	sons	que	j’entends	sont	expressives,	abstraites	et	libres	de	référent	et	c’est	pourquoi	ces	ensembles	de	sons trouvent	un	espace	inédit	en	moi.Selon	toi,	la	création	est	le	moyen	d’être	au	bord	d’un	autre	état	de	perception,	un	autre	état	de	visibilité.	Comment	la	création	multimédia	permet-elle	de ne	plus	être	en	avant	de	l’espace,	de	ne	pas	avancer	dans	l’espace	mais	de	se	fondre	dans	l’arrière-plan	de	l’espace,	permet-elle	un	nouveau	déplacement ?	En	suscitant	un	nouvel	état	sensoriel ?</p>
                  <br>
                  <p>7- Quand	tu	donnes	une	performance,	le	choix	du	lieu	est-il	important,	le prends-tu	en	compte	ou	bien	s’agit-il	seulement	d’appréhender	un	espace	virtuel	amené	par	ta	manipulation	des	machines ?</p>
                  <br>
                  <p>8- Quels	sont	tes	outils ?	Crées-tu	uniquement	à	partir	des	modèles	signifiants et	des	effets	de	la	machine ?	La	machine	te	permet-elle	d’imaginer	et	de	trouver	une	inspiration	particulière ou	au contraire	t’empêche-t-elle	de	partager	certaines	visions ?</p>
                  <br>
                  <p>9- Quel	livre	liras-tu	à	ton	enfant qui	va	naître	?</p>
                  <br>
                  <p>10- Enfin,	si	je	devais	choisir	un	mot	pour	décrire	ta	posture	poétique,	pour	décrire	ta	façon	de	combiner	et	de	fomenter	des	espaces	en	devenir,	je	dirais :	l’espièglerie.</p>
                  <br>
                  <p>11- Maintenant,	je	veux	chanter	une	chanson	pour	ton	utérus,	une	chanson	de	l’utérus. Tu	peux l’entendre	dans	STELA.	Je	chante	des	petits	textes	que	m’ont	envoyés	des	gens	autour	de	moi	pour	Stela	et	toi.</p>
                </article>
              </div>
            </div>
            <div class="lecteur">


            </div>
          </div>
        </div>


        <!-- BUBBLE RADIO -->
        <div class="swiper-slide clearfix" data-hash="bubleradio">
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover7.png')">
            <div plangular="https://soundcloud.com/supernovaeditions/radio-supernova-5-poeticus-mordicus-part-1" class="player" >
              <button ng-click="playPause()" class="play-button">
                <svg class="icon" data-icon="play" viewBox="0 0 32 32"><path d="M4 4 L28 16 L4 28 z "></path></svg>
              </button>
              <!-- <progress
                ng-click="seek($event)"
                ng-value="currentTime / duration || 0">
              </progress> -->
            </div>
          </div>
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">bubble radio</h1>
              <span class="date">19 mars 2016</span>
              <div class="plus">
                <p>Radio Bubble est né dans l’espace-temps Bubble time in Paris, qui est aussi le nom d’un blog que nous avons crée Kinga et moi.<br><br>Le lendemain de sa performance aux Instants Chavirés à Montreuil pour la soirée Poésie et flottement dans les néons rouges, Kinga et moi nous sommes retrouvées dans le nuage d’angoisse parisien suite aux attentats. C’étaient les premiers pas de Kinga dans la capitale dont elle ne parlait pas la langue. Sans avoir le temps de faire face à ce nuage de « ça va ? », je tentais de traduire l’événement à Kinga en anglais, de l’aider à comprendre alors que j’étais moi-même prise à la gorge par un tourbillon collectif émotionnel difficile à appréhender, mon esprit était encore dans le rouge des émotions foudroyantes et sensuelles des performances de la veille.Ne nous comprenant pas avec Kinga à cause de la langue impuissante à apaiser un dépaysement violent et la venue par vague des angoisses autour de nous et en nous – malgré notre inquiétude souterraine constante au sujet de notre sort commun, des injustices et de notre soucis de nous protéger des analyses erronées de la conjoncture – nous avons décider de nous isoler l’une de l’autre, l’une avec l’autre, dans une bulle.<br><br>Puisque tout, médias, passants, voisins, amis, nous obligeaient à vivre l’événement, nous avons décidé de le vivre mais sans en parler. Nous avons écrit des textes, nous nous sommes passé l’appareil photo, nous avons enregistré des textes d’auteurs hongrois et français, nous avons dansé la valse devant un manège, évité le lait et le gluten, pris de la hauteur sur la ville pour nous dire « ah d’accord je suis là ».Pendant 4 jours, nous avons publié les traces de notre journée sur le blog. Puis nous avons eu besoin de pousser l’exorcisme plus loin.<br><br>Un ami nous a alors prêté son studio le 4ème jour, la veille du départ de Kinga pour Londres. Nous avons sélectionné et enregistré des loops à deux voix qui nous serviraient de basse et préparé le parcours de notre performance : il démarrerait avec mon invitation à l’égard de Kinga à parler dans le studio d’une radio imaginaire. Mais au lieu de poursuivre le face à face de l’interview, nous nous sommes dépossédés de nos rôles et avons laissé la bête s’emparer de nous. Nous ne savions pas que cette métamorphose laisserait place au final à un chant où nos deux voix se sont merveilleusement mêlées.<br><br>Les textes entendus se trouvent tous sur le blog Bubble time in Paris.<br><br>Compo, textes et voix : Kinga Toth et Anna Serra (avec la caisse claire !)</p><br><br><br>
                <p>Radio Bubble is born in the space-time Bubble time in Paris, which is also the name of a blog that Kinga and me created.<br><br>The day after her performance at the Instants Chavirés in Montreuil for Poésie et flottement dans les néons rouges Poetry and floating in red neon, Kinga and I are propulsed in the Parisian cloud of anxiety further to attacks. It was the first steps of Kinga in the capital and she did not speak the language. Without having time to face this cloud of « is it OK? », I tried to translate the event to Kinga into English, to help her to understand while I was taken in by the throat by an emotional collective whirlwind difficult to arrest because my spirit was still in the red of the lightning and sensual feelings of the poetic performances of the day before.Not understanding us with Kinga because of the language powerless to calm a violent disorientation and the coming by wave of the fears around us and in us – in spite of our constant subterranean concern about our common fate, injustices and of our need to protect us from erroneous analyses of the situation – we have to decide to isolate us in a bubble.<br><br>Because everything, media, people, neighbors, friends, obliged us to live the event, we have to decide to live it but without speaking about it. We wrote texts, we passed the camera, we recorded texts of Hungarian and French authors, we danced the waltz in front of a merry-go-round, avoided the milk and the gluten, risen on the city to tell us  » ah all right I am here « .During 4 days, we published the tracks of our days on the blog. Then we needed to push the exorcism further.<br><br>So a friend lent us his studio the 4th day, the day before the departure of Kinga in London. We selected and recorded loops with our two voices which would serve us as bass and prepared the route of our performance: it would start with my invitation towards Kinga to speak in the studio of an imaginary radio. But instead of pursuing the confrontation of the interview, we dispossessed of our roles and have to let the animal seize us. We did not know that this metamorphosis would give way in the end to a singingsong where our two voices magnificently got involved.<br><br>All the text we heard can be rode on the blog : Bubble time in Paris.<br><br>One shot : Composition, texts and Voices : Kinga Toth and Anna Serra (with the snare!)</p>
              </div>
            </div>
            <div class="lecteur">


            </div>
          </div>
        </div>

        <!-- LIVE #2 -->
        <div class="swiper-slide clearfix" data-hash="live#2">
          <!-- Photo à la une + gallerie -->
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover6.png')"></div>
          <!-- Description + player -->
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">live #2</h1>
              <!-- <span class="date">19 mars 2016</span> -->
              <div class="plus">
                <p>Performances de poètes venus des quatre coins de la poésie sonore : transe psychotropique, improvisation rock poétique, rituel, métamorphose par le texte, sans le texte, le tout avec un humour qui a la rage. <br><br>Avec : Joachim Montessuis / Martin Bakero / Cédric Pigot avec Magali Daniaux / PoulainJars / Maja Jantar / Benoît Toqué / Kinga Toth/Gregorio Fontén</p>
              </div>
            </div>
            <div class="lecteur">


            </div>
          </div>
        </div>

        <!-- DIRECT RADIO #1 -->
        <div class="swiper-slide clearfix" data-hash="directradio#1">
          <!-- Photo à la une + gallerie -->
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover5.png')"></div>
          <!-- Description + player -->
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">direct radio #1</h1>
              <span class="date">4 octobre 2016</span>
              <div class="plus">
                <p>
                  LIVE RADIO par Anna Serra<br>à KCGrad (Belgrade) pour le festival Rečotrč/Wordrun,<br>Auteurs-compositeurs / chansons / performances
                  <br><br>avec les interventions au micro de Supernova de : <br>
                  - Kinga Toth (poète)<br>
                  -Nestor Garcia (danseur)<br>
                  - Polina Akhmetzyanova (danseur)<br>
                  - Boglarka Borcsok (danseur)<br>
                  - Dan Boehl (poète)<br>
                  -Jean-Baptiste Joly (directeur de Schloss Solitude)<br>
                  - Nemanja Stojanović (photographe)<br>
                  - Anna Kawala (poète)<br>
                  - Elisa Calosi (membre de l'organisation)<br>
                </p>
              </div>
            </div>
            <div class="lecteur">


            </div>
          </div>
        </div>



        <!-- ILE ILE ILE -->
        <div class="swiper-slide clearfix" data-hash="ileileile">
          <!-- Photo à la une + gallerie -->
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover4.png')"></div>
          <!-- Description + player -->
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">île île île</h1>
              <!-- <span class="date">4 octobre 2016</span> -->
              <div class="plus">
                <p>Romain et moi, on s’est rencontrés à Radio Marais comme chroniqueurs. Romain est Dj et mélomane, il proposait un billet musical tous les vendredi à 11H30 juste après mes lectures musicales de poésies contemporaines. Un jour, on s’est proposé mutuellement de travailler ensemble une forme sonore et textuelle.<br>J’ai alors écrit île île île à l’occasion : un texte à plusieurs espaces comme à plusieurs tiroirs. Romain m’a aidée à conter ces espaces. <br>Puis il a composé une piste son-texte à partir de nos discussions riches en images mêlant le possible à l’impossible et nous avons travaillé cette piste son-texte dans le dialogue. De façon générale, nous avons cherché à rythmer et à mettre en mouvements ces espaces évoqués dans le conte et par le conte.<br><br>Comme le dit Romain : il s’agit de faire entendre les horizons. <br>Comme le dit Anna : oui plus de les faire entendre que de les atteindre<br><br>Remerciements :<br><br>à Célia Pinton pour l’enregistrement de la voix à Julia Stern, artiste numérique et installatrice de parcours sonore pour son retour très riche au sujet de île île île qu’elle a vécu comme « une description quasiment scientifique d’un espace géographique à l’intérieur même d’un fou fourmillement. »<br><br>Composition sonore : Romain Herrerias avec l’aide d’Anna Serra <br>Texte et voix : Anna Serra <br>Image : Idir Davaine<br><br>Soundcloud Romain : <a href="https://soundcloud.com/leromcast">Le Romcast</a></p>
              </div>
            </div>
          </div>
        </div>


        <!-- Recotrcwordrun -->
        <div class="swiper-slide clearfix" data-hash="recotrcwordrun">
          <!-- Photo à la une + gallerie -->
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover3.png')"></div>
          <!-- Description + player -->
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">Recotrcwordrune</h1>
              <!-- <span class="date">4 octobre 2016</span> -->
              <div class="plus">
                <p>
                  LIVE RADIO par Anna Serra <br>à Magacin U Kraljevica Marka 4 (Belgrade) pour le festival Rečotrč/Wordrun, <br>Sound poetry and performances with <br><br>Kinga Toth <br><br>Vladimir Đurišić <br><br>Rumena Bužarovska <br><br>Tibor Hrs Pandur <br><br>
                </p>
              </div>
            </div>
            <div class="lecteur">


            </div>
          </div>
        </div>




        <!-- ANNA 111 -->
        <div class="swiper-slide clearfix" data-hash="anna111">
          <!-- Photo à la une + gallerie -->
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover2.png')"></div>
          <!-- Description + player -->
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">Anna 111</h1>
              <span class="date">12 septembre 2015</span>
              <div class="plus">
                <article>
                  Composition: Cédric Pigot & Magali Daniaux <br>Entretien: Anna Serra <br>Extraits sonores : Magali Daniaux & Cédric Pigot (UV, Éditions Supernova 2015) <br>Voix: Anna Serra, Magali Daniaux & Cédric Pigot, Hermann Lion <br>
                  <br><br>
                  Depuis leur rencontre, en 2001, leur œuvre conjointe de Magali Daniaux & Cédric Pigot est marquée du double sceau de l’expérimentation et de la performance. <br> Leurs pièces mêlent des médias divers et associent des registres opposés avec une prédilection pour les correspondances entre science-fiction et documentaire, ingénierie de pointe et contes fantastiques, matériaux lourds et sensations fugaces. Aux installations et objets, dessins et collages de leurs débuts se sont progressivement ajoutés des expérimentations et gestes artistiques plus immatériels. Vidéos, créations sonores, musique, poésie, recherches olfactives, œuvres virtuelles aux confins de l’art numérique ont formé ces quatre dernières années un cycle d’oeuvres consacré aux étendues Arctiques et qui abordent des problématiques liées au changement climatique, les questions économiques, politiques et géostratégiques, le développement urbain et la gestion des ressources alimentaires. Magali Daniaux et Cédric Pigot travaillent actuellement en Alaska sur des projets consacrés au paysage mixant archéologie, géologie et changement climatique.<a href="http://daniauxpigot.com/">daniauxpigot.com</a>
                </artice>
              </div>
            </div>
            <div class="lecteur">


            </div>
          </div>
        </div>


        <!-- ASTRUC -->
        <div class="swiper-slide clearfix" data-hash="astruc">
          <!-- Photo à la une + gallerie -->
          <div class="box-jardin" style="background-image: url('assets/img/cover/cover1.png')"></div>
          <!-- Description + player -->
          <div class="box-cour">
            <div class="infos">
              <h1 class="titre">Astruc</h1>
              <!-- <span class="date">4 octobre 2016</span> -->
              <div class="plus">
                <article>
                  Nous avons passé une nuit devant l’interface du logiciel de son et un micro soumis à des effets sonores, pour préparer une interview-performance du travail de Martin avec des lectures de Truc, son dernier bouquin. Dans sa navette spatiale ou ancien nid de grillons, on buvait du vin en attendant de manger les sardines. Le lendemain le direct a bien eu lieu au studio de Radio Marias rue Chapon et il était cosmique, 45 min d’écoute de la vie sur Ganymède et un transvasement hypnotique de la parole jusqu’au transpercement du sens ! Mais les ondes années lumières que nous diffusions le 10 avril 2015 ne se sont pas laissées enregistrer et il ne reste aucune trace de cette vie sur Ganymède. Mais nous sommes sûrs, Martin et moi, que le direct a bien été transmis jusqu’au Chili où a eu lieu quelques semaines plus tard l’éruption du volcan Calbuco.
                  <br>
                  Et puis j’ai rappelé Martin.
                  <br>
                  Martin faut qu’on le refasse, mais cette fois-ci avec Radio Supernova, et je te propose de refaire l’interview performance quitte à réutiliser la première piste qu’on a faite chez toi.
                  <br>
                  Alors on l’a refait. On n’est pas reparti sur Ganymède, on savait pas bien où on était. En tout cas, on s’est filmé au décollage et on buvait du thé aux algues.
                  <br>
                  Astruc était né.
                  <br>
                  ***
                  <br><br>
                  Anna m’a invité à faire une émission pour radio Marais. Une fois diffusée en direct, elle a été kidnappée et n’est pas arrivée au stade de podcast. Elle m’a alors invité à en faire une autre pour Radio Supernova.
                  <br>
                  J’ai accepté le défi, préparé mes appareils et j’ai allumé le vaisseau. J’avais un micro stéréo (pour la voix d’Anna et la mienne), un poème de Maja Jantar et moi que j’avais dans les oreilles ce jour là, et deux piezzo : je les avais installés pour qu’ils fassent résonner les lettres que je leur jetais au hasard et ainsi ils me dictaient la réponse. J’avais aussi un saxophone et une flûte.
                  <br>
                  Mon vaisseau, mon PneumaSpaceship, avait été chargé magnétiquement avec des centaines des grillon il y a quelques années, et il paraîtrait qu’ils aient eu un effet sur Anna. Elle avait reformulé les questions par rapport à mes réponses du premier entretien et en même temps elle lisait des poèmes de mon livre TRUC.
                  <br>
                  Ensuite j’ai tout travaillé au studio pour donner vie à la matière. J’ai camouflé plusieurs réponses car “la réponse est la disgrâce de la question” comme disait Maurice Blanchot. J’ai manipulé notre enregistrement pour lui donner la couleur sonore de la transe que nos avions alors partagée.
                </article>
                <article class="">
                  <br><br>
                  Composition: Martin Bakero <br>
                  Entretien: Anna Serra <br>
                  Poèmes: Martin Bakero (TRUC, Editions Éoliennes, Paris, 2014) <br>
                  Voix: Anna Serra, Martin Bakero, Maja Jantar <br>
                  Instruments à Vent: Martin Bakero <br>
                  Procédure acousémantique: Martino Baker <br>
                  <br><br>
                  Martin Bakero et Anna Serra remercient Maja Jantar, Pablo Vargas Avaria, Gino Favotti, Stéphanie Boubli et Laure Clapies.
                </article>
              </div>
            </div>
            <div class="lecteur">


            </div>
          </div>
        </div>




      </div>
    </div>


    </div>


    <script type="text/javascript">
      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.arro-right',
        prevButton: '.arro-left',
        spaceBetween: 30,
        controlInverse: true,
        speed: 2,
        hashnav: true
    });
    var app = angular.module('app', ['plangular'])
      .config(function(plangularConfigProvider){
        plangularConfigProvider.clientId = '7f0decc8decbcd4c4d74340857fb9d57';
      });
    </script>

  </div>

  <?php
  include "include/mosaique.php";
  ?>

  <div class="logo-bar">
    <img class="logo-nav" src="assets/img/logo_horizonrrr_inv.png" alt="" />
  </div>

  <div class="menu">
    <div class="rect-nv up"></div>
    <div class="rect-nv right"></div>
    <div class="rect-nv down"></div>
    <div class="rect-nv left"></div>
  </div>



</body>
