import {Module, DynamicModule} from '@nestjs/common';
import {createDatabaseProviders} from './database.providers';
import {Connection} from './connection.provider';

@Module({
    providers: [Connection],
})
export class DatabaseModule {
    /**
     * The forRoot() method may return a dynamic module
     *  either synchronously or asynchronously (i.e., via a Promise)
     * Note that the properties returned by the dynamic module extend
     *  (rather than override) the base module metadata defined in
     *  the @Module() decorator. That's how both the statically
     *  declared Connection provider and the dynamically generated
     *  repository providers are exported from the module.
     */
    static forRoot(entities = [], options?): DynamicModule {
        const providers = createDatabaseProviders(options, entities);
        /**
         * If you want to register a dynamic module in the global scope,
         *  set the global property to true
         */
        return {
            global: true,
            module: DatabaseModule,
            providers: providers,
            exports: providers,
        };
    }
}
