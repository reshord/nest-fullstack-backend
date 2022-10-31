import { IsEmail, Length } from "class-validator"

export class CreateUserDto {
    id: number

    @IsEmail()
    @Length(2, 25, {message: 'Почта должна быть 2 - 25 символов'})
    email: string

    @Length(2, 25, {message: 'Пароль должен быть 2 - 25 символов'})
    password: string
}
