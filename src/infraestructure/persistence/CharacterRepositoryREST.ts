import { CharacterRepository } from '../../domain/ports/CharacterRepository';
import Character from '../../domain/models/Character';
import {characterAdapter} from '../adapter/CharacterAdapter';

const url = 'https://rickandmortyapi.com/api';

export class CharacterRepositoryREST implements CharacterRepository {

    async getCharacters(): Promise<Character[]> {
        try {

            const response = await fetch(`${url}/character`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
            });
            const data = await response.json();
            return characterAdapter(data.results);
        } catch (error) {
            throw new Error(error);
        }
    }

    findCharacter(id: number): Promise<Character> {
        throw new Error('Method not implemented ');
    }
}