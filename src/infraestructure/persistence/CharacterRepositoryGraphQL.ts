import { CharacterRepository } from '../../domain/ports/CharacterRepository';

const url = 'https://rickandmortyapi.com/';

export abstract class CharacterRepositoryGraphQL<T> implements CharacterRepository<T> {

    getCharacters(): Promise<T[]> {
        throw new Error('Method not implemented ');
    }

    findCharacter(id: number): Promise<T> {
        throw new Error('Method not implemented ');
    }
}