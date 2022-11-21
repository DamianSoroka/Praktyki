const books = [
    {title: 'Total loss', pages: 600, genre: 'fantasy', rating: 5},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 2},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 7},
    {title: '10th Joy', pages: 32, genre: 'action', rating: 8},
    {title: 'Quickfix', pages: 15, genre: 'fantasy', rating: 1},
    {title: 'World Ender', pages: 199, genre: 'fantasy', rating: 3},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 9},
    {title: '300', pages: 600, genre: 'criminology', rating: 10},
    {title: 'Renewer', pages: 472, genre: 'biology', rating: 2},
];
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x); //kompozycja

const filterGenreEndsWithY = (list) => list.filter((book) => book.genre.endsWith('y')); //genre kończy się na y
const filterPagesAreEven = (list) => list.filter((book) => book.pages % 2 == 0); //pages są parzyste
const mapToLettersInTitle = (list) => list.map(({title}) => title.replace(/\s/, "").length);
const sumLetters = (book) => book.reduce((currSum, newPage) => currSum + newPage);//liczy ilość liter w tytule
const zad6 = compose(sumLetters, mapToLettersInTitle, filterPagesAreEven, filterGenreEndsWithY);
console.log(zad6(books));

const filterTitleHasANumber = (list) => list.filter((book) => book.title.match(/\W*\d\W*/));//tytuł zawiera liczbę
const filterPagesAreNotEven = (list) => list.filter((book) => book.pages % 2 == 0); //pages są nieparzyste
const mapToRatings = (list) => list.map(({rating}) => rating > 5);
const sumGoodRatings = (book) => book.reduce((currSum, newPage) => currSum + newPage);//liczy ilość pozytywnych ocen
const zad7 = compose(sumGoodRatings, mapToRatings, filterPagesAreNotEven, filterTitleHasANumber);
console.log(zad7(books));




/*
const filterTitleStartsWithTotal = (list) => list.filter((book) => book.title.startsWith('Total'));
const filterGenreIsFantasy = (list) => list.filter((book) => book.genre === 'fantasy');
const mapToPages = (list) => list.map(({pages}) => pages);
const sumPages = (book) => book.reduce((currSum, newPage) => currSum + newPage)
//tworzymy kompozycje
const badCompose = (fn1, fn2, fn3) => (x) => fn3(fn2(fn1(x)));
const compose = (...fns) => (x) => fns.reduceRight((acc, fn) => fn(acc), x);
//tworzymy funkcję używającą kompozycji
const titleStartsWithTotalPages = compose(sumPages, mapToPages, filterTitleStartsWithTotal);
const genreIsFantasyPages = compose(sumPages, mapToPages, filterGenreIsFantasy);
//wypisujemy dla książek
console.log(titleStartsWithTotalPages(books));
console.log(genreIsFantasyPages(books));
*/