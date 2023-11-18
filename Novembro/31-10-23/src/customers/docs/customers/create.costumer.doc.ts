import { ApiProperty } from '@nestjs/swagger';

export class CreateCostumerDoc {
  @ApiProperty({
    example: 'Gabriel',
    description: 'First name',
  })
  firstName: string;

  @ApiProperty({
    example: 'Anacleto',
    description: 'Last name',
  })
  lastName: string;

  @ApiProperty({
    example: '29',
    description: 'Age',
  })
  age: number;
}
