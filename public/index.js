import Page from '../src/logic/page.js';
import '../src/redux/redux.js';
import pageContext from '../src/context/context.js';

/**
 * 取得して代入するDOMの親要素
 */
const embedContainerDOM = document.getElementById('embeddingContainer');

/**
 * 順番通り 書き換え不可
 */
const pageNameArray = [ 'start' , 'set' , 'solve' , 'answer' , 'result' ];
Object.freeze( pageNameArray );

const adjustedPage =
new Page(
    pageNameArray,
    embedContainerDOM
);
adjustedPage.nextPage();
pageContext.updateContext( 'adjustedPage' , adjustedPage );

