import {Injectable, Logger} from '@nestjs/common';

const { Expression, ExpressionParser } = require('adaptive-expressions');


/**
 * Wrapper expression
 * @since 2022-07-29
 * @version 1.0
 */
@Injectable()
export class BotExpress {

    static logger = new Logger(BotExpress.name);

    /**
     * express interface
     * @param context
     */
    private static commonHandle(context, environment) {
        this.logger.debug("commonHandle", JSON.stringify(context), JSON.stringify(environment));
        let result = Expression.parse(context).tryEvaluate(environment).value;
        this.logger.debug("result", result);
        return result;
    }


    /**
     *
     * @param context
     * @param event
     */
    public static isSpecialScene = (context, event) => {
        let source = "`${scene}` == 'special'";
        return BotExpress.commonHandle(source, event)
    }

    /**
     *
     * @param context
     * @param event
     */
    public static isDefaultScene = (context, event) => {
        let source = "`${scene}` == 'default'";
        return BotExpress.commonHandle(source, event)
    }


}
