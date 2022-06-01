'use strict';
console.log('test by standOut.js')

const headDOM = document.getElementsByTagName('head')[0];
const styleDOM = document.createElement('style');

styleDOM.textContent =
`
body * {
    outline: solid 1px red;
}
`;

// stand out
globalThis.SO = ()=>{
    headDOM.appendChild( styleDOM );
}
globalThis.unSO = ()=>{
    styleDOM.remove()
}
