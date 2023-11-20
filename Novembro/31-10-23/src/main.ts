import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('API Costumers')
    .setDescription('Api de estudos')
    .setVersion('1.0')
    .build();
  const Document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('v1/docs', app, Document);
  await app.listen(3000);
}
bootstrap();