// src/schemas/animal.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

@Schema()
export class Animal extends Document {
    @Prop({
        default: () => uuidv4(),
        unique: true,
    })
    id: string;

    @Prop({
        required: true,
        enum: ['dog', 'cat', 'bird'],
    })
    type: string;

    @Prop({ required: true })
    name: string;

    @Prop()
    age: number;

    @Prop()
    breed: string;

}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
