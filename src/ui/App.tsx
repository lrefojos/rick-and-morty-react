import React, { Component } from 'react';
import { searchCharacterUseCase } from '../utils/ServiceLocator';
import Character from '../domain/models/Character';

export default class App extends Component {

    async componentDidMount() {
        let searchCharacter = searchCharacterUseCase();
        const character: Character[] = await searchCharacter.getCharacters();
        console.log(character[0].getName())
    }

    render() {
        return (
            <div>
                <p>Hi im a react component! </p>
            </div>
        )
    }
}
