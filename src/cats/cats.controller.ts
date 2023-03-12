import {Controller, Get, Post, Query, Param, Body} from '@nestjs/common';
import {CreateCatDto} from './dto/create-cat.dto';
import {CatsService} from './cats.service';
import {Cat} from "./interfaces/cat.interface";

@Controller('cats')
export class CatsController {
    public readonly ss: number = 5;
    constructor(private catsService: CatsService) {}

    @Post()
    create (@Body() createCatDto: CreateCatDto): void {
        this.catsService.create(createCatDto);
    }

    @Get()
    async findAll(): Promise<Cat[]> {
        return this.catsService.findAll();
    }
}
