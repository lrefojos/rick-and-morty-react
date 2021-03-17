import { CharacterRepository } from '../domain/ports/CharacterRepository';
import { injectable } from 'inversify';
import TYPES from '../utils/Types';
import { getCharacterRepository } from '../ServiceLocator';

export interface ISearchCharacter {
    getCharacters(): any
}

//@injectable()
export class SearchCharacter implements ISearchCharacter {

    private repository: CharacterRepository;

    constructor() {
        this.repository = getCharacterRepository();
    }

    getCharacters() {
        console.log("character called ")
        this.repository.getCharacters();
    }
}

