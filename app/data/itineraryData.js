export const itineraryData = [
  {
    id: "giovedi",
    day: "Giovedì 14 Maggio",
    shortDay: "Giovedì 14",
    title: "Ruoto a domicilio & Vomero",
    events: [
      {
        id: "g1",
        time: "11:42",
        title: "Arrivo a Napoli Centrale",
        description: "Arrivo in stazione con treno Frecciarossa. Diretti all'hotel — il ruoto di Cercola ci aspetta già lì!",
        type: "travel",
        location: { lat: 40.8528, lng: 14.2718, mapQuery: "Napoli Centrale" }
      },
      {
        id: "g2",
        time: "12:00",
        title: "Sfogliatella al volo da Attanasio",
        description: "A 5 minuti a piedi dall'uscita della stazione (Vico Ferrovia 2/4). Prima sfogliatella rovente — riccia o frolla — da mangiare sul posto.\n\n♿ Percorso piano dalla stazione.",
        type: "food",
        image: "/images/sfogliatella_attanasio.png",
        location: { lat: 40.8525, lng: 14.2694, mapQuery: "Sfogliatelle Attanasio Napoli" }
      },
      {
        id: "g3",
        time: "12:20",
        title: "Check-in al Jazz Hotel",
        description: "~10 minuti a piedi dalla stazione lungo Via Cesare Rosaroll. Si lasciano le valigie e ci si sistema.\n\n♿ Percorso piano dalla stazione.",
        type: "hotel",
        location: { lat: 40.8542, lng: 14.2646, mapQuery: "Via Cesare Rosaroll, 6, 80139 Napoli" }
      },
      {
        id: "g-ruoto",
        time: "12:45",
        title: "Ruoto del Panificio Bobb — consegnato in hotel",
        description: "Grazie alla gentilezza dei napoletani, il Panificio Michelangelo Bobb di Cercola ci ha spedito il ruoto direttamente al Jazz Hotel (€7 di spedizione). Pizza alta e soffice a lievito madre, cotta in teglia rotonda dal 1954 — la stessa che avremmo mangiato a Viale Michelangelo 27. Si mangia in camera o nella hall prima di salire al Vomero.",
        type: "food",
        location: { lat: 40.8542, lng: 14.2646, mapQuery: "Jazz Hotel Via Cesare Rosaroll Napoli" }
      },
      {
        id: "g5",
        time: "13:30",
        title: "Verso il Vomero via Funicolare",
        description: "Dall'hotel si raggiunge il Vomero con Metro + Funicolare.\n\n🚇 Metro Linea 1: 'Garibaldi' → 'Toledo' (2 fermate, ~5 min, €1,30)\n🚡 A piedi da Toledo: ~5 min fino all'ingresso Funicolare Centrale in Via Toledo\n🚠 Funicolare Centrale: Toledo → Vomero (~7 min)\n\n♿ Metro L1 completamente accessibile con ascensori. Funicolare accessibile.",
        type: "travel",
        image: "/images/funicolare_napoli.png",
        location: { lat: 40.8441, lng: 14.2373, mapQuery: "Funicolare Centrale Napoli" }
      },
      {
        id: "g6",
        time: "14:00",
        title: "Castel Sant'Elmo",
        description: "Usciti dalla funicolare, ~5 min a piedi in salita leggera fino alla fortezza stellare. Panorama a 360° su Napoli, il Golfo e il Vesuvio. Ingresso €5.\n\n♿ Accessibilità: Ascensori interni per tutti i livelli principali.",
        type: "attraction",
        image: "/images/castel_santelmo.png",
        location: { lat: 40.8436, lng: 14.2386, mapQuery: "Castel Sant'Elmo" }
      },
      {
        id: "g-certosa",
        time: "15:30",
        title: "Certosa e Museo di San Martino + Testa di Pulcinella",
        description: "A 2 minuti a piedi da Castel Sant'Elmo. Ex monastero certosino con chiesa barocca (affreschi di Luca Giordano), Chiostro Grande e il celebre Presepe Cuciniello. Il museo custodisce anche la storica Testa di Pulcinella: la maschera che da secoli rappresenta l'anima di Napoli. Ingresso €6.\n\n♿ Accessibilità: Ascensore per i livelli principali. Alcuni cortili hanno lastricato storico irregolare.",
        type: "attraction",
        image: "/images/pulcinella.jpg",
        location: { lat: 40.8422, lng: 14.2385, mapQuery: "Certosa di San Martino Napoli" }
      },
      {
        id: "g-villa",
        time: "17:00",
        title: "Villa Floridiana e Parco",
        description: "~10 min a piedi dalla Certosa. Parco romantico all'inglese con vista sul Golfo — ideale per una pausa al tramonto. Il parco è gratuito. Il Museo Duca di Martina (ceramiche, €4) chiude alle 17:00, quindi si visita solo il giardino.\n\n♿ I vialetti principali del parco sono accessibili.",
        type: "attraction",
        image: "/images/villa_floridiana.jpg",
        location: { lat: 40.8392, lng: 14.2283, mapQuery: "Villa Floridiana Napoli" }
      },
      {
        id: "g-scarlatti",
        time: "17:45",
        title: "Aperitivo su Via Scarlatti",
        description: "La via pedonale principale del Vomero, piena di boutique e locali. Perfetta per uno spritz o un caffè seduti, lontano dal turismo del centro.\n\n♿ Via completamente pedonale e piatta.",
        type: "attraction",
        location: { lat: 40.8434, lng: 14.2297, mapQuery: "Via Scarlatti Napoli Vomero" }
      },
      {
        id: "g7",
        time: "20:00",
        title: "Cena da Kebest",
        description: "A 5 min a piedi da Via Scarlatti, in Via Bernini 40 vicino a Piazza Vanvitelli. Il kebab fit & fat di Giovanni Fois e Jana Foodporn: linea Fit (pollo bianco) e linea Fat (cosce con pelle e topping ricchi).\n\n🚠 Rientro: Funicolare Centrale da Vomero → Toledo, poi Metro L1 Toledo → Garibaldi e a piedi all'hotel.",
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
        time: "12:00",
        title: "Arrivo Genitori all'Hotel",
        description: "I genitori arrivano direttamente in macchina al Jazz Hotel. Ci ritroviamo tutti insieme per posare le valigie e partire alla conquista di Napoli!",
        type: "hotel",
        location: { lat: 40.8542, lng: 14.2646, mapQuery: "Via Cesare Rosaroll, 6, 80139 Napoli" }
      },
      {
        id: "v2_antipasto",
        time: "12:30",
        title: "Antipasto: Pizza Fritta",
        description: "Prima tappa culinaria: pizza fritta per strada, il vero street food napoletano. La pasta fritta si gonfia dorata nell'olio e si farcisce con ricotta, cicoli e pepe. Si mangia passeggiando!\n\n🚌 Spostamento dall'hotel (~1.4 km): Bus 202 da 'Rosaroll' verso 'Via dei Tribunali', oppure 10-15 min a piedi lungo Corso Umberto I.\n♿ Accessibilità: Bus dotato di pedana.",
        type: "food",
        image: "/images/pizza_fritta_new.jpg",
        location: { lat: 40.8500, lng: 14.2635, mapQuery: "pizza fritta Napoli centro storico" }
      },
      {
        id: "v2",
        time: "13:15",
        title: "Pranzo: L'Antica Pizzeria Da Michele",
        description: "Il pranzo vero e proprio è da Michele, il tempio della pizza napoletana. Solo due pizze nel menu: Marinara e Margherita. Nient'altro, nessun fronzolo — solo la perfezione.",
        type: "food",
        image: "/images/via_tribunali.png",
        location: { lat: 40.8501, lng: 14.2619, mapQuery: "L'Antica Pizzeria da Michele Via Cesare Sersale Napoli" }
      },
      {
        id: "v_pulcinella",
        time: "14:00",
        title: "Testa di Pulcinella",
        description: "A due passi da Da Michele, in Vico del Fico al Purgatorio, si trova l'iconica statua di Lello Esposito: il grande busto bronzeo di Pulcinella, simbolo scaramantico di Napoli. Secondo la tradizione strofinare il naso porta fortuna!",
        type: "attraction",
        location: { lat: 40.8514, lng: 14.2588, mapQuery: "Testa di Pulcinella Vico del Fico al Purgatorio Napoli" }
      },
      {
        id: "g4",
        time: "14:30",
        title: "Duomo di Napoli (San Gennaro)",
        description: "A pancia piena ci spostiamo verso il maestoso Duomo di Napoli (~500m a piedi da Da Michele). Qui è custodita l'ampolla col sangue di San Gennaro, reliquia tra le più venerate.\n\n♿ Accessibilità: Il Duomo è in piano e totalmente accessibile.",
        type: "attraction",
        image: "/images/duomo_napoli.jpg",
        location: { lat: 40.8528, lng: 14.2594, mapQuery: "Duomo di Napoli" }
      },
      {
        id: "v1_bis",
        time: "15:30",
        title: "Chiostro Maiolicato di Santa Chiara",
        description: "Dal Duomo scendiamo lungo Spaccanapoli fino al Monastero (~1 km a piedi). Entriamo prima che chiuda alle 17:00!\n\n♿ Accessibilità: Completamente in piano e all'aperto.",
        type: "attraction",
        location: { lat: 40.8465, lng: 14.2529, mapQuery: "Chiostro di Santa Chiara Napoli" }
      },
      {
        id: "v4_mann",
        time: "16:30",
        title: "Museo Archeologico Nazionale (MANN)",
        description: "Dal Chiostro di Santa Chiara ci spostiamo al MANN, uno dei musei più importanti al mondo: la più grande collezione di reperti di Pompei ed Ercolano, affreschi, mosaici e la celebre Collezione Farnese. Ingresso €15.\n\n🚌 Spostamento (~1.2 km): Metro L1 da 'Università' a 'Museo'.\n♿ Accessibilità: Stazione Metro e museo completamente accessibili in carrozzina.",
        type: "attraction",
        location: { lat: 40.8530, lng: 14.2507, mapQuery: "Museo Archeologico Nazionale Napoli" }
      },
      {
        id: "v5",
        time: "20:30",
        title: "Cena al Tandem",
        description: "A cena andiamo al Tandem Spaccanapoli, celebre per il suo eccezionale ragù.\n\n🚌 Spostamento dal MANN (~1.5 km): Metro L1 da 'Museo' a 'Università', poi breve passeggiata.\n🚌 Rientro in hotel: Metro L1 da 'Università' o 'Duomo' a 'Garibaldi'.\n♿ Accessibilità: Stazioni dotate di ascensori per le carrozzine.",
        type: "food",
        image: "/images/spaccanapoli.png",
        location: { lat: 40.8491, lng: 14.2548, mapQuery: "Tandem Via Paladino Napoli" }
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
        id: "s0_hotel",
        time: "",
        title: "Jazz Hotel (base)",
        description: "Il punto di partenza della giornata: Jazz Hotel, Via Cesare Rosaroll 6.",
        type: "hotel",
        location: { lat: 40.8542, lng: 14.2646, mapQuery: "Via Cesare Rosaroll, 6, 80139 Napoli" }
      },
      {
        id: "s1",
        time: "10:00",
        title: "Stazione Arte Toledo",
        description: "Dall'hotel raggiungiamo Via Toledo (Distanza: ~2 km).\n\n🚌 Spostamento: Metro L1 da 'Garibaldi' a 'Toledo'.\n♿ Accessibilità: Entrambe le stazioni sono dotate di ascensori.\n\nScesi a Toledo, sarete avvolti dai celebri mosaici azzurri a tema oceano, una tra le metropolitane più belle del mondo.",
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
        title: "Pranzo: Trattoria Morè",
        description: "Pranzo diviso in tappe per assaggiare di tutto! Come antipasto cuoppi fritti per strada e pizza a portafoglio. Poi pranziamo alla Trattoria Morè (Vico Tiratoio 5, Quartieri Spagnoli).",
        type: "food",
        image: "/images/galleria_umberto.png",
        location: { lat: 40.8388, lng: 14.2472, mapQuery: "Trattoria More Vico Tiratoio Napoli" }
      },
      {
        id: "s4b",
        time: "14:30",
        title: "Solo per Massimo: Trippa da Fiorenzano",
        description: "Tappa facoltativa solo per i più avventurosi! La Friggitoria Fiorenzano è il posto giusto per assaggiare la trippa napoletana, uno street food autentico e poco turistico.",
        type: "food",
        location: { lat: 40.8368, lng: 14.2487, mapQuery: "Friggitoria Fiorenzano Napoli Via Toledo" }
      },
      {
        id: "s-sga",
        time: "14:45",
        title: "San Gregorio Armeno",
        description: "Dal cuore dei Quartieri scendiamo verso Spaccanapoli per addentrarci in San Gregorio Armeno, la via dei maestri presepiai. (~10 min a piedi)\n\n♿ Attenzione all'alta densità di persone.",
        type: "attraction",
        image: "/images/san_gregorio_armeno.png",
        location: { lat: 40.8494, lng: 14.2573, mapQuery: "Via San Gregorio Armeno" }
      },
      {
        id: "s5",
        time: "16:30",
        title: "Verso Castel dell'Ovo",
        description: "Ci muoviamo verso l'isolotto di Megaride e l'iconico Castel dell'Ovo (Distanza: ~2 km da Spaccanapoli).\n\n🚌 Spostamento: Bus 201 da 'Piazza Municipio' fino a 'Piazza Vittoria'.\n♿ Accessibilità: Bus dotato di pedana. Lungomare e castello sono accessibili e in piano.",
        type: "attraction",
        image: "/images/castel_dellovo.png",
        location: { lat: 40.8282, lng: 14.2483, mapQuery: "Castel dell'Ovo Napoli" }
      },
      {
        id: "s6",
        time: "18:00",
        title: "Passeggiata sul Lungomare Caracciolo",
        description: "Il maestoso Lungomare è pedonale, ampio e completamente in piano. Godetevi la tranquillità in compagnia del sole calante.",
        type: "attraction",
        image: "/images/lungomare_napoli.png",
        location: { lat: 40.8322, lng: 14.2370, mapQuery: "Lungomare Caracciolo" }
      },
      {
        id: "s7",
        time: "20:30",
        title: "Cena Compleanno: Nennella (o Il Ruotino)",
        description: "Torniamo verso i Quartieri per festeggiare. Speriamo di trovare posto all'Antica Trattoria da Nennella. In alternativa, il piano B è Il Ruotino!\n\n🚌 Spostamento dal mare (> 1.5 km): Bus 151/128 (direzione centro) da Vittoria a San Carlo/Medina, o in alternativa consigliato il Taxi.\n♿ Accessibilità: I taxi napoletani sono una garanzia e un'ottima soluzione per chi è in carrozzina.",
        type: "food",
        image: "/images/nennella_napoli.png",
        location: { lat: 40.8406, lng: 14.2468, mapQuery: "Trattoria da Nennella Via Concezione a Montecalvario Napoli" }
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
        id: "d0_hotel",
        time: "",
        title: "Jazz Hotel (base)",
        description: "Il punto di partenza della giornata: Jazz Hotel, Via Cesare Rosaroll 6.",
        type: "hotel",
        location: { lat: 40.8542, lng: 14.2646, mapQuery: "Via Cesare Rosaroll, 6, 80139 Napoli" }
      },
      {
        id: "d0_cristo",
        time: "10:00",
        title: "Cristo Velato — Tour Prenotato",
        description: "Iniziamo l'ultima mattina con il capolavoro: tour guidato di 30 minuti alla Cappella Sansevero per ammirare il Cristo Velato. Una scultura che lascia senza parole — il marmo sembra tessuto vero.\n\n🚌 Spostamento dalla zona hotel (~2 km): Metro L1 da 'Garibaldi' a 'Università', poi 5 min a piedi.\n♿ Accessibilità: Presente rampa, ma spazi molto ristretti intorno alla cappella.",
        type: "attraction",
        image: "/images/cristo_velato.png",
        location: { lat: 40.8494, lng: 14.2543, mapQuery: "Museo Cappella Sansevero" }
      },
      {
        id: "d2",
        time: "11:00",
        title: "Pranzo vicino alla Stazione",
        description: "Dopo il Cristo Velato, rientro in zona hotel per ritirare i bagagli e sedersi per un ultimo pranzo senza fretta prima della partenza.",
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
