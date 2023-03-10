import {Controller, HttpCode, Header, Redirect, Get, Post, Req, Query, Param, Body} from '@nestjs/common';
import {Request} from 'express';
import {Observable, of} from 'rxjs';
import {CreateCatDto} from './dto/create-cat.dto';

@Controller('cats')
export class CatsController {
    @Get()
    findAll(@Req() request: Request): string {
        return 'This action returns all cats';
    }

    @Get(':id/:version')
    findOne(
        @Param('id') id: string,
        @Param('version') version: string
    ): string {
        return `This action returns a #${id} cat with version ${version}`;
    }
    /**
     * @Get(':id')
     * findOne(@Param() params): string {
     *     return `This action returns a #${params.id} cat`;
     * }
     */

    @Post()
    create(@Body() createCatDto: CreateCatDto): string {
        return 'This action adds a new cat';
    }

    @Get('wi*rd')
    @HttpCode(204)
    @Header('Cache-Control', 'none')
    wildcard(): string {
        return 'This is a wildcard action';
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version === '5') {
            return {
                url: 'https://docs.nestjs.com/v5',
                statusCode: 303
            };
        }
    }

    /** methods `async promise` and `observable` are similar */
    @Get('promise')
    async promise(): Promise<any[]> {
        return [];
    }

    /** methods `async promise` and `observable` are similar */
    @Get('observable')
    observable(): Observable<any[]> {
        return of([]);
    }
}
