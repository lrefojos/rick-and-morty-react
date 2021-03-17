import { CharacterRepository } from '../../domain/ports/CharacterRepository';
import Character from '../../domain/models/Character';

const url = 'https://rickandmortyapi.com/';

export class CharacterRepositoryGraphQL implements CharacterRepository {

    getCharacters(): Promise<Character[]> {
        throw new Error('Method not implemented ');
    }

    findCharacter(id: number): Promise<Character> {
        throw new Error('Method not implemented ');
    }
}