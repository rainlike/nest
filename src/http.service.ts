import {Inject, Injectable, Optional} from "@nestjs/common";


@Injectable()
export class HttpService<T> {
    /** constructor-based injection */
    constructor(@Optional() @Inject('HTTP_OPTIONS') private httpClient: T) {}
    /**
     * property-based injection:
     * @Injectable()
     * export class HttpService<T> {
     *   @Inject('HTTP_OPTIONS')
     *   private readonly httpClient: T;
     * }
     */
}
