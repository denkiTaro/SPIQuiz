import executeSPIQuiz from "../src/logic/logic.js";

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


executeSPIQuiz( pageNameArray , embedContainerDOM );


console.timeEnd('index');
