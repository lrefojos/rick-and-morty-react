export interface CharacterRepository<T> {
    getCharacters(): Promise<T[]>,
    findCharacter(id: number): Promise<T>
}