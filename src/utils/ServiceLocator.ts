import { CharacterRepository } from "../domain/ports/CharacterRepository";
import { CharacterRepositoryGraphQL } from "../infraestructure/persistence/CharacterRepositoryGraphQL";

let characterRepository: CharacterRepository; 


export function init() {
    characterRepository = new CharacterRepositoryGraphQL();
}

export function getCharacterRepository(): CharacterRepository {
    return new CharacterRepositoryGraphQL();
}

export function setCharacterRepository(rep: CharacterRepository): void {
    characterRepository = rep;
}