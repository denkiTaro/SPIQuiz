import pageContext from '../context/context.js';

const logics = {
    /**
     * document.getElementById()と同じ効果
     */
    getDOMbyID( ID ) {
        return document.getElementById(ID);
    },
}


/**
 * ボタンを押すと次のページに移動するだけ
 */
logics['start'] = function setStartLogic() {
    const startDOM = logics.getDOMbyID('startPage');
    const inputDOM = startDOM.getElementsByTagName('button')[0];
    inputDOM.addEventListener( 'click' , () => {
        pageContext.warehouse.mainPage.nextPageByPath();
    })
}


/**
 * セレクタで選択された属性を継承する
 */
logics['set'] = function setSetLogics() {
    const startButton = logics.getDOMbyID('setStartButton');
    startButton.addEventListener( 'click' , () => {
        pageContext.updateContext( 'nOfQuestion' , document.setSelects.nOfQuestion.value );
        pageContext.warehouse.mainPage.nextPageByPath();
    })
}


/**
 * 選択肢に対するイベントを追加
 */
logics['solve'] = function setSolveLogics() {
    const solvePage = document.choicesContainer;
    const choiceNames = ['A','B','C','D'];
    choiceNames.forEach( (e)=>{
        solvePage[e].addEventListener( 'click' , ()=> {
        } )
    } )
}


logics['answer'] = function setAnswerLogics() {
}


logics['result'] = function setResultLogics() {
}


Object.freeze( logics );
export default logics;
