import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('post')
export class Post {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    email: string

    @Column()
    content: string
}
