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
        description: "A circa 10 minuti di cammino in linea retta dalla stazione, lasciamo le valigie all'hotel in Via Cesare Rosaroll per girare leggeri.",
        type: "hotel",
        location: { lat: 40.8542, lng: 14.2646, mapQuery: "Via Cesare Rosaroll, 6, 80139 Napoli" }
      },
      {
        id: "g5",
        time: "12:15",
        title: "Vomero via Funicolare",
        description: "Camminiamo verso ovest fino a Via Toledo per prendere la storica Funicolare Centrale e salire sulla collina del Vomero. La giornata è tutta nostra!",
        type: "travel",
        image: "/images/funicolare_napoli.png",
        location: { lat: 40.8441, lng: 14.2373, mapQuery: "Funicolare Centrale Napoli" }
      },
      {
        id: "g6",
        time: "13:00",
        title: "Castel Sant'Elmo",
        description: "Usciti dalla funicolare, una breve passeggiata porta alla fortezza stellare di Castel Sant'Elmo. Offre un panorama a 360° su tutto il Golfo di Napoli, il Vesuvio e le isole.\n\n♿ Accessibilità: Totalmente accessibile con sistema di ascensori interni.",
        type: "attraction",
        image: "/images/castel_santelmo.png",
        location: { lat: 40.8436, lng: 14.2386, mapQuery: "Castel Sant'Elmo" }
      },
      {
        id: "g-certosa",
        time: "14:30",
        title: "Certosa e Museo di San Martino",
        description: "A due passi dal Castel Sant'Elmo, l'ex monastero certosino è uno dei complessi più belli di Napoli. Si visita la splendida chiesa barocca con affreschi di Luca Giordano, il Chiostro Grande e la sezione museale con il celebre Presepe Cuciniello (800 statuine settecentesche). Le terrazze panoramiche sono mozzafiato. Ingresso €6.\n\n♿ Accessibilità: Presente ascensore per i principali livelli.",
        type: "attraction",
        location: { lat: 40.8422, lng: 14.2385, mapQuery: "Certosa di San Martino Napoli" }
      },
      {
        id: "g-villa",
        time: "16:15",
        title: "Villa Floridiana e Parco",
        description: "Breve passeggiata fino a questa villa neoclassica immersa in un romantico giardino all'inglese con vista sul Golfo. Il parco è gratuito e perfetto per una pausa rilassante. All'interno della villa il Museo Duca di Martina raccoglie oltre 6.000 opere di ceramiche e arti decorative (€4, chiude alle 17:00 — consigliamo il parco al tramonto).",
        type: "attraction",
        location: { lat: 40.8392, lng: 14.2283, mapQuery: "Villa Floridiana Napoli" }
      },
      {
        id: "g-scarlatti",
        time: "17:30",
        title: "Passeggiata su Via Scarlatti",
        description: "Il salotto del Vomero: la via pedonale principale del quartiere, piena di boutique, caffè e locali per l'aperitivo. Un'atmosfera tutta napoletana lontana dai turisti del centro. Perfetta per uno spritz o un caffè prima di scendere.",
        type: "attraction",
        location: { lat: 40.8434, lng: 14.2297, mapQuery: "Via Scarlatti Napoli Vomero" }
      },
      {
        id: "g7",
        time: "20:00",
        title: "Cena da Kebest",
        description: "A due passi da Piazza Vanvitelli, il kebab fit & fat di Giovanni Fois e Jana Foodporn. Due linee: Fit (pollo bianco) e Fat (cosce di pollo con pelle e topping ricchi). Il posto del momento al Vomero.",
        type: "food",
        location: { lat: 40.8418, lng: 14.2295, mapQuery: "Kebest Via Bernini Napoli Vomero" }
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
        id: "v1_arrivo",
        time: "10:00",
        title: "Arrivo Genitori a Napoli Centrale",
        description: "Ricongiungimento in Stazione Centrale! Accoglienza e via verso l'hotel per lasciare le loro valigie.",
        type: "travel",
        location: { lat: 40.8528, lng: 14.2718, mapQuery: "Napoli Centrale" }
      },
      {
        id: "v1",
        time: "10:15",
        title: "Colazione da SfogliateLAB",
        description: "La pasticceria è proprio di fronte all'uscita della stazione, all'angolo con Corso Novara — impossibile mancare. Nata agli inizi del '900 con la famiglia Ferrieri, unisce la tradizione pasticcera napoletana alla gastronomia locale: sfogliatelle, babà e rosticceria fresca. Il posto giusto per il primo assaggio di Napoli insieme ai genitori.",
        type: "food",
        location: { lat: 40.8516, lng: 14.2724, mapQuery: "SfogliateLAB Napoli Piazza Garibaldi" }
      },
      {
        id: "g4",
        time: "11:45",
        title: "Duomo di Napoli (San Gennaro)",
        description: "Scendendo verso il centro storico si arriva al maestoso Duomo di Napoli. Qui è custodita l'ampolla col sangue di San Gennaro, tra le reliquie più venerate al mondo.\n\n♿ Accessibilità: Il percorso e la chiesa sono in piano e totalmente accessibili.",
        type: "attraction",
        location: { lat: 40.8528, lng: 14.2594, mapQuery: "Duomo di Napoli" }
      },
      {
        id: "v2",
        time: "13:15",
        title: "Pranzo ai Tribunali",
        description: "A pochi passi dal Duomo, ci sediamo per riposare le gambe con una verace Margherita napoletana. Via dei Tribunali è la via della pizza per eccellenza.",
        type: "food",
        image: "/images/via_tribunali.png",
        location: { lat: 40.8504, lng: 14.2568, mapQuery: "Via dei Tribunali Napoli" },
        foodOptions: [
          { title: "Pizzeria Di Matteo", description: "Pizza napoletana doc dal 1936, forno a legna e impasto a lunga lievitazione.", mapQuery: "Pizzeria Di Matteo Via dei Tribunali Napoli" },
          { title: "Sorbillo", description: "Il tempio della pizza verace. Fila quasi garantita, ma ogni minuto vale.", mapQuery: "Pizzeria Sorbillo Via dei Tribunali Napoli" },
          { title: "La Campagnola", description: "Trattoria storica con pasta al ragù, genovese e cucina casalinga napoletana.", mapQuery: "La Campagnola Via dei Tribunali Napoli" }
        ]
      },
      {
        id: "v4",
        time: "14:30",
        title: "Napoli Sotterranea (Divisione Gruppi)",
        description: "Scendendo verso Piazza San Gaetano. Un viaggio immersivo a 40 metri di profondità tra acquedotti romani e rifugi antiaerei.\n\n♿ Accessibilità: Non adatto alle carrozzine. Attesa piacevole ai baretti all'aperto di Piazza San Gaetano.",
        type: "attraction",
        image: "/images/napoli_sotterranea.png",
        location: { lat: 40.8507, lng: 14.2576, mapQuery: "Napoli Sotterranea" },
        optional: true,
        optionalAlternative: {
          title: "Museo Archeologico Nazionale (MANN)",
          description: "Per chi soffre di claustrofobia è l'alternativa perfetta: ambienti enormi e ariosi con la più grande collezione al mondo di reperti di Pompei ed Ercolano. Perfetto anche con la pioggia. Ingresso €15, aperto tutti i giorni tranne il martedì.",
          mapQuery: "Museo Archeologico Nazionale Napoli"
        }
      },
      {
        id: "v3",
        time: "16:00",
        title: "San Gregorio Armeno",
        description: "Usciti dalla Napoli Sotterranea, ci si trova proprio all'imbocco di San Gregorio Armeno, la via dei maestri presepiai. Perfettamente lineare.\n\n♿ Attenzione all'alta densità di persone.",
        type: "attraction",
        image: "/images/san_gregorio_armeno.png",
        location: { lat: 40.8494, lng: 14.2573, mapQuery: "Via San Gregorio Armeno" }
      },
      {
        id: "v2_bis",
        time: "16:45",
        title: "Cristo Velato",
        description: "Sempre procedendo in modo lineare giungiamo alla limitrofa Cappella Sansevero per l'imperdibile Cristo Velato. (Da prenotare online!)\n\n♿ Accessibilità: Presente rampa, ma spazi molto ristretti intorno alla cappella.",
        type: "attraction",
        image: "/images/cristo_velato.png",
        location: { lat: 40.8494, lng: 14.2543, mapQuery: "Museo Cappella Sansevero" }
      },
      {
        id: "v1_bis",
        time: "18:00",
        title: "Chiostro Maiolicato di Santa Chiara",
        description: "Scendendo verso Spaccanapoli si arriva comodamente al Monastero di Santa Chiara. Perfetto per il tardo pomeriggio.\n\n♿ Accessibilità: Completamente in piano e all'aperto.",
        type: "attraction",
        location: { lat: 40.8465, lng: 14.2529, mapQuery: "Chiostro di Santa Chiara Napoli" }
      },
      {
        id: "v5",
        time: "20:30",
        title: "Cena a Spaccanapoli",
        description: "Rimanendo in zona, la cena serale la passeremo in uno dei pittoreschi locali di Spaccanapoli.",
        type: "food",
        image: "/images/spaccanapoli.png",
        location: { lat: 40.8498, lng: 14.2550, mapQuery: "Spaccanapoli" },
        foodOptions: [
          { title: "Taverna Santa Chiara", description: "Cucina partenopea classica a due passi dal chiostro: genovese, ragù e frittura di pesce.", mapQuery: "Taverna Santa Chiara Napoli" },
          { title: "La Baccalaria", description: "Osteria rinomata per il baccalà e le ricette più antiche della tradizione napoletana.", mapQuery: "La Baccalaria Napoli" },
          { title: "Ristorante Bellini", description: "Classico di Piazza Bellini con vista sulla piazza: genovese di polpo e pasta e fagioli.", mapQuery: "Ristorante Bellini Piazza Bellini Napoli" }
        ]
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
        description: "Partiamo prendendo la Metro 1. Scendendo a Toledo sarete avvolti dai celebri mosaici azzurri a tema oceano, una tra le metropolitane più belle del mondo.",
        type: "travel",
        location: { lat: 40.8415, lng: 14.2488, mapQuery: "Metro Toledo Napoli" }
      },
      {
        id: "s2",
        time: "10:30",
        title: "Quartieri Spagnoli e Murales di Maradona",
        description: "Dalla stazione si entra direttamente nei Quartieri Spagnoli, su via Emanuele De Deo, dov'è situato l'imponente e affollatissimo Murales di Maradona.",
        type: "attraction",
        image: "/images/murales_maradona.png",
        location: { lat: 40.8386, lng: 14.2452, mapQuery: "Murales Maradona Napoli" }
      },
      {
        id: "s-poppella",
        time: "11:30",
        title: "Fiocchi di Neve da Poppella",
        description: "A pochi passi dai Quartieri, la sede di Via Santa Brigida è nel cuore della città accanto alla Galleria Umberto I e al Teatro San Carlo. I 'Fiocchi di Neve' sono brioche soffici ripiene di crema al latte: il dolce più iconico di Napoli dopo la sfogliatella.",
        type: "food",
        image: "/images/poppella_fiocchi.png",
        location: { lat: 40.8371, lng: 14.2481, mapQuery: "Pasticceria Poppella Via Santa Brigida Napoli" }
      },
      {
        id: "s3",
        time: "12:15",
        title: "Piazza Plebiscito e Gambrinus",
        description: "Scesi dai quartieri si sfocia nel salotto di Napoli: l'enorme Piazza del Plebiscito e l'adiacente elegante Caffè Gambrinus per un espresso d'epoca.",
        type: "attraction",
        image: "/images/piazza_plebiscito.png",
        location: { lat: 40.8359, lng: 14.2487, mapQuery: "Gran Caffè Gambrinus" }
      },
      {
        id: "s4",
        time: "13:15",
        title: "Galleria Umberto I & Pranzo",
        description: "Esattamente di fronte a Piazza Plebiscito, la sfavillante Galleria Umberto I con le sue volte in ferro e vetro. Ideale per scegliere dove pranzare prima di incamminarci verso il mare.",
        type: "attraction",
        image: "/images/galleria_umberto.png",
        location: { lat: 40.8384, lng: 14.2497, mapQuery: "Galleria Umberto I Napoli" },
        foodOptions: [
          { title: "Da Ettore", description: "Trattoria storica nei Quartieri Spagnoli, celebre per pasta e patate con provola e piatti della nonna.", mapQuery: "Da Ettore Quartieri Spagnoli Napoli" },
          { title: "Cantina della Tofa", description: "Osteria tipica con vino sfuso e cucina povera napoletana: cicerchie, baccalà, sartù di riso.", mapQuery: "Cantina della Tofa Napoli" },
          { title: "Friggitoria Fiorenzano", description: "Il cuoppo di fritto misto più famoso della città, street food veloce e autentico vicino a Via Toledo.", mapQuery: "Friggitoria Fiorenzano Napoli" }
        ]
      },
      {
        id: "s5",
        time: "15:00",
        title: "Verso Castel dell'Ovo",
        description: "Scendendo dritto si incontra l'isolotto di Megaride e l'iconico Castel dell'Ovo, costeggiato dal molo.",
        type: "attraction",
        image: "/images/castel_dellovo.png",
        location: { lat: 40.8282, lng: 14.2483, mapQuery: "Castel dell'Ovo Napoli" }
      },
      {
        id: "s6",
        time: "17:00",
        title: "Passeggiata sul Lungomare Caracciolo",
        description: "Il maestoso Lungomare è pedonale, ampio e completamente in piano. Godetevi la tranquillità in compagnia del sole calante.",
        type: "attraction",
        image: "/images/lungomare_napoli.png",
        location: { lat: 40.8322, lng: 14.2370, mapQuery: "Lungomare Caracciolo" }
      },
      {
        id: "s7",
        time: "20:30",
        title: "Cena Compleanno: Nennella",
        description: "Torniamo vicino ai Quartieri con la funicolare/metro per festeggiare. L'Antica Trattoria da Nennella (prenotate possibilmente!) vi avvolgerà nel tipico teatro-chiasso napoletano a suon di pasta e patate.",
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
    title: "Ultima Colazione e Partenza",
    events: [
      {
        id: "d1",
        time: "10:00",
        title: "Ultimo caffè da Attanasio",
        description: "A due passi dalla stazione, il forno Attanasio è il modo migliore per chiudere il cerchio: ultima sfogliatella calda e cappuccino prima di ritirare i bagagli in hotel. Quello stesso posto che ci ha accolti giovedì mattina.",
        type: "food",
        image: "/images/sfogliatella_attanasio.png",
        location: { lat: 40.8525, lng: 14.2694, mapQuery: "Sfogliatelle Attanasio Napoli" }
      },
      {
        id: "d2",
        time: "12:00",
        title: "Pranzo vicino alla Stazione",
        description: "Rimaniamo in zona Piazza Garibaldi per un ultimo pranzo senza fretta. Si ritirano i bagagli in hotel e ci si prepara alla partenza.",
        type: "food",
        location: { lat: 40.8510, lng: 14.2690, mapQuery: "Piazza Garibaldi, Napoli" },
        foodOptions: [
          { title: "Mimì alla Ferrovia", description: "Il ristorante storico della zona stazione per eccellenza: sartù di riso, polpo verace e pesce azzurro.", mapQuery: "Mimì alla Ferrovia Napoli" },
          { title: "L'Europeo di Mattozzi", description: "Storica insegna napoletana con ragù della domenica, frittura di paranza e pasta al forno.", mapQuery: "L'Europeo di Mattozzi Napoli" },
          { title: "Trattoria Casanova", description: "Cucina casalinga napoletana a pochi passi dalla stazione: pasta e fagioli, trippa e scarole 'mbuttunate.", mapQuery: "Trattoria Casanova Napoli Piazza Garibaldi" }
        ]
      },
      {
        id: "d3",
        time: "15:00",
        title: "Partenza dalla Stazione Centrale",
        description: "Alla Stazione Napoli Centrale si chiude il cerchio. Tutti in carrozza e arrivederci Napoli!",
        type: "travel",
        location: { lat: 40.8530, lng: 14.2721, mapQuery: "Napoli Centrale" }
      }
    ]
  }
];
