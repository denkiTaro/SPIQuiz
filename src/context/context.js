class Context {
    /**
     * Context.warehouseに値を保存する
     */
    constructor() {}

    warehouse = {}

    /**
     * @param {string} property context.warehouseのproperty
     * @param {any} value context.warehouse.[property] の値
     */
    updateContext( property , value = null ) {
        if( typeof property != 'string' )throw 'Context.updateContextの引数が設定されていません';
        this.warehouse[property] = value;
    }
}

const pageContext = new Context();

export default pageContext;
