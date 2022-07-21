import PageLogic from './logic/pageLogic.js';
import pageContext from './context/context.js';
import './service/firebase/firebase.js';


/**
 * 取得して代入する要素
 */
const embedContainerDOM = document.getElementById('embeddingContainer');


/**
 * 順番通り 書き換え不可
 */
const pageNameArray = [ 'start' , 'set' , 'solve' , 'result' ];
Object.freeze( pageNameArray );


fetch('/src/view/page/answer/answer.html')
.then( e=>e.text() )
.then( e=> pageContext.updateContext('ansPartText', new DOMParser().parseFromString(e,'text/html').getElementsByTagName('html')[0] ) );


const mainPage =
new PageLogic(
    pageNameArray,
    embedContainerDOM,
);
mainPage.loadNextPageWithPath();
pageContext.updateContext( 'mainPage' , mainPage );