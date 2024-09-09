import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProductEntity } from '../entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCreateDto, ProductUpdateDto } from '../dtos/product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  findAll() {
    return this.productRepository.find();
  }

  create(body: ProductCreateDto): Promise<ProductEntity> {
    console.log(body);
    const product = this.productRepository.create(body);
    return this.productRepository.save(product);
  }

  findOne(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  update(id: number, body: ProductUpdateDto) {
    return this.productRepository.update({ id }, body);
  }

  delete(id: number) {
    return this.productRepository.delete({ id });
  }
}
