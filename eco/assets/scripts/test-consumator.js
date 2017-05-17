$('#progress-circle').hide();
//$('#rank-btn').hide();



var quiz = $('#quiz').quiz({
  //resultsScreen: '#results-screen',
  counter: true,
  //homeButton: '#custom-home',
  counterFormat: 'Intrebarea %current din %total',
  questions: [
    {
      'q': 'Utilitatea economică pentru un consumator inseamna compararea:',
      'options': [
        'utilitatii totale cu prețul unitar',
        'raportul preț-utilitate marginală',
        'utilitații totale cu cea marginală',
        'utilitații marginale cu pretul unitar'
      ],
      'correctIndex': 3,
      'correctResponse': 'Bravo, hai ca a fost simpla asta!',
      'incorrectResponse': 'Ups. Utilitatea marginala cu pretul unitar este raspunsul.'
    },
    {
      'q': 'Scopul unui consumator este:',
      'options': [
        'sa economiseasca bani',
        'sa-si creasca veniturile',
        'sa consume cat mai mult',
        'sa-si maximizeze utilitatea totala'
      ],
      'correctIndex': 3,
      'correctResponse': 'Intradevar, asta e scopul oricarui consumator.',
      'incorrectResponse': 'Ah, nu asta. Consumatorul vrea sa iti maximizeze utilitatea totala.'
    },
    {
      'q': 'Daca utilitatea marginala este pozitiva, atunci utilitatea totala va fi:',
      'options': [
        'descrescatoare',
        'crescatoare',
        'minima',
        'nula'
      ],
      'correctIndex': 1,
      'correctResponse': 'Asta e la mintea cocosului, bravo!',
      'incorrectResponse': 'Utilitatea totala inseamna insumarea utilitatilor marginale, deci crescatoare.'
    },
    {
      'q': 'Daca utilitatea marginala este negativa, atunci:',
      'options': [
        's-a atins starea de saturare',
        'utilitatea totala este maxima',
        'utilitatea totala descreste',
        'utilitatea totala este minima'
      ],
      'correctIndex': 2,
      'correctResponse': 'Asta e la fel ca intrebarea de dinainte, bravo!',
      'incorrectResponse': 'Ups, daca ai fi fost atent mai inainte n-ai fi gresit.'
    },
    {
      'q': 'Daca utilitatea marginala este zero, atunci:',
      'options': [
        'utilitatea totala este minima',
        'utilitatea totala este maxima',
        'utilitatea totala este nula',
        'utilitatea totala este descrescatoare'
      ],
      'correctIndex': 1,
      'correctResponse': 'Bravo!Esti istet!',
      'incorrectResponse': 'Gresit, intrucat s-a ajuns la saturatie..'
    },
    {
      'q': 'Cand utilitatea marginala descreste:',
      'options': [
        'UT creste cu o marime crescatoare',
        'UT creste cu o marime constanta',
        'UT creste cu o marime descrescatoare',
        'UT creste si dupa starea de saturare'
      ],
      'correctIndex': 2,
      'correctResponse': 'Corect!',
      'incorrectResponse': 'Ups, mai gandeste-te!'
    },
    {
      'q': 'Un consumator utilizeaza opt doze din bunul X, avand utilitatile individuale 8, 6, 3, 2, 1, -1, -3, -4.La ce valoare a lui UT s-a atins starea de saturare?',
      'options': [
        '19',
        '20',
        '12',
        '16'
      ],
      'correctIndex': 1,
      'correctResponse': 'Corect!Pun pariu ca esti as la matematica!',
      'incorrectResponse': 'Ups, poate ai gresit la calcule!'
    },
    {
      'q': 'Raportul utilitate marginala/pret prentru bunul Y este 0.8.Pretul unitar al bunului Y este 6.000 u.m.La echilibru, utilitatea marginala a bunului Y este:',
      'options': [
        '4800 u.m.',
        '750 u.m.',
        '5000 u.m.',
        '3000 u.m.'
      ],
      'correctIndex': 0,
      'correctResponse': 'Corect!Pun pariu ca esti as la matematica!',
      'incorrectResponse': 'Poate nu te pricepi chiar asa bine la matematica.'
    },
    {
      'q': 'Utilitatea marginala poate fi',
      'options': [
        'pozitiva, negativa sau nula',
        'negativa si crescatoare',
        'pozitiva si crescatoare',
        'mai mare decat utilitatea individuala'
      ],
      'correctIndex': 0,
      'correctResponse': 'Corect!Stii ceva matematica!',
      'incorrectResponse': 'Eh, mai incearca.'
    },
    {
      'q': 'Prin consumarea unei unitati suplimentare dintr-un bun a carui utilitate marginala este negativa, utilitatea totala:',
      'options': [
        'creste',
        'scade cu o marime crescatoare',
        'scade cu o marime descrescatoare',
        'devine egala cu utilitate marginala'
      ],
      'correctIndex': 2,
      'correctResponse': 'Corect!Asta a fost ultima intrebare!',
      'incorrectResponse': 'Eh, nu te descuraja, mai fa o data lectia.'
    }
  ]
});
