
class Redux {
    /**
     * @pageName 取得した最上位要素に id = [page]Page を設定します
     * @parentDOM 埋め込みたい要素の親要素
     * pageNameのIDがあることで追加後の削除を容易にします
     */
    constructor( pageName , parentDOM ) {
        if( parentDOM instanceof HTMLElement == false )throw 'Reduxの引数が設定されていません';
        this._pageName = pageName;
        this._parentDOM = parentDOM;
    }

    /**
     * @path (reduxPageでは必須) ページまでのルートpath ex)/src/view/page/OO/OO.html
     */
    reduxPageByPath( path ) {
        return fetch( path )
        .then((e) => e.text() )
        .then((text) => {
            const childDOM = new DOMParser().parseFromString(text,'text/html').firstElementChild;
            if( this._pageName )childDOM.id = `${this._pageName}Page`;
            return this._parentDOM.appendChild( childDOM );
        });
    }
}

export default Redux;
