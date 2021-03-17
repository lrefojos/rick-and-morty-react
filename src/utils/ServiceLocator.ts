import { SearchCharacter } from '../application/searchCharacter';
import { CharacterRepository } from '../domain/ports/CharacterRepository';
import { CharacterRepositoryREST } from '../infraestructure/persistence/CharacterRepositoryREST';

let characterRepository: CharacterRepository; 


export function init() {
    characterRepository = new CharacterRepositoryREST();
}

export function getCharacterRepository(): CharacterRepository {
    return new CharacterRepositoryREST();
}

export function searchCharacterUseCase(): SearchCharacter {
    return new SearchCharacter();
}

export function setCharacterRepository(rep: CharacterRepository): void {
    characterRepository = rep;
}