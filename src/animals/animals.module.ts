import { Module } from '@nestjs/common';
import { AnimalsController } from './animals.controller';
import { AnimalsService } from './animals.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Animal, AnimalSchema } from 'src/database/schemas/animals';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: Animal.name, schema: AnimalSchema }])
    ],
    controllers: [AnimalsController],
    providers: [AnimalsService]
})
export class AnimalsModule { }
