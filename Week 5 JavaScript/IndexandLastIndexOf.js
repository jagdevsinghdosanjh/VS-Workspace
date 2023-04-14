var quote='With great power comes great responsibility';

var pieceOfTheQuote=quote.substring(10,20);
console.log(pieceOfTheQuote);

var replacedString=quote.replace('responsibility', 'electricity bill');
console.log(replacedString);
console.log(quote);

var fruits='apples,oranges,bananas';
var fruitsArray=fruits.split(',');
console.log(fruitsArray);

var firstIndexOf=quote.indexOf('great');
console.log('First Index of great in quote is:',firstIndexOf);

var lastIndexOf=quote.lastIndexOf('great');
console.log('Last Index of great in quote is:',lastIndexOf);
