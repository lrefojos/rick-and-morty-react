import React, { Component } from 'react';
import { searchCharacterUseCase } from '../utils/ServiceLocator';
import Character from '../domain/models/Character';

interface Props { }
interface State {
    characters: Character[]
}

export default class App extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            characters: []
        }
    }

    async componentDidMount() {
        let searchCharacter = searchCharacterUseCase();
        try {
            const characters = await searchCharacter.getCharacters();
            this.setState({characters})
        } catch {

        }

    }

    render() {
        const { characters } = this.state;
        return (
            <div>
                {
                    characters && characters.map((character, i) => {
                        return (<span key={i}> {character.getName()} </span>)
                    })
                }
            </div>
        )
    }
}
