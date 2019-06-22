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
  },
  {
    quote: "Some people can’t believe in themselves until someone else believes in them first.",
    source: 'Matt Damon & Ben Affleck',
    citation: 'Good Will Hunting',
    year: 1997
  },
  {
    quote: "Only Thing We Have to Fear Is Fear Itself.",
    source: 'Franklin Delano Roosevelt',
    year: 1933
  },
  {
    quote: "That's one small step for [a] man, one giant leap for mankind.",
    source: 'Neil Armstrong',
    year: 1969
  },
  {
    quote: "Never let the fear of striking out keep you from playing the game.",
    source: 'Babe Ruth'
  },
  {
    quote: "You miss 100 percent of the shots you never take.",
    source: "Wayne Gretzky -Michael Scott"
  }
];

// Hex colors in array to switch randomly. Found at: https://gist.github.com/mucar/3898821
let colorArray = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6', 
      '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
      '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A', 
      '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
      '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC', 
      '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
      '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680', 
      '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
      '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3', 
      '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

/*
 * Gets a random number betweet 0 and the length of the quote array.
 * returns the random quote selected. 
 */
function getRandomQuote(arr) {
  let randomNum = Math.floor(Math.random() * arr.length) + 0;
  return arr[randomNum];
}

// Does same but with the color array
function getRandomColor(arr) {
  let randomNum = Math.floor(Math.random() * arr.length) + 0;
  return arr[randomNum];
}

/*
 * Takes the random quote and puts the data from the object into a string
 * If there is a citation and year for the quote it'll add the HTML.
 * Then takes the DOM and adds the string to the HTML file.
 * Also changes the background color 
 */

function printQuote() {
  let randomQuote = getRandomQuote(quotes);
  let randomColor = getRandomColor(colorArray);
  let HTMLString = `<p class="quote">${randomQuote.quote}</p>
  <p class="source">${randomQuote.source}`

  if (randomQuote.citation) {
    HTMLString += `<span class="citation">${randomQuote.citation}</span>`;
  }

  if (randomQuote.year) {
    HTMLString += `<span class="year">${randomQuote.year}</span>`;
  }

  HTMLString += `</p>`;

  document.getElementById('quote-box').innerHTML = HTMLString;
  document.querySelector('body').style.backgroundColor = randomColor;
  document.querySelector('button').style.backgroundColor = randomColor;
}

printQuote();

// Calls the printQuote every 20 seconds
let autoRefresh = setInterval(function() {printQuote()}, 20000);

// Calls printQuote, clears interval and resets it when button is pressed
function newInterval() {
  printQuote();
  clearInterval(autoRefresh);
  autoRefresh = setInterval(function() {printQuote()}, 20000);
}

// Changed the event listener to call newInterval so it clears and resets
document.getElementById('loadQuote').addEventListener("click", newInterval, false);