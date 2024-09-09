import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { ProductsService } from '../services/products.service';
import { ProductCreateDto, ProductUpdateDto } from '../dtos/product.dto';


import { AuthGuard } from 'src/auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {
    constructor(private productService: ProductsService) {}

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(id: number) {
        return this.productService.findOne(id);
    }

    @Post('/')
    create(@Body() body: ProductCreateDto) {
        return this.productService.create(body);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() body: ProductUpdateDto) {
        return this.productService.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id: number) {
        return this.productService.delete(id);
    }
}
