import Redux from '../redux/redux.js';
import logics from '../logic/setLogic.js';

function createScriptElement() {
    const addingChildDOM = document.createElement('script');
    addingChildDOM.src  = '/src/logic/setLogic.js';
    addingChildDOM.type = 'module';

    return addingChildDOM;
}


class PageLogic {
    /**
     * @pageNameArray ページの名前を順番に並べた配列
     * @parentDOM 取得された要素を格納する場所
     */
    constructor(pageNameArray, parentDOM) {
        if(!(Array.isArray(pageNameArray)) || !(parentDOM instanceof HTMLElement))
            throw 'Pageの引数が設定されていません';
        this._i = 0;
        this._pageNameArray = pageNameArray;
        this._parentDOM = parentDOM;
    }


    /**
     * 呼び出されるごとに 0~pageNameArray.length まで自動で更新
     * 動作の要素も同時に追加更新
     * @skipValue +何ページ先に飛ばすか、初期値は0
     * ファイル構造 /src/view/page/[pageName]/[pageName].html にしてください
     */
    loadNextPageWithPath( skipValue = 0 ) {
        this._i = this._i + skipValue;
        const path = `/src/view/page/${this._pageNameArray[this._i]}/${this._pageNameArray[this._i]}.html`;

        new Redux( this._pageNameArray[this._i] , this._parentDOM ).reduxPageByPath( path )
        .then( ()=>{
            if( this._parentDOM.childElementCount >= 1 )this._parentDOM.firstChild.remove();
            this._parentDOM.firstChild.appendChild( createScriptElement() );
            const setLogic = logics[`${this._pageNameArray[this._i - 1]}Page`];
            if( setLogic )setLogic();
        });

        this._i = (this._i == this._pageNameArray.length - 1)
        ?0
        :this._i + 1;
    }
}

export default PageLogic;
