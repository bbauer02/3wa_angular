const { of } = require('rxjs');
const { max } = require('rxjs/operators');

// Liste de points
const source = of(
    { x: 10.5, y: -10.6 },
    { x: 5.5, y: 8.3 },
    { x: -7.3, y: 3.3 },
    { x: 8.9, y: -2.6 }
);

// Mapping data  TODO Filtre

// S'inscrire TODO Afficher les données