import pageContext from '../context/context.js';

const logics = {}

function setStartLogic() {
    const startDOM = document.getElementById('startPage');
    const inputDOM = startDOM.getElementsByTagName('input')[0];
    inputDOM.addEventListener( 'click' , () => {
        pageContext.warehouse.adjustedPage.nextPage();
    } )
}
logics['start'] = setStartLogic;

Object.freeze( logics );
export default logics;
