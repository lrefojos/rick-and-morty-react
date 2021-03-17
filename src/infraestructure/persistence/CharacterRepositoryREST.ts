import { CharacterRepository } from '../../domain/ports/CharacterRepository';
import Character from '../../domain/models/Character';
import {characterAdapter} from '../adapter/CharacterAdapter';

const url = 'https://rickandmortyapi.com/api';

export class CharacterRepositoryREST implements CharacterRepository {

    async getCharacters(): Promise<Character[]> {

        const response = await fetch(`${url}/character`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
        const responseJSON = await response.json();
        return characterAdapter(responseJSON.results);
    }

    findCharacter(id: number): Promise<Character> {
        throw new Error('Method not implemented ');
    }
}