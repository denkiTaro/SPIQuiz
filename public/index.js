import PageLogic from '../src/logic/pageLogic.js';
import '../src/redux/redux.js';
import pageContext from '../src/context/context.js';

/**
 * 取得して代入する要素
 */
const embedContainerDOM = document.getElementById('embeddingContainer');

/**
 * 順番通り 書き換え不可
 */
const pageNameArray = [ 'start' , 'set' , 'solve' , 'answer' , 'result' ];
Object.freeze( pageNameArray );

const mainPage =
new PageLogic(
    pageNameArray,
    embedContainerDOM,
);
mainPage.nextPageByPath(2);
pageContext.updateContext( 'mainPage' , mainPage );

