
class Redux {
    /**
     * @pageName 取得するhtmlのbody or HTML に id = [page]Page を設定してください
     * @parentDOM 埋め込みたい要素の親要素
     */
    constructor( pageName , parentDOM ) {
        if( typeof pageName !== 'string' || !(parentDOM instanceof HTMLElement) )throw 'Reduxの引数が設定されていません';
        this._pageName = pageName;
        this._parentDOM = parentDOM;
        this._path = `/src/view/page/${this._pageName}/${this._pageName}.html`;
    }

    /**
     * @returns promise
     */
    reduxPage() {
        return fetch( this._path )
        .then((e) => e.text() )
        .then((text) => {
            const childDOM = new DOMParser().parseFromString(text,'text/html').getElementById(`${this._pageName}Page`);
            return this._parentDOM.appendChild( childDOM );
        });
    }

    reduxStyle() {
        throw '後で追加予定'
    }
}


export default Redux;
