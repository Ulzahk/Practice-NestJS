import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateBrandDTO {
  @IsString()
  readonly name: string;
  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateBrandDTO extends PartialType(CreateBrandDTO) {}
