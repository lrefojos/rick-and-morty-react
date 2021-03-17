import { CharacterRepository } from '../domain/ports/CharacterRepository';
import { getCharacterRepository } from '../utils/ServiceLocator';

export interface SearchCharacter {
    getCharacters(): any
}

//@injectable()
export class SearchCharacter implements SearchCharacter {

    private repository: CharacterRepository;

    constructor() {
        this.repository = getCharacterRepository();
    }

    getCharacters() {
        console.log("character called ")
        this.repository.getCharacters();
    }
}

