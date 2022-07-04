import pageContext from '../context/context.js';
import Redux from '../redux/redux.js';


/**
 * @parentDOM 格納する要素
 * @ans 答え
 * @ID 要素のID
 */
function reduxAnswerPart( parentDOM , ans = '-' , ID = 'parts' ) {
    if( parentDOM instanceof HTMLElement == false )throw 'reduxAnswerPartの引数が設定されていません';
    if( document.getElementById(ID+'Page') )document.getElementById(ID+'Page').remove();
    return new Redux( ID , parentDOM ).reduxPageByPath( '/src/view/page/answer/answer.html' )
    .then( function(){
        document.getElementById('rightChoice').textContent = ans;
    })
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
        const startButton   = logics.getDOMbyID('setStartButton');
        const numOfQuestions= document.SSelects.SValue.value;
        function f() {
            pageContext.updateContext( 'numOfQuestions' , numOfQuestions );
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
        pageContext.updateContext( 'ansArr' , [] );
        // 問題を設定した数説いたときに出るボタン
        logics.setNextPageInPath(nextButton);

        // 選択肢を消して次に進むボタン表示
        function viewAndDelete() {
            buttonsContainer.remove();
            solvePage.appendChild( nextButton );
        }
        const choiceArray = ['A','B','C','D'];
        for( const i in choiceArray ) {
            const buttonName = choiceArray[i];
            // 設定した回数だけ問題を解かせる
            buttonsContainer[buttonName].addEventListener( 'click' , function(e) {
                const numOfQuestions = pageContext.warehouse.numOfQuestions;
                pageContext.updateContext( 'numOfQuestions' , numOfQuestions - 1 );
                // 解説パーツをredux
                reduxAnswerPart( solvePage )
                .then( function(e) {
                    if( numOfQuestions <= 1 )viewAndDelete();
                } )
                const ansArr = pageContext.warehouse.ansArr;
                const ans = e.target.name;
                ansArr.push( ans )
                pageContext.updateContext( 'ansArr' , ansArr );
            })
        }
    },


    resultPage() {
        const resultPage = logics.getDOMbyID('resultPage');
    },
}

Object.freeze( logics );
export default logics;
