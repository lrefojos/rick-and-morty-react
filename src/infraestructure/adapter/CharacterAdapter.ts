import Character from '../../domain/models/Character';
import CharacterApi from '../adapter/CharacterApi';

export const characterAdapter = (apiResponse: CharacterApi[]): Character[] =>
(apiResponse.map(element =>
    new Character({
        name: element.name,
        location: element.location.name,
        status: element.status,
        gender: element.gender
    })
))
