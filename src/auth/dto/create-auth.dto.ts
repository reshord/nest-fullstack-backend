import { IsEmail, isString, Length } from "class-validator"

export class CreateAuthDto {
    @Length(2, 30, {message: 'Длинна почты должна быть 2-30 символов'})
    @IsEmail()
    email: string

    @Length(4, 20, {message: 'Длинна пароль должна быть 4-20 символов'})
    password: string
}
