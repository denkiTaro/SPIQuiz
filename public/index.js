import reduxPage from "../src/redux/reduxPage.js";

/**
 * 取得して代入するDOMの親要素
 */
const embedContainerDOM = document.getElementById('embeddingContainer');
/**
 * 順番通り
 */
const pages = [ 'start' , 'set' , 'solve' , 'answer' , 'result' ];

reduxPage( pages[0] , embedContainerDOM )


// export {embedContainerDOM};