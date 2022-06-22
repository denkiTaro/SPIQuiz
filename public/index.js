import '../src/logic/index.js';
import '../src/redux/redux.js';
import redux from '../src/redux/redux.js';


console.time('index');
/**
 * 取得して代入するDOMの親要素
 */
const embedContainerDOM = document.getElementById('embeddingContainer');

/**
 * 順番通り 書き換え不可
 */
const pageNameArray = [ 'start' , 'set' , 'solve' , 'answer' , 'result' ];
Object.freeze( pageNameArray );

console.timeEnd('index');
