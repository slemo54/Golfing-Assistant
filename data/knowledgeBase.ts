import { KnowledgeBase } from '../types';

export const knowledgeBase: KnowledgeBase = {
  golfClubs: [
    {
      id: "GC_GIOVANNI",
      name: "Golf Club Giovanni",
      region: "Verona",
      holes: 9, // Often smaller clubs in this area
      par: 36,
      description: "Un'oasi verde alle porte di Verona, perfetta per l'allenamento.",
      priceRange: "€40 - €60",
      features: ["Practice", "Friendly"],
      imageUrl: "https://images.unsplash.com/photo-1592919505780-30395071d480?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_MUSELLA",
      name: "Golf Club La Musella",
      region: "Verona",
      holes: 18,
      par: 72,
      description: "Circolo agrituristico immerso nei vigneti e nella natura veronese.",
      priceRange: "€50 - €80",
      features: ["Vineyards", "Relax"],
      imageUrl: "https://images.unsplash.com/photo-1620757987723-d3455eb35442?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_PARADISO",
      name: "Golf Club Paradiso Del Garda",
      region: "Peschiera del Garda",
      holes: 18,
      par: 71,
      description: "Resort moderno progettato da Jim Fazio, offre fairway ampi e laghi strategici.",
      priceRange: "€70 - €100",
      features: ["Resort", "Lake View"],
      imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_VERONA",
      name: "Golf Club Verona",
      region: "Sommacampagna",
      holes: 18,
      par: 72,
      description: "Uno dei percorsi più prestigiosi e storici, immerso nelle colline di Custoza.",
      priceRange: "€80 - €120",
      features: ["Championship", "Historic"],
      imageUrl: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_VILLAFRANCA",
      name: "Golf Club Villafranca Le Vigne",
      region: "Villafranca di Verona",
      holes: 18,
      par: 70,
      description: "Percorso tecnico che si snoda tra i famosi vigneti del vino Custoza.",
      priceRange: "€60 - €90",
      features: ["Vineyards", "Technical"],
      imageUrl: "https://images.unsplash.com/photo-1596707325248-8dfce3f6cce9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_VENEZIA",
      name: "Circolo Golf Venezia",
      region: "Venezia Lido",
      holes: 18,
      par: 72,
      description: "L'unico campo a Venezia, un links storico e affascinante costruito su una fortezza.",
      priceRange: "€90 - €130",
      features: ["Links", "Unique"],
      imageUrl: "https://images.unsplash.com/photo-1593134257782-e89567b7718a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_JESOLO",
      name: "Golf Jesolo",
      region: "Lido di Jesolo",
      holes: 18,
      par: 72,
      description: "Un'oasi verde a due passi dalla spiaggia, ideale per una vacanza rilassante.",
      priceRange: "€60 - €90",
      features: ["Holiday", "Flat"],
      imageUrl: "https://images.unsplash.com/photo-1560170433-f5799988226d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_PRA",
      name: "Pra' Delle Torri Golf Caorle",
      region: "Caorle",
      holes: 18,
      par: 72,
      description: "Splendido percorso sea-edge, dove la brezza marina accompagna il gioco.",
      priceRange: "€60 - €95",
      features: ["Sea View", "Windy"],
      imageUrl: "https://images.unsplash.com/photo-1576225106612-ea30b5bb16b0?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_POGGIO",
      name: "Poggio Dei Medici Golf Club",
      region: "Firenze (Mugello)",
      holes: 18,
      par: 73,
      description: "Sede di numerosi Open d'Italia, un capolavoro nel cuore della Toscana.",
      priceRange: "€90 - €140",
      features: ["Top Class", "Tuscany"],
      imageUrl: "https://images.unsplash.com/photo-1629256259779-d19889423c1e?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_ASOLO",
      name: "Asolo Golf Club",
      region: "Cavaso del Tomba",
      holes: 27,
      par: 72,
      description: "27 buche spettacolari ai piedi delle colline trevigiane.",
      priceRange: "€75 - €110",
      features: ["27 Holes", "Wellness"],
      imageUrl: "https://images.unsplash.com/photo-1616429562723-5e921d607449?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_CAAMATA",
      name: "Golf Club Ca' Amata",
      region: "Castelfranco Veneto",
      holes: 18,
      par: 71,
      description: "Percorso molto curato e ricco d'acqua, sviluppato intorno alla villa storica.",
      priceRange: "€60 - €90",
      features: ["Water", "Parkland"],
      imageUrl: "https://images.unsplash.com/photo-1579782508493-9c884b29b4df?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_BOLOGNA",
      name: "Golf Club Bologna",
      region: "Monte San Pietro",
      holes: 18,
      par: 72,
      description: "Disegnato da Cotton & Harris, un classico intramontabile sui colli bolognesi.",
      priceRange: "€80 - €120",
      features: ["Classic", "Hilly"],
      imageUrl: "https://images.unsplash.com/photo-1605218427368-3d8434771960?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_LEFONTI",
      name: "Golf Club Le Fonti Asd",
      region: "Castel San Pietro Terme",
      holes: 18,
      par: 72,
      description: "Un percorso divertente e vario nella Valle del Sillaro.",
      priceRange: "€60 - €90",
      features: ["Spa Nearby", "Sporty"],
      imageUrl: "https://images.unsplash.com/photo-1623861214878-00a455a30685?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_MONTEVEGLIO",
      name: "Golf Club Monteveglio",
      region: "Monteveglio",
      holes: 18,
      par: 70,
      description: "Golf naturale e tecnico, per chi ama la quiete assoluta.",
      priceRange: "€50 - €80",
      features: ["Nature", "Quiet"],
      imageUrl: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_VARESE",
      name: "Golf Club Varese",
      region: "Luvinate",
      holes: 18,
      par: 72,
      description: "Un balcone panoramico sui laghi e sul Monte Rosa. Club storico.",
      priceRange: "€80 - €130",
      features: ["Panorama", "History"],
      imageUrl: "https://images.unsplash.com/photo-1534316773292-62b14644e5d5?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_DEILAGHI",
      name: "Golf Dei Laghi",
      region: "Travedona Monate",
      holes: 18,
      par: 73,
      description: "Un percorso nel bosco, tecnico e mai banale.",
      priceRange: "€60 - €100",
      features: ["Woodland", "Technical"],
      imageUrl: "https://images.unsplash.com/photo-1588613437140-622867562828?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "GC_ROBINIE",
      name: "Le Robinie Golf Club & Resort",
      region: "Solbiate Olona",
      holes: 18,
      par: 72,
      description: "L'unico campo Jack Nicklaus Signature in Italia. Un must-play.",
      priceRange: "€80 - €120",
      features: ["Nicklaus Design", "Challenging"],
      imageUrl: "https://images.unsplash.com/photo-1595844855734-d0216bb5f768?auto=format&fit=crop&w=600&q=80"
    }
  ],
  hotels: [
    {
      id: "16",
      name: "Agriturismo Il Melograno",
      stars: 3,
      region: "Verona",
      distanceToGolf: {
        "Golf Club Giovanni": "Partner",
        "Golf Club La Musella": "Partner",
        "Golf Club Paradiso Del Garda": "Partner",
        "Golf Club Verona": "Partner",
        "Golf Club Villafranca Le Vigne": "Partner"
      },
      description: "Agriturismo autentico a gestione familiare. Perfetto per vivere la campagna veronese.",
      amenities: ["Breakfast", "Garden", "Quiet"],
      priceRange: "€80.00",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "17",
      name: "Almar Jesolo Resort & Spa",
      stars: 5,
      region: "Lido di Jesolo",
      distanceToGolf: {
        "Circolo Golf Venezia": "Partner",
        "Golf Jesolo": "Partner",
        "Pra' Delle Torri Golf Caorle": "Partner"
      },
      description: "Lusso fronte mare. Premiata spa Almablu e servizi esclusivi per golfisti.",
      amenities: ["Luxury Spa", "Beach Front", "Pool"],
      priceRange: "€160.00",
      imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "30",
      name: "Dei Vicari",
      stars: 4,
      region: "Firenze (Scarperia)",
      distanceToGolf: {
        "Poggio Dei Medici Golf Club": "Partner"
      },
      description: "Hotel di charme nel borgo medievale di Scarperia, a un passo dal circuito e dal golf.",
      amenities: ["Wellness", "Historic Center"],
      priceRange: "€150.00",
      imageUrl: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "6",
      name: "Enjoy Garda Hotel",
      stars: 4,
      region: "Peschiera del Garda",
      distanceToGolf: {
        "Golf Club Giovanni": "Partner",
        "Golf Club La Musella": "Partner",
        "Golf Club Paradiso Del Garda": "Partner",
        "Golf Club Verona": "Partner",
        "Golf Club Villafranca Le Vigne": "Partner"
      },
      description: "Hotel 4 stelle dinamico e moderno. Famoso per i servizi bike e golf.",
      amenities: ["Outdoor Pool", "Bike Services", "Modern"],
      priceRange: "€119.00",
      imageUrl: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "31",
      name: "Hotel Canova",
      stars: 3,
      region: "Treviso (Cavaso)",
      distanceToGolf: {
        "Asolo Golf Club": "Partner",
        "Golf Club Ca' Amata": "Partner"
      },
      description: "Accoglienza calorosa ai piedi delle colline di Asolo. Ideale per gruppi.",
      amenities: ["Restaurant", "Panorama"],
      priceRange: "€70.00",
      imageUrl: "https://images.unsplash.com/photo-1560185127-6a682976241d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "23",
      name: "J44 Lifestyle Hotel Jesolo",
      stars: 5,
      region: "Lido di Jesolo",
      distanceToGolf: {
        "Circolo Golf Venezia": "Partner",
        "Golf Jesolo": "Partner",
        "Pra' Delle Torri Golf Caorle": "Partner"
      },
      description: "Il nuovo punto di riferimento lifestyle a Jesolo. Tecnologico e cosmopolita.",
      amenities: ["Rooftop Bar", "High Tech", "Design"],
      priceRange: "€220.00",
      imageUrl: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "10",
      name: "Montresor Hotel Palace",
      stars: 4,
      region: "Verona",
      distanceToGolf: {
        "Golf Club Giovanni": "Partner",
        "Golf Club La Musella": "Partner",
        "Golf Club Paradiso Del Garda": "Partner",
        "Golf Club Villafranca Le Vigne": "Partner"
      },
      description: "Eleganza classica a pochi minuti dal centro di Verona.",
      amenities: ["Conference", "Bar", "Comfort"],
      priceRange: "€80.00",
      imageUrl: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "9",
      name: "Montresor Hotel Tower",
      stars: 4,
      region: "Bussolengo (VR)",
      distanceToGolf: {
        "Golf Club Giovanni": "Partner",
        "Golf Club La Musella": "Partner",
        "Golf Club Paradiso Del Garda": "Partner",
        "Golf Club Verona": "Partner",
        "Golf Club Villafranca Le Vigne": "Partner"
      },
      description: "Imponente struttura ideale per business e golf tours. Camere molto spaziose.",
      amenities: ["Large Rooms", "Strategic Location"],
      priceRange: "€80.00",
      imageUrl: "https://images.unsplash.com/photo-1590490360182-c8729931f548?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "26",
      name: "Palazzo Ai Capitani",
      stars: 4,
      region: "Peschiera del Garda",
      distanceToGolf: {
        "Golf Club Giovanni": "Partner",
        "Golf Club La Musella": "Partner",
        "Golf Club Paradiso Del Garda": "Partner",
        "Golf Club Verona": "Partner",
        "Golf Club Villafranca Le Vigne": "Partner"
      },
      description: "Boutique hotel storico nel cuore di Peschiera. Atmosfera unica.",
      amenities: ["Boutique", "History", "Design"],
      priceRange: "€149.00",
      imageUrl: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "25",
      name: "Palazzo Di Varignana",
      stars: 5,
      region: "Bologna",
      distanceToGolf: {
        "Golf Club Bologna": "Partner",
        "Golf Club Le Fonti Asd": "Partner",
        "Golf Club Monteveglio": "Partner"
      },
      description: "Resort esclusivo con parco privato, ville e una delle SPA più grandi d'Italia.",
      amenities: ["Luxury Spa", "Villas", "Gourmet"],
      priceRange: "€232.00",
      imageUrl: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "15",
      name: "Residenza Del Golfo",
      stars: 3,
      region: "Origgio (VA)",
      distanceToGolf: {
        "Golf Club Varese": "Partner",
        "Golf Dei Laghi": "Partner",
        "Le Robinie Golf Club & Resort": "Partner"
      },
      description: "Soluzione pratica e indipendente, ottima base per i campi del varesotto.",
      amenities: ["Apartments", "Parking", "Freedom"],
      priceRange: "€80.00",
      imageUrl: "https://images.unsplash.com/photo-1568495248636-6432b97bd949?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "29",
      name: "Ripaverde",
      stars: 4,
      region: "Firenze (Borgo S. Lorenzo)",
      distanceToGolf: {
        "Poggio Dei Medici Golf Club": "Partner"
      },
      description: "Ospitalità toscana genuina immersa nel verde. Ristorante tipico apprezzato.",
      amenities: ["Restaurant", "Nature", "Relax"],
      priceRange: "€140.00",
      imageUrl: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "28",
      name: "Villa Erbaia Relais",
      stars: 4,
      region: "Barberino di Mugello",
      distanceToGolf: {
        "Poggio Dei Medici Golf Club": "Partner"
      },
      description: "Dimora storica ricca di fascino, per un soggiorno romantico e sportivo.",
      amenities: ["Charme", "History", "Park"],
      priceRange: "€250.00",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    }
  ]
};