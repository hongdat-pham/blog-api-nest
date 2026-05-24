import {
  IsArray,
  IsString,
  MinLength,
  IsOptional,
  IsNotEmpty,
} from 'class-validator';
import sanitizeHtml from 'sanitize-html';
import { Transform } from 'class-transformer';
export class CreatePostDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @Transform(({ value }) => sanitizeHtml(value))
  @IsString()
  @IsNotEmpty()
  @MinLength(10)
  content: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  tags?: string[];
}
