
/**
 * @pageName 取得するhtmlのbody or HTML に id = [page]Page を設定してください
 * @parentDOM pageNameDOM を収納するDOM
 * @returns promise
 */
function reduxPage( pageName , parentDOM ) {
    if( !pageName || !parentDOM )throw '引数が設定されていません';
    const path = `../src/view/page/${pageName}/${pageName}.html`;
    return fetch( path )
    .then((e) => e.text() )
    .then((text) => {
        const nowDOM = new DOMParser().parseFromString(text,'text/html').getElementById(`${pageName}Page`);
        return parentDOM.appendChild( nowDOM );
    });
}

export default reduxPage;
