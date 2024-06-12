// src/animals/animals.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Animal } from 'src/database/schemas/animals';
import { CreateAnimalDto, UpdateAnimalDto } from './animals.dto';

@Injectable()
export class AnimalsService {
    constructor(@InjectModel(Animal.name) private animalModel: Model<Animal>) { }

    async createOne(createAnimalDto: CreateAnimalDto): Promise<Animal> {
        const createdAnimal = new this.animalModel(createAnimalDto)
        return createdAnimal.save()
    }

    async findAll(): Promise<Animal[]> {
        return this.animalModel.find().exec()
    }

    async updateOne(id: string, updateAnimalDto: UpdateAnimalDto): Promise<Animal> {
        const existingAnimal = await this.animalModel.findByIdAndUpdate(id, { $set: updateAnimalDto }, { new: true }).exec();
        if (!existingAnimal) {
            throw new NotFoundException(`Animal with ID ${id} not found`);
        }
        return existingAnimal;
    }

    async deleteOne(id: string): Promise<Animal> {
        const animal = this.animalModel.findByIdAndDelete(id).exec()
        if (!animal) {
            throw new NotFoundException(`Animal with ID ${id} not found`);
        }
        return animal
    }

    async findByName(name: string): Promise<Animal[]> {
        return this.animalModel.find({ name: new RegExp(name, 'i') }).exec()
    }
}
