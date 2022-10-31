import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from "./auth/auth.module";
import { AuthEntity } from "./auth/entities/auth.entity";
import { Film } from "./films/entities/film.entity";
import { FilmsModule } from "./films/films.module";
import { Post } from "./post/entities/post.entity";
import { PostModule } from "./post/post.module";
import { User } from "./user/entities/user.entity";
import { UserModule } from "./user/user.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: 'qwerty',
          database: 'qwerty',
          entities: [ Post, Film, User],
          synchronize: true
        }),
        PostModule,
        AuthModule,
        FilmsModule,
        UserModule
    ],
})
export class AppModule {}
