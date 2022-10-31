import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @PrimaryColumn()
    email: string

    @Column()
    password: string
}
