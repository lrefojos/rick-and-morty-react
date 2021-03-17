import React, { Component } from 'react';
import { SearchCharacter } from '../application/searchCharacter';
import {searchCharacterUseCase} from '../utils/ServiceLocator';

export default class App extends Component {

    componentDidMount() {
        console.log("entro aquí ")
        let searchCharacter = searchCharacterUseCase();
        searchCharacter.getCharacters();
    }

    render() {
        return (
            <div>
                <p>Hi im a react component! </p>
            </div>
        )
    }
}
