import { IsString, Length, IsEmail, IsNotEmpty } from 'class-validator';

import { PartialType, ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

  @IsString()
  @IsEmail()
  @ApiProperty({ description: 'the email of user' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Length(6)
  readonly password: string;

  @IsString()
  @IsNotEmpty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
