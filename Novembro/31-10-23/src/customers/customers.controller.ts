import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  HttpCode,
} from '@nestjs/common';

import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { CreateCostumerDoc } from 'src/customers/docs/customers/create.costumer.doc';

// Define tags para agrupar os endpoints na documentação do Swagger
@ApiTags('Costumers')
@Controller('customers')
export class CustomersController {
  // Injeta o serviço no construtor para uso nos métodos da controller
  constructor(private readonly customersService: CustomersService) {}

  // Define um endpoint POST para criar um cliente
  @ApiBody({
    type: CreateCostumerDoc, // Especifica o tipo esperado no corpo da requisição usando o Swagger
  })
  @Post('/register')
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  // Define um endpoint GET para buscar clientes por idade
  @Get('/age')
  findage(@Query('age') age: string) {
    return this.customersService.FindAge(+age);
  }

  // Define um endpoint GET para buscar todos os clientes
  @Get('/all')
  findAll() {
    return this.customersService.findAll();
  }

  // Define um endpoint GET para buscar um cliente por ID
  @Get(':id')
  findOne(@Param('id') uuid: string) {
    return this.customersService.findOne(uuid);
  }

  // Define um endpoint PATCH para atualizar um cliente por ID
  @Patch(':id')
  update(
    @Param('id') uuid: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customersService.update(uuid, updateCustomerDto);
  }

  /*
  @HttpCode(204) na função remove, indicando que, 
  quando esta rota é acessada e a remoção é bem-sucedida,
  o servidor deve retornar o código de status HTTP 204 (No Content). 
  O código de status 204 é comumente usado para indicar que a requisição foi bem-sucedida, 
  mas não há conteúdo para ser retornado no corpo da resposta.
  */
  // Define um endpoint DELETE para remover um cliente por ID
  @Delete(':id')
  @HttpCode(204) // Define o código de resposta HTTP como 204 (No Content)
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
