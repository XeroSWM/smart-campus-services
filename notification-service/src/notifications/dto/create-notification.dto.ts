import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateNotificationDto {
  @ApiProperty({ example: 'Nueva Tarea' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ example: 'Tienes una nueva tarea en Matemáticas.' })
  @IsString()
  @IsNotEmpty()
  message: string;

  @ApiProperty({ example: 'user-uuid-1234' })
  @IsString()
  @IsNotEmpty()
  recipientId: string;

  @ApiPropertyOptional({ example: 'INFO' })
  @IsString()
  @IsOptional()
  type?: string;
}
