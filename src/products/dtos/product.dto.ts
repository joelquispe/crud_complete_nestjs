import { PartialType } from "@nestjs/swagger";

export class ProductCreateDto {
    name: string;
    description: string;
    price: number;
}


export class ProductUpdateDto extends PartialType(ProductCreateDto) {}
