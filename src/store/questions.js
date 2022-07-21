import * as questionsJson from './questions.json';

const questions = questionsJson.default;
const qLength = questions.length;

/**
 * @param {number} num 出題数
 * @return 問題と答えを収録した配列
 */
export function createQAndA( num ) {
    if( typeof num != 'number' )throw 'createQAndAの引数が設定されていません';
    const qAndAArr = [];
    new Int8Array(num).forEach( ()=> {
        qAndAArr.push(questions[ Math.floor( Math.random() * qLength ) ])
    } );
    return qAndAArr;
}
