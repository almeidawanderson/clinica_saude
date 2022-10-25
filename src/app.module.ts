import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SwaggerModule } from "@nestjs/swagger";
import { DatabaseModule } from "./config/database/database.module";

@Module({
  imports: [
    SwaggerModule,
    ConfigModule,
    DatabaseModule
  ],
})

export class AppModule {}