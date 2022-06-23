import '../src/logic/index.js';
import Page from '../src/logic/index.js';
import '../src/redux/redux.js';


/**
 * 取得して代入するDOMの親要素
 */
const embedContainerDOM = document.getElementById('embeddingContainer');

/**
 * 順番通り 書き換え不可
 */
const pageNameArray = [ 'start' , 'set' , 'solve' , 'answer' , 'result' ];
Object.freeze( pageNameArray );

const page =
new Page(
    pageNameArray,
    embedContainerDOM
);
page.nextPage()