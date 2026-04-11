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
        description: "Arrivo in stazione con treno Frecciarossa. Preparati a scendere!",
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
        description: "A circa 10 minuti di cammino in linea retta senza dislivelli, lasceremo le valigie per girare leggeri.",
        type: "hotel",
        location: { lat: 40.8542, lng: 14.2646, mapQuery: "Via Cesare Rosaroll, 6, 80139 Napoli" }
      },
      {
        id: "g4",
        time: "14:30",
        title: "Vomero via Funicolare",
        description: "Dirigiamoci verso l'elegante quartiere collinare del Vomero prendendo la storica Funicolare o la Metro Linea 1.",
        type: "travel",
        image: "/images/funicolare_napoli.png",
        location: { lat: 40.8441, lng: 14.2373, mapQuery: "Funicolare Centrale Napoli" }
      },
      {
        id: "g5",
        time: "15:30",
        title: "Castel Sant'Elmo",
        description: "Fortezza medievale a forma di stella. È l'unico punto da cui puoi ammirare Napoli a 360 gradi, con il Golfo, Spaccanapoli vista dall'alto e il Vesuvio.\n\n♿ Accessibilità: Totalmente accessibile con sistema di ascensori interni.",
        type: "attraction",
        image: "/images/castel_santelmo.png",
        location: { lat: 40.8436, lng: 14.2386, mapQuery: "Castel Sant'Elmo" }
      },
      {
        id: "g6",
        time: "20:00",
        title: "Pizza da Zia Esterina Sorbillo",
        description: "Tornati a piano terra, gustiamo una delle pizze fritte migliori della città. Bollente, dorata, con un cuore di ricotta e provola.",
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
        description: "Ronda di dolci per accogliere i genitori. I 'Fiocchi di Neve' della Pasticceria Poppella sono magiche palline di brioche farcite con una crema di latte freschissima.",
        type: "food",
        image: "/images/poppella_fiocchi.png",
        location: { lat: 40.8576, lng: 14.2520, mapQuery: "Pasticceria Poppella Napoli" }
      },
      {
        id: "v2",
        time: "12:30",
        title: "Pranzo ai Tribunali",
        description: "Passeggiata nel cuore della Napoli greco-romana per una pizza a portafoglio classica (Sorbillo ai Tribunali o limitrofe).",
        type: "food",
        image: "/images/via_tribunali.png",
        location: { lat: 40.8504, lng: 14.2568, mapQuery: "Via dei Tribunali Napoli" }
      },
      {
        id: "v2_bis",
        time: "14:30",
        title: "Cristo Velato",
        description: "Visita alla Cappella Sansevero per ammirare il capolavoro assoluto del Cristo Velato, voluto fortemente da Roberta! Ricordatevi di prenotare i biglietti online con largo anticipo.\n\n♿ Accessibilità: Presente una rampa all'ingresso, ma gli spazi interni sono molto ristretti.",
        type: "attraction",
        image: "/images/cristo_velato.png",
        location: { lat: 40.8494, lng: 14.2543, mapQuery: "Museo Cappella Sansevero" }
      },
      {
        id: "v3",
        time: "15:30",
        title: "Spaccanapoli e San Gregorio Armeno",
        description: "Via San Gregorio Armeno è il cuore pulsante e caotico dei maestri presepiai. Troverai statuine di ogni genere, dal classico pastore a Maradona. È coloratissima e sempre in festa.\n\n♿ Attenzione ai sampietrini e all'alta densità di persone.",
        type: "attraction",
        image: "/images/san_gregorio_armeno.png",
        location: { lat: 40.8494, lng: 14.2573, mapQuery: "Via San Gregorio Armeno" }
      },
      {
        id: "v4",
        time: "17:00",
        title: "Napoli Sotterranea (Divisione Gruppi)",
        description: "Un viaggio incredibile a 40 metri di profondità tra antichi acquedotti romani, cisterne e rifugi antiaerei del '900. I genitori e la ragazza vanno in esplorazione.\n\n♿ Accessibilità: Il sottosuolo non è adatto alle carrozzine. Puoi aspettare in Piazza San Gaetano dove ci sono vari caffè ai tavolini all'aperto, molto vicini all'ingresso.",
        type: "attraction",
        image: "/images/napoli_sotterranea.png",
        location: { lat: 40.8507, lng: 14.2576, mapQuery: "Napoli Sotterranea" }
      },
      {
        id: "v5",
        time: "20:00",
        title: "Cena per le vie del Centro",
        description: "Una cena rilassante con la famiglia appena ricongiunta in uno dei tanti ristoranti suggestivi attorno a Spaccanapoli.",
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
    title: "Lungomare & Compleanno",
    events: [
      {
        id: "s1",
        time: "10:30",
        title: "Piazza del Plebiscito e Galleria",
        description: "Ammirate l'immenso colonnato neoclassico di Piazza del Plebiscito, con il Palazzo Reale e la celebre Galleria Umberto I con la sua sfavillante volta in vetro e ferro.",
        type: "attraction",
        image: "/images/piazza_plebiscito.png",
        location: { lat: 40.8359, lng: 14.2487, mapQuery: "Piazza del Plebiscito" }
      },
      {
        id: "s1_bis",
        time: "11:30",
        title: "Galleria Umberto I",
        description: "Shopping e caffè godendosi la luce meravigliosa di questa maestosa galleria dell'Ottocento.",
        type: "attraction",
        image: "/images/galleria_umberto.png",
        location: { lat: 40.8384, lng: 14.2497, mapQuery: "Galleria Umberto I Napoli" }
      },
      {
        id: "s2",
        time: "13:00",
        title: "Verso Castel dell'Ovo",
        description: "Passeggiata verso l'isolotto di Megaride, dove sorge il Castel dell'Ovo, fortezza normanna avvolta dal mare e dalle leggende.",
        type: "attraction",
        image: "/images/castel_dellovo.png",
        location: { lat: 40.8282, lng: 14.2483, mapQuery: "Castel dell'Ovo" }
      },
      {
        id: "s3",
        time: "16:00",
        title: "Passeggiata sul Lungomare",
        description: "Il Lungomare Caracciolo è ampio e completamente pianeggiante, ideale da fare in serenità. Rilassatevi guardando l'azzurro del Mediterraneo col Vesuvio all'orizzonte.",
        type: "attraction",
        image: "/images/lungomare_napoli.png",
        location: { lat: 40.8322, lng: 14.2370, mapQuery: "Lungomare Caracciolo" }
      },
      {
        id: "s4",
        time: "20:00",
        title: "Cena di Compleanno: Nennella",
        description: "Tanti auguri! Ai Quartieri Spagnoli l'Antica Trattoria da Nennella (nella loro nuova o vecchia sede) regala un'atmosfera unica di puro teatro popolare, canti, caos buono e cibo tipico campano, come la mitica pasta e patate.",
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
    title: "Partenza",
    events: [
      {
        id: "d1",
        time: "10:00",
        title: "Ultimi souvenir su Via Toledo",
        description: "Passeggiata rilassata sulla strada pedonale più nota di Napoli per acquistare limoncello, taralli o l'ultimo caffè.",
        type: "attraction",
        location: { lat: 40.8415, lng: 14.2488, mapQuery: "Via Toledo, Napoli" }
      },
      {
        id: "d2",
        time: "12:30",
        title: "Pranzo Saluti",
        description: "Ripartendo verso la stazione, pranzo con l'ultimo cuoppo fritto o ragù.",
        type: "food",
        location: { lat: 40.8510, lng: 14.2690, mapQuery: "Piazza Garibaldi, Napoli" }
      },
      {
        id: "d3",
        time: "15:00",
        title: "Partenza Centrale",
        description: "Presa dei bagagli all'Hotel e saluti finali a Napoli Centrale. Buon rientro!",
        type: "travel",
        location: { lat: 40.8530, lng: 14.2721, mapQuery: "Napoli Centrale" }
      }
    ]
  }
];
