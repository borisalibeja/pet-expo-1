import { IsString, IsInt, IsUUID, IsIn, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAnimalDto {
    @ApiProperty({
        description: 'Type of the animal',
        enum: ['dog', 'cat', 'bird'],
    })
    @IsString()
    @IsIn(['dog', 'cat', 'bird'])
    type: string;

    @ApiProperty({
        description: 'Name of the animal',
    })
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Age of the animal',
        required: false,
    })
    @IsInt()
    @IsOptional()
    age?: number;

    @ApiProperty({
        description: 'Breed of the animal',
        required: false,
    })
    @IsString()
    @IsOptional()
    breed?: string;
}

export class UpdateAnimalDto {
    @ApiProperty({
        description: 'Type of the animal',
        enum: ['dog', 'cat', 'bird'],
    })
    @IsString()
    @IsOptional()
    @IsIn(['dog', 'cat', 'bird'])
    type: string;

    @ApiProperty({
        description: 'Name of the animal',
    })
    @IsOptional()
    @IsString()
    name: string;

    @ApiProperty({
        description: 'Age of the animal',
        required: false,
    })
    @IsInt()
    @IsOptional()
    age?: number;

    @ApiProperty({
        description: 'Breed of the animal',
        required: false,
    })
    @IsString()
    @IsOptional()
    breed?: string;
}
