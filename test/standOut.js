
const headDOM = document.getElementsByTagName('head')[0];
const styleDOM = document.createElement('style');
styleDOM.textContent =
`
body * {
    outline: solid 1px red;
}
`;
const s = {
    keys: '',
    d: false,
};
window.addEventListener( 'keydown' , (e) => {
    s.keys = s.keys + e.key;
    if( s.keys.match( 'EnterEnterEnter' ) ) {
        s.d = !s.d;
        s.keys = '';
        (s.d)
        ? headDOM.appendChild( styleDOM )
        : styleDOM.remove();
    }
} )
