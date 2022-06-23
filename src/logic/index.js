import logics from './logics.js'
import Redux from '../redux/redux.js';

class Page {
    /**
     * @pageNameArray ページの名前を順番に並べた配列
     * @parentDOM 取得されたDOMの子要素に変更を加えます
     */
    constructor( pageNameArray , parentDOM ) {
        if( !(Array.isArray(pageNameArray)) || !(parentDOM instanceof HTMLElement) )throw 'Pageの引数が設定されていません';
        this._i = 0;
        this._pageNameArray = pageNameArray;
        this._parentDOM = parentDOM;
    }

    /**
     * 呼び出されるごとに 0~pageNameArray.length まで自動で更新
     */
    nextPage() {
        new Redux( this._pageNameArray[this._i] , this._parentDOM ).reduxPage()
        .then( ()=>{
            if( this._parentDOM.childElementCount >= 1 )this._parentDOM.firstChild.remove();
        });

        this._i = (this._i == this._pageNameArray.length - 1)
        ?0
        :this._i + 1;
    }
}

export default Page;
