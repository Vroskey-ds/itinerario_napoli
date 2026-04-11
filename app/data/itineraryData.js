export const itineraryData = [
  {
    id: "giovedi",
    day: "Giovedì 14 Maggio",
    shortDay: "Giovedì 14",
    title: "Arrivo e Vomero",
    events: [
      {
        id: "g1",
        time: "10:42",
        title: "Arrivo a Napoli Centrale",
        description: "Arrivo in stazione con treno Frecciarossa. L'avventura all'ombra del Vesuvio inizia!",
        type: "travel", 
        location: { lat: 40.8528, lng: 14.2718, mapQuery: "Napoli Centrale" }
      },
      {
        id: "g2",
        time: "11:00",
        title: "Colazione da Attanasio",
        description: "Rituale d'obbligo: prima sfogliatella calda appena fuori dalla stazione. Questo forno è famoso per servire le sfogliatelle, sia frolle che ricce, roventi e appena sfornate ad ogni ora.",
        type: "food",
        image: "/images/sfogliatella_attanasio.png",
        location: { lat: 40.8525, lng: 14.2694, mapQuery: "Sfogliatelle Attanasio Napoli" }
      },
      {
        id: "g3",
        time: "11:30",
        title: "Check-in al Jazz Hotel",
        description: "A circa 10 minuti di cammino in linea retta senza dislivelli, lasceremo le valigie per girare leggeri, pronti per esplorare.",
        type: "hotel",
        location: { lat: 40.8542, lng: 14.2646, mapQuery: "Via Cesare Rosaroll, 6, 80139 Napoli" }
      },
      {
        id: "g4",
        time: "12:15",
        title: "Duomo di Napoli (San Gennaro)",
        description: "Visto che vi trovate a due passi, una visita al maestoso Duomo di Napoli è d'obbligo. Qui è custodita l'ampolla con il sangue di San Gennaro. L'architettura gotica e gli interni sfarzosi vi lasceranno a bocca aperta.\n\n♿ Accessibilità: Presenti rampe, chiesa completamente in piano.",
        type: "attraction",
        location: { lat: 40.8528, lng: 14.2594, mapQuery: "Duomo di Napoli" }
      },
      {
        id: "g-lunch",
        time: "13:30",
        title: "Pranzo Libero / Street Food",
        description: "Prendiamo un cuoppo di fritto o una pizza a portafoglio veloce per strada prima di salire in collina.",
        type: "food",
        location: { lat: 40.8502, lng: 14.2541, mapQuery: "Via dei Tribunali" }
      },
      {
        id: "g5",
        time: "14:30",
        title: "Vomero via Funicolare",
        description: "Dirigiamoci verso l'elegante quartiere collinare del Vomero prendendo la storica Funicolare o la Metro Linea 1.",
        type: "travel",
        image: "/images/funicolare_napoli.png",
        location: { lat: 40.8441, lng: 14.2373, mapQuery: "Funicolare Centrale Napoli" }
      },
      {
        id: "g6",
        time: "15:30",
        title: "Castel Sant'Elmo e San Martino",
        description: "Visita la maestosa fortezza di Castel Sant'Elmo, che domina Napoli offrendo un panorama a 360 gradi. Proprio accanto, godetevi il piazzale di San Martino.\n\n♿ Accessibilità: Il Castello è totalmente accessibile con sistema di ascensori interni.",
        type: "attraction",
        image: "/images/castel_santelmo.png",
        location: { lat: 40.8436, lng: 14.2386, mapQuery: "Castel Sant'Elmo" }
      },
      {
        id: "g7",
        time: "20:00",
        title: "Pizza da Zia Esterina Sorbillo",
        description: "Rientrati dal Vomero, gustiamo una delle pizze fritte migliori della città. Bollente, dorata, con un cuore di ricotta, cicoli e provola.",
        type: "food",
        image: "/images/pizza_fritta.png",
        location: { lat: 40.8407, lng: 14.2483, mapQuery: "Zia Esterina Sorbillo Pizza Fritta" }
      }
    ]
  },
  {
    id: "venerdi",
    day: "Venerdì 15 Maggio",
    shortDay: "Venerdì 15",
    title: "Famiglia & Centro Storico",
    events: [
      {
        id: "v1",
        time: "10:30",
        title: "Arrivo Genitori & Fiocchi di Neve",
        description: "Ronda di dolci per accogliere i genitori. I 'Fiocchi di Neve' della Pasticceria Poppella sono magiche palline di brioche farcite con una crema di latte freschissima. Ne mangerete dieci senza accorgervene!",
        type: "food",
        image: "/images/poppella_fiocchi.png",
        location: { lat: 40.8576, lng: 14.2520, mapQuery: "Pasticceria Poppella Napoli" }
      },
      {
        id: "v1_bis",
        time: "11:45",
        title: "Chiostro Maiolicato di Santa Chiara",
        description: "Scendendo verso il centro, visitiamo il Monastero di Santa Chiara. Il suo chiostro è famoso in tutto il mondo per le decine di pilastri ottagonali rivestiti da splendide maioliche (ceramiche dipinte a mano) con motivi floreali e agresti.\n\n♿ Accessibilità: Il percorso del chiostro è completamente all'aperto e in piano, ideale per carrozzine e per scattare foto in totale serenità.",
        type: "attraction",
        location: { lat: 40.8465, lng: 14.2529, mapQuery: "Chiostro di Santa Chiara Napoli" }
      },
      {
        id: "v2",
        time: "13:30",
        title: "Pranzo Antica Pizzeria",
        description: "Passeggiata nel cuore della Napoli greco-romana per una pizza classica seduti a tavola. (Es. Sorbillo ai Tribunali, Di Matteo, ecc.)",
        type: "food",
        image: "/images/via_tribunali.png",
        location: { lat: 40.8504, lng: 14.2568, mapQuery: "Via dei Tribunali Napoli" }
      },
      {
        id: "v2_bis",
        time: "15:30",
        title: "Cristo Velato",
        description: "Visita alla Cappella Sansevero per ammirare il capolavoro assoluto del Cristo Velato, come richiesto da mamma Roberta! Ricordatevi di prenotare i biglietti online con largo anticipo.\n\n♿ Accessibilità: Presente una rampa all'ingresso, la scultura è al piano, ma gli spazi antistanti la biglietteria sono molto ristretti.",
        type: "attraction",
        image: "/images/cristo_velato.png",
        location: { lat: 40.8494, lng: 14.2543, mapQuery: "Museo Cappella Sansevero" }
      },
      {
        id: "v3",
        time: "16:30",
        title: "Spaccanapoli e San Gregorio Armeno",
        description: "Via San Gregorio Armeno è il cuore pulsante e caotico dei maestri presepiai. Troverai statuine di ogni genere, dal classico pastore a Maradona. È coloratissima e sempre in festa.\n\n♿ Attenzione ai sampietrini e all'alta densità di persone in tutto il Decumano.",
        type: "attraction",
        image: "/images/san_gregorio_armeno.png",
        location: { lat: 40.8494, lng: 14.2573, mapQuery: "Via San Gregorio Armeno" }
      },
      {
        id: "v4",
        time: "17:30",
        title: "Napoli Sotterranea (Divisione Gruppi)",
        description: "Un viaggio incredibile a 40 metri di profondità tra antichi acquedotti romani, cisterne e rifugi antiaerei del '900. I genitori e la ragazza vanno in esplorazione.\n\n♿ Accessibilità: Il sottosuolo non è adatto alle carrozzine a causa di scale e cunicoli strettissimi. Puoi aspettare in Piazza San Gaetano dove ci sono vari caffè ai tavolini all'aperto, molto vicini all'ingresso.",
        type: "attraction",
        image: "/images/napoli_sotterranea.png",
        location: { lat: 40.8507, lng: 14.2576, mapQuery: "Napoli Sotterranea" }
      },
      {
        id: "v5",
        time: "20:30",
        title: "Cena tra i Vicoli",
        description: "Una cena rilassante con la famiglia appena ricongiunta post-sotterranea, in uno dei tanti ristoranti suggestivi attorno a Spaccanapoli bevendo un buon Aglianico.",
        type: "food",
        image: "/images/spaccanapoli.png",
        location: { lat: 40.8498, lng: 14.2550, mapQuery: "Spaccanapoli" }
      }
    ]
  },
  {
    id: "sabato",
    day: "Sabato 16 Maggio",
    shortDay: "Sabato 16",
    title: "Murales, Mare & Compleanno",
    events: [
      {
        id: "s1",
        time: "10:00",
        title: "Stazione Arte Toledo",
        description: "Prendiamo la Metro 1 e scendiamo a Toledo. Considerata una delle stazioni più belle del mondo! I mosaici blu vi daranno l'impressione di trovarvi in un oceano profondo.",
        type: "travel",
        location: { lat: 40.8415, lng: 14.2488, mapQuery: "Metro Toledo Napoli" }
      },
      {
        id: "s2",
        time: "10:30",
        title: "Quartieri Spagnoli e Murales di Maradona",
        description: "Ci avventuriamo nei Quartieri Spagnoli! Passiamo per 'Via Emanuele De Deo' dove si trova l'enorme e leggendario murales di Diego Armando Maradona. Qui si respira tutta l'energia e la spiritualità calcistica di Napoli, tra striscioni, sciarpe e motorini.",
        type: "attraction",
        image: "/images/murales_maradona.png",
        location: { lat: 40.8386, lng: 14.2452, mapQuery: "Murales Maradona Napoli" }
      },
      {
        id: "s3",
        time: "12:00",
        title: "Piazza del Plebiscito e Gambrinus",
        description: "Scendendo verso il mare ammirate l'immenso colonnato neoclassico di Piazza del Plebiscito e prendete un iconico e irrinunciabile vero caffè espresso partenopeo allo storico Gran Caffè Gambrinus.",
        type: "attraction",
        image: "/images/piazza_plebiscito.png",
        location: { lat: 40.8359, lng: 14.2487, mapQuery: "Gran Caffè Gambrinus" }
      },
      {
        id: "s4",
        time: "13:30",
        title: "Galleria Umberto I e Castel dell'Ovo",
        description: "Pranzo leggero in zona, uno sguardo sfuggente e luminoso nell'ottocentesca Galleria Umberto I, per poi incamminarci sul mare godendoci la brezza verso l'isola del Castel dell'Ovo, la fortezza più antica.",
        type: "attraction",
        image: "/images/castel_dellovo.png",
        location: { lat: 40.8282, lng: 14.2483, mapQuery: "Castel dell'Ovo Napoli" }
      },
      {
        id: "s5",
        time: "16:00",
        title: "Passeggiata sul Lungomare Caracciolo",
        description: "Il maestoso Lungomare è pedonale, ampio e completamente in piano. Godetevi la tranquillità, i chiringhiti e la vista su Capri e il Vesuvio al tramonto.",
        type: "attraction",
        image: "/images/lungomare_napoli.png",
        location: { lat: 40.8322, lng: 14.2370, mapQuery: "Lungomare Caracciolo" }
      },
      {
        id: "s6",
        time: "20:30",
        title: "Cena Compleanno: Nennella",
        description: "Tanti auguri! Risalendo i Quartieri Spagnoli l'Antica Trattoria da Nennella vi aspetta per il compleanno. Prestatevi al loro teatro popolare: parolacce amichevoli, urla, balli sui tavoli e una pasta e patate indimenticabile.",
        type: "food",
        image: "/images/nennella_napoli.png",
        location: { lat: 40.8407, lng: 14.2476, mapQuery: "Trattoria da Nennella" }
      }
    ]
  },
  {
    id: "domenica",
    day: "Domenica 17 Maggio",
    shortDay: "Domenica 17",
    title: "Shopping e Partenza",
    events: [
      {
        id: "d1",
        time: "10:00",
        title: "Via Toledo e Pignasecca",
        description: "Ultima passeggiata rilassata sulla strada pedonale più nota di Napoli per acquistare souvenir. Sconfinate un attimo nel mercato della Pignasecca se desiderate folclore e frutta fresca.",
        type: "attraction",
        location: { lat: 40.8441, lng: 14.2475, mapQuery: "Pignasecca, Napoli" }
      },
      {
        id: "d2",
        time: "12:30",
        title: "Pranzo Saluti verso la Stazione",
        description: "Ripartendo verso Piazza Garibaldi, un pranzo corroborante prima di affrontare il treno del ritorno.",
        type: "food",
        location: { lat: 40.8510, lng: 14.2690, mapQuery: "Piazza Garibaldi, Napoli" }
      },
      {
        id: "d3",
        time: "15:00",
        title: "Partenza Napoli Centrale",
        description: "Presa dei bagagli all'Hotel e saluti finali a Napoli. L'Alata Velocità vi riporterà a casa... finché la nostalgia di Napoli non vi farà tornare!",
        type: "travel",
        location: { lat: 40.8530, lng: 14.2721, mapQuery: "Napoli Centrale" }
      }
    ]
  }
];
