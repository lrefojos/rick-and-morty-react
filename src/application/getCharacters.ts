import { Character } from '../domain/models/Characters';
import { CharacterRepository } from '../domain/ports/CharacterRepository';

export class GetCharacters {

    private repository;

    constructor(repository: CharacterRepository<Character>) {
        this.repository = repository;
    }

    getCharacters() {
        console.log("character called ")
        this.repository.getCharacters();
    }
}

