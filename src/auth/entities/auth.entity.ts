import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity('auth')
export class AuthEntity {
    @Column()
    email: string

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    password: string
}
