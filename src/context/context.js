

class Context {
    /**
     * Context.warehouseに値を保存する
     */
    constructor() {}

    warehouse = {}

    /**
     * @property context.warehouseのproperty
     * @value context.warehouse.[property] の値
     */
    updateContext( property , value = null ) {
        if( typeof property != 'string' )throw 'Context.updateContextの引数が設定されていません';
        this.warehouse[property] = value;
    }
}

const pageContext = new Context();
export default pageContext;
export {Context};
