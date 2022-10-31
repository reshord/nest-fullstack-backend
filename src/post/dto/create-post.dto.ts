import { IsEmail, IsNotEmpty, Length } from "class-validator"

export class CreatePostDto {
    id: number

    @IsEmail()
    @Length(2, 25, {message: 'Почта должна быть не менее 5 символов и не больше 25 символов'})
    email: string
    
    @Length(1, undefined, {message: 'Контент должен содержать минимум 1 символ'})
    content: string
}
