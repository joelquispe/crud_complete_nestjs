// product entity
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("products")
export class ProductEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    price: number;

}

