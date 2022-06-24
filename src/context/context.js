

class Context {
    /**
     * Context.warehouseに値を保存する
     */
    constructor() {}

    warehouse = {}

    updateContext( property , value = null ) {
        if( typeof property != 'string' )throw 'Context.updateContextの引数が設定されていません';
        this.warehouse[property] = value;
    }

    useContext() {
        return this.warehouse;
    }
}

const pageContext = new Context();
export default pageContext;
export {Context};
