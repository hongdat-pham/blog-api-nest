import {
  IsArray,
  IsString,
  MinLength,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';

export class UpdatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  content?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
