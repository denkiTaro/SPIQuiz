import pageContext from '../context/context.js';


const warehouse = pageContext.warehouse;


const logics = {


    /**
     * document.getElementById()と同じ効果
     */
    getDOMbyID( ID ) {
        return document.getElementById(ID);
    },

    /**
     * @param {HTMLElement} DOM 設定したい要素
     * @param { 'click' } type addEventListener([ここ])  (default 'click')
     * click以外も使用できます
     */
    setNextPageInPath( DOM , type = 'click' ) {
        if( DOM instanceof HTMLElement == false )throw 'setNextPageの引数が設定されていません';
        DOM.addEventListener( type , ()=> {
            warehouse.mainPage.loadNextPageWithPath();
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

        // 選択肢を消して次に進むボタンを表示
        function viewAndDelete() {
            buttonsContainer.style.display = 'none';
            solvePage.appendChild( nextButton );
        }

        // const qAndAs = createQAndAs( warehouse.numOfQuestions * 1 );

        /**
         * @param {HTMLElement} parentDOM 格納する要素
         * @param { 'A'|'B'|'C'|'D' } ans 答え
         */
        function reduxAnswerPart( parentDOM , ans = '-' ) {
            const childDOM = warehouse.ansPartText;
            childDOM.textContent = ans;
            parentDOM.appendChild( childDOM );
        }
        const choiceArray = ['A','B','C','D'];
        // ボタンそれぞれにaddEventListener
        for( const i in choiceArray ) {
            const buttonName = choiceArray[i];
            // 設定した回数だけ問題を解かせる
            buttonsContainer[buttonName].addEventListener( 'click' , function(e) {
                const numOfQuestions = warehouse.numOfQuestions * 1;
                pageContext.updateContext( 'numOfQuestions' , numOfQuestions - 1 );
                // 回答パーツをredux
                reduxAnswerPart( solvePage );
                if( numOfQuestions <= 1 || !numOfQuestions )viewAndDelete();
                const ansArr = warehouse.ansArr;
                const ans = e.target.name;
                ansArr.push( ans )
                pageContext.updateContext( 'ansArr' , ansArr );
            })
        }
    },


    resultPage() {
        const resultPage = logics.getDOMbyID('resultPage');
        const returnButton = resultPage.getElementsByTagName('button')[0];
        logics.setNextPageInPath( returnButton );
    },
}

Object.freeze( logics );
export default logics;
