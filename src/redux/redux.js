

class Redux {
    /**
     * @param {string} pageName 取得した最上位要素に id = [page]Page を設定します
     * @param {HTMLElement} parentDOM 埋め込みたい要素の親要素
     * pageNameのIDがあることで追加後の削除を容易にします
     */
    constructor( pageName , parentDOM ) {
        if( parentDOM instanceof HTMLElement == false )throw 'Reduxの引数が設定されていません';
        this._pageName = pageName;
        this._parentDOM = parentDOM;
    }

    /**
     * @param {'/src/view/page/\**\/\**.html'} path (reduxPageでは必須) ページまでのルートpath
     * /src/view/page/[page]/[page].html のようにファイルを設置し
     * reduxPageByPathに /src/... を代入してください
     */
    reduxPageByPath( path ) {
        return fetch( path )
        .then((e) => e.text() )
        .then((text) => {
            const childDOM = new DOMParser().parseFromString(text,'text/html').firstElementChild;
            childDOM.id = `${this._pageName}Page`;
            this._parentDOM.insertAdjacentElement( 'afterbegin' , childDOM );
        });
    }
}

export default Redux;
