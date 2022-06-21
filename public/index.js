console.time('index');
import reduxPage from "../src/redux/reduxPage.js";

/**
 * 取得して代入するDOMの親要素
 */
const embedContainerDOM = document.getElementById('embeddingContainer');
reduxPage( 'start' , embedContainerDOM )
.then( (e) => {
} )

/**
 * 順番通り 書き換え不可
 */
const pageNameArray = [ 'start' , 'set' , 'solve' , 'answer' , 'result' ];
Object.freeze( pageNameArray )


console.timeEnd('index');
