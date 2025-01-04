export default interface CharacterApi {
    name: string,
    status: string,
    gender: string,
    location: {
        name: string,
        url: string
    }
}