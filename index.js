// creating an object of arrays to store the messages.

const quotes = {
    quote: ['When you have a dream, you’ve got to grab it and never let go', 'Nothing is impossible. The word itself says I’m possible!', 
    'There is nothing impossible to they who will try.', 
    'The bad news is time flies. The good news is you’re the pilot.', 
    'You define your own life. Don’t let other people write your script.', 'You are never too old to set another goal or to dream a new dream.',
    'Spread love everywhere you go.'],
    author: ['Carol Burnett', 'Audrey Hepburn', 'Alexander the Great', 'Michael Altshuler', 'Nicole Kidman'],
    year: ['1959', '1967', '1992', '1980', '1975']
}
// creating function to generate random quotes,author and year

const mixedMessages = (obj) => {
  const genRandomQuotes = () => {
    return Math.floor(Math.random() * obj.quote.length);
   };
  const genRandomAuthor = () => {
    return Math.floor(Math.random() * obj.author.length);
  };
  const genRandomYear = () => {
    return Math.floor(Math.random() * obj.year.length);
  };

  const message = obj.quote[genRandomQuotes()];
  const person = obj.author[genRandomAuthor()];
  const when = obj.year[genRandomYear()];

  return `${message} ——${person} ${when}`;
}

console.log(mixedMessages(quotes));