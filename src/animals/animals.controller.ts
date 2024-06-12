import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
  } from '@nestjs/common';
  import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
  import { CreateAnimalDto, UpdateAnimalDto } from './animals.dto';
  import { AnimalsService } from './animals.service';
  
  @Controller('animals')
  export class AnimalsController {
    constructor(private readonly animalService: AnimalsService) {}
  
    @Post()
    @ApiBody({ type: CreateAnimalDto })
    async createOne(@Body() createAnimalDto: CreateAnimalDto) {
      return await this.animalService.createOne(createAnimalDto);
    }
  
    @Get()
    async getAll() {
      return await this.animalService.findAll();
    }
  
    @Patch(':id')
    @ApiParam({ name: 'id', type: String })
    @ApiBody({ type: UpdateAnimalDto })
    async updateOne(
      @Param('id') id: string,
      @Body() updateAnimalDto: UpdateAnimalDto,
    ) {
      return await this.animalService.updateOne(id, updateAnimalDto);
    }
  
    @Delete(':id')
    @ApiParam({ name: 'id', type: String })
    async deleteOne(@Param('id') id: string) {
      return await this.animalService.deleteOne(id);
    }
  
    @Get('search')
    @ApiQuery({ name: 'name', type: String })
    async findByName(@Query('name') name: string) {
      return this.animalService.findByName(name);
    }
  }
  