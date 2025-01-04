import Character from '../models/Character';

export interface CharacterRepository {
    getCharacters(): Promise<Character[]>,
    findCharacter(id: number): Promise<Character>
}