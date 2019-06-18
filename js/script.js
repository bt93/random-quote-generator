/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Array of quote objects
let quotes = [
  {
    quote: "Don't cry because it's over, smile because it happened.",
    source: 'Dr. Seuss'
  },
  {
    quote: "Life is what happens when you’re busy making other plans.",
    source: 'John Lennon',
    citation: 'Beautiful Boy (Darling Boy)',
    year: 1981
  },
  {
    quote: "Get busy living or get busy dying.",
    source: 'Stephen King',
    citation: 'Rita Hayworth and Shawshank Redemption',
    year: 1982
  },
  {
    quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    source: 'Mark Twain'
  },
  {
    quote: "The opposite of love is not hate; it’s indifference.",
    source: 'Elie Wiesel'
  },
  {
    quote: "The future belongs to those who believe in the beauty of their dreams.",
    source: 'Eleanor Roosevelt'
  },
  {
    quote: "Not all those who wander are lost.",
    source: 'J.R.R. Tolkien',
    citation: 'The Lord of the Rings',
    year: 1954
  }, 
  {
    quote: "All those moments will be lost in time, like tears in rain.",
    source: 'David Peoples',
    citation: 'Blade Runner',
    year: 1982
  }, 
  {
    quote: "Every lie we tell incurs a debt to the truth. Sooner or later that debt is paid.",
    source: 'Craig Mazin',
    citation: "HBO's Chernobyl",
    year: 2019
  }
];


/*
 * Gets a random number betweet 0 and the length of the quote array.
 * returns the random quote selected. 
 */
function getRandomQuote(arr) {
  let randomNum = Math.floor(Math.random() * arr.length) + 0
  return quotes[randomNum];
}



/*
 * Takes the random quote and puts the data from the object into a string
 * If there is a citation and year for the quote it'll add the HTML.
 * Then takes the DOM and adds the string to the HTML file. 
 */

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let HTMLString = `<p class="quote">"${randomQuote.quote}"</p>
  <p class="source"> ${randomQuote.source}`

  if (randomQuote.citation) {
    HTMLString += ` <span class="citation"> ${randomQuote.citation} </span>`;
  }

  if (randomQuote.year) {
    HTMLString += `<span class="year"> ${randomQuote.year} </span>`;
  }

  HTMLString += `</p>`;

  document.getElementById('quote-box').innerHTML = HTMLString;
}

printQuote();

document.getElementById('loadQuote').addEventListener("click", printQuote, false);