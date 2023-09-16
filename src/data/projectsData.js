const projectsData = [
    {
        name: 'Guess the number',
        image: 'guess-the-number.jpg',
        snapshot: 'guess-the-number-snapshot.png',
        alt: 'Image of the game',
        url: 'https://kirilyanev.github.io/Guess-the-number/',
        description: 'A simple game where you have to guess a random number.',
        info: `This is my first mini project. I used Math.random() for the choice of a random number and some basic DOM manipulation to 
        take the input from the user and javascript if/else statements to process it. The result then is returned to the end user. Nothing special, but i decided to put it
         on display. It is my first finished project, with the most basic skills i had back then :)`
    },
    {
        name: 'Rock Paper Scrissors',
        image: 'rock-paper-scrissors.jpeg',
        snapshot: 'rock-paper-scrissors-snapshot.png',
        alt: 'Image of the game',
        url: 'https://kirilyanev.github.io/RockPaperScrissors/',
        description: 'The famous Rock Paper Scrissors game.',
        info: `This is another project where i use basic javascript to process the input from the user and to return a 
        response in a type of message. Here, as in my first project i use Math.random(), but this time for the choice of a 
        weapon for the computer.`
    },
    {
        name: 'Hangman',
        image: 'hangman.png',
        snapshot: 'hangman-snapshot.png',
        alt: 'Image of the game',
        url: 'https://kirilyanev.github.io/Hangman/',
        description: 'Hangman game.',
        info: `My third game is again based on javascript. Using user input, basic DOM manipulations to update 
        the searched word, the picture of the hangman, disabling the button, that is pressed once by the user and 
        returning a WIN/LOSE message at the end.`
    },
    {
        name: 'Calculator',
        image: 'calculator.png',
        snapshot: 'calculator-snapshot.png',
        alt: 'calculator',
        url: 'https://kirilyanev.github.io/Calculator/',
        description: 'A simple calculator.',
        info: `For this calculator app i used only one html and one css file. The script is inside the html and it 
        consist just 4 simple javascript functions to perform the basic calculations`
    },
    {
        name: 'Weather-app',
        image: 'weather-app.png',
        snapshot: 'weather-app-snapshot.png',
        alt: 'Weather-app',
        url: 'https://kirilyanev.github.io/Weather-app/',
        description: 'A weather application.',
        info: `This is a single page application. My goal for this project was to use my newly acquired knowledge from a courses in 
        Softuni about architecture, separation of concerns and about REST API. I make a use of javascript async functions to make a fetch api calls
         to the server, after the data is fetched, it is processed and displayed to the end user.`
    },
    {
        name: 'Calendar',
        image: 'calendar.png',
        snapshot: 'calendar-snapshot.png',
        alt: 'Calendar-app',
        url: 'https://kirilyanev.github.io/Calendar/',
        description: 'A Calendar application.',
        info: 'This is a basic calendar. In this project i wanted to practice my skill for working with dates in javascript.'
    },
];

 
export default projectsData;
