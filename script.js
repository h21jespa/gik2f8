'use strict';
/* Vad ska vi göra här ? */

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

/*const searchInput = document.children[0].children[1].children[1].children[1]; */

const searchField = document.getElementById('searchField');

console.log(searchField);

/*  keydown, keyup*/
searchField.addEventListener("keyup", handleKeyPress);


function handleKeyPress (e) {
    /* Ta emot / läsa av värdet i inputfältet.
    Skicka vidare värdet till Searchbooks
    searchbooks returnerar en filtrerad lista
    filtrerade listan skickas till renderBookList
    */
   searchBooks(e.target.value);
}

function searchBooks(searchTerm){
    const filteredList = [];
   for(let i = 0; i < bookList.length; i++) {
    const title =  bookList[i].title.toLowerCase();
    if(title.indexOf(searchTerm.toLowerCase()) >= 0 ) {
        filteredList.push(bookList[i]);
    }
   }
   renderBookList(filteredList);
}

function renderBookList(list) {
    /*Element i html-listan visas /döljs beroende på listans innehåll*/

    console.log(list)
}




