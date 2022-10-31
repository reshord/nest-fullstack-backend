import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('films')
export class Film {
    @PrimaryColumn()
    id: number

    @Column()
    image: string

    @Column()
    url: string

    @Column()
    title: string

    @Column()
    genres: string

    @Column()
    rating: string
}
