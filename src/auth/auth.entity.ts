import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('auth')
export class AuthEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    role:string;
}
