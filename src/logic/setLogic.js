import pageContext from '../context/context.js';
import Redux from '../redux/redux.js';


function createAnswerPart( parentDOM , ID = '' ) {
    if( parentDOM instanceof HTMLElement == false )throw 'createAnswerPartの引数が設定されていません';
    return new Redux( ID , parentDOM ).reduxPageByPath( '/src/view/page/answer/answer.html' );
}


const logics = {


    /**
     * document.getElementById()と同じ効果
     */
    getDOMbyID( ID ) {
        return document.getElementById(ID);
    },

    /**
     * @DOM 設定したい要素
     * @type addEventListener([ここ])  (default 'click')
     */
    setNextPageInPath( DOM , type = 'click' ) {
        if( DOM instanceof HTMLElement == false )throw 'setNextPageの引数が設定されていません';
        DOM.addEventListener( type , ()=> {
            pageContext.warehouse.mainPage.loadNextPageWithPath();
        })
    },


    /**
     * ボタンを押すと次のページに移動するだけ
     */
    startPage() {
        const startDOM = logics.getDOMbyID('startPage');
        const inputDOM = startDOM.getElementsByTagName('button')[0];
        logics.setNextPageInPath( inputDOM );
    },


    /**
     * セレクタで選択された属性を継承する
     */
    setPage() {
        const startButton= logics.getDOMbyID('setStartButton');
        const QValue     = document.SSelects.SValue.value;
        function f() {
            pageContext.updateContext( 'QValue' , QValue );
            console.log( pageContext.warehouse );
        }
        startButton.addEventListener( 'click' , f );
        logics.setNextPageInPath( startButton );
    },


    /**
     * 設定した問題数分解かないとnextPageに進まない
     * 答えを入力したら答えが下に出てくる
     */
    solvePage() {
        const buttonsContainer= document.choicesContainer;
        const solvePage       = logics.getDOMbyID('solvePage');
        const nextButton      = document.createElement('button');
        nextButton.textContent= '結果を見る';

        logics.setNextPageInPath(nextButton);

        function viewAndDelete() {
            buttonsContainer.remove();
            solvePage.appendChild( nextButton );
        }
        buttonsContainer.addEventListener( 'click' , function() {
            const QValue = pageContext.warehouse.QValue;
            pageContext.updateContext( 'QValue' , QValue - 1 );
            createAnswerPart( solvePage )
            .then( function(e) {
                if( QValue <= 1 )viewAndDelete();
                console.log( solvePage );
            } )
        })
    },


    resultPage() {
        const resultPage = logics.getDOMbyID('resultPage');
    },
}

Object.freeze( logics );
export default logics;
