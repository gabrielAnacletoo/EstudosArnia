import { IsString, IsNotEmpty, IsNumberString } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty({
    message: 'Todos os campos precisam ser preenchidos',
  })
  @IsString()
  firstName: string;
  @IsNotEmpty({
    message: 'Todos os campos precisam ser preenchidos',
  })
  @IsString()
  lastName: string;
  @IsNotEmpty({
    message: 'Todos os campos precisam ser preenchidos',
  })
  @IsNumberString(
    { no_symbols: true },
    {
      message: 'A idade deve ser um número válido',
    },
  )
  age: number;
}
