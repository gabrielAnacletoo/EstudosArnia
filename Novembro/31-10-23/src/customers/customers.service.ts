import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomersService {
  // Array para armazenar os dados dos clientes
  private customers: Customer[] = [];

  // Método para criar um novo cliente

  create(createCustomerDto: CreateCustomerDto) {
    // Gera um UUID aleatório para o novo cliente
    const customer = {
      uuid: randomUUID(),
      firstName: createCustomerDto.firstName,
      lastName: createCustomerDto.lastName,
      age: createCustomerDto.age,
      createdAt: new Date(),
    };
    // Adiciona o novo cliente ao array
    this.customers.push(customer);
    // Retorna o cliente criado
    return customer;
  }

  // Método para encontrar todos os clientes com um filtro opcional de idade
  FindAge(age: number) {
    try {
      console.log('age na service', age);
      const CostumerFind = this.customers.filter((cust) => cust.age === age);
      if (CostumerFind.length === 0) {
        throw new NotFoundException('não encontrado');
      }
      return CostumerFind;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  findAll() {
    return this.customers;
  }

  // Método para encontrar um cliente pelo UUID
  findOne(uuid: string) {
    try {
      // Encontra o cliente com o UUID fornecido
      const customer = this.customers.find((cust) => cust.uuid === uuid);
      if (!customer) {
        throw new NotFoundException('id não encontrado');
      }
      // Retorna o cliente encontrado
      return customer;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  // Método para atualizar um cliente pelo UUID
  update(uuid: string, updateCustomerDto: UpdateCustomerDto) {
    // Itera pelos clientes para encontrar aquele com o UUID correspondente
    this.customers.forEach((customer) => {
      // Se o UUID corresponder, atualiza os dados do cliente com os novos valores
      //Object.assign atualiza parcialmente o objeto.
      if (customer.uuid === uuid) {
        Object.assign(customer, updateCustomerDto);
      }
    });
  }

  // Método para remover um cliente pelo ID (Observação: o parâmetro ID não é usado na implementação atual)
  remove(uuid: string) {
    try {
      const customer = this.customers.findIndex((cust) => cust.uuid === uuid);
      if (customer === -1) {
        throw new NotFoundException('ID não encontrado');
      }
      // Remove o elemento com o ID correspondente diretamente do array
      this.customers.splice(customer, 1);
      //Retorna o array atualizado
      return this.customers;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
