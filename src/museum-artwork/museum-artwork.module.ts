import { MuseumArtworkService } from './museum-artwork.service';
import { MuseumArtworkController } from './museum-artwork.controller';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artwork } from 'src/artwork/artwork.entity';
import { MuseumEntity } from 'src/museum/museum.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MuseumEntity, Artwork])],
    controllers: [
        MuseumArtworkController,],
    providers: [
        MuseumArtworkService,],
})
export class MuseumArtworkModule { }
