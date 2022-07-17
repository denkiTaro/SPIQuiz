import Redux from '../redux/redux.js';
import logics from '../logic/setLogic.js';


class PageLogic {
    /**
     * @param {Array} pageNameArray ページの名前を順番に並べた配列
     * @param {HTMLElement} parentDOM 取得された要素を格納する要素
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
     * @param {number} skipValue +何ページ先に飛ばすか、初期値は0
     * ファイル構造 /src/view/page/[pageName]/[pageName].html にしてください
     */
    loadNextPageWithPath( skipValue = 0 ) {
        const referenceValue = this._i + skipValue;
        this._i = referenceValue;
        if( referenceValue >= this._pageNameArray.length )this._i = 0;
        const pageName = this._pageNameArray[this._i];
        const path = `/src/view/page/${pageName}/${pageName}.html`;

        new Redux( pageName , this._parentDOM ).reduxPageByPath( path )
        .then( ()=>{
            if( this._parentDOM.getElementsByTagName('html')[1] )this._parentDOM.getElementsByTagName('html')[1].remove();
        } )
        .then( ()=>{
            // ページに合わせたlogicを設定する
            const setLogic = logics[`${pageName}Page`];
            if( setLogic )setLogic();
            // ページの現在地を更新
            this._i = this._i + 1;
        } )
    }

    /**
     * @param { 'loadNextPageWithPath' } usageCondition 更新で使っている関数名
     * ex) loadNextPageWithPath
     */
    reset( usageCondition ) {
        if( a instanceof PageLogic == false )throw 'PageLogic.resetの引数が設定されていません';
        this._i = 0;
        this[usageCondition]();
    }
}

export default PageLogic;
