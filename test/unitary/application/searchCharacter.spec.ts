import { SearchCharacter } from "../../../src/application/searchCharacter";

describe('application/searchCharacter unitary test', () => {
    let searchCharacter: SearchCharacter;
  //  let getCharacterRepositoryStub: ;

    beforeEach(() => {
        searchCharacter = new SearchCharacter();
    });

    it('should return a character array ', async () => {
        let characters = await searchCharacter.getCharacters();
        console.log(characters)
    })
});