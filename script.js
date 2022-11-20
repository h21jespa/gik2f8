'use strict';
/* Vad ska vi göra här ? */

const searchInput = null;
const bookList = [
    {
        id: 1,
        author: 'Charles Dickens' ,
        title: 'Oliver Twist'
    },
    {
        id: 2,
        author: 'William Shakespear' ,
        title: 'Hamlet'
    }
];

function handleKeyPress (input) {
    /* Ta emot / läsa av värdet i inputfältet.
    Skicka vidare värdet till Searchbooks
    searchbooks returnerar en filtrerad lista
    filtrerade listan skickas till renderBookList
    */
    searchBooks(input);
}

function searchBooks(searchTerm){
    const filteredList = [];
   for(let i = 0; i < bookList.length; i++) {
    const title =  bookList[i].title.toLowerCase();
    if(title.indexOf(searchTerm.toLowerCase()) >= 0 ) {
        filteredList.push(bookList[0]);
    }
   }
   renderBookList(filteredList);
}

function renderBookList(list) {
    /*Element i html-listan visas /döljs beroende på listans innehåll*/

    console.log(list)
}

handleKeyPress('e');




