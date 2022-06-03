import { pageElements } from "../../context/context.js";
console.log('test by page.js');

const _pages = ['answer' , 'result' , 'set' , 'solve' , 'start'];
// const _pageIds = _pages.map( e => e + 'Page' );


const a = _pages.map( e =>
    pageElements[_pages] = document.getElementById( e + 'Page' )
)

console.log( a )

