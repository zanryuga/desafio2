import { IsIn, IsNotEmpty, IsNumber, IsPositive } from 'class-validator';

export class CreateTransactionDto {
  @IsPositive()
  @IsNumber()
  @IsNotEmpty()
  amount: number;
  @IsNotEmpty()
  @IsIn(['debit', 'credit'])
  type: string;
}
