import { CharacterRepository } from '../domain/ports/CharacterRepository';
import { getCharacterRepository } from '../utils/ServiceLocator';
import Character from '../domain/models/Character';

export interface SearchCharacter {
    getCharacters(): any
}

export class SearchCharacter implements SearchCharacter {

    private repository: CharacterRepository;

    constructor() {
        this.repository = getCharacterRepository();
    }

    async getCharacters(): Promise<Character[]> {
        return await this.repository.getCharacters();
    }
}

