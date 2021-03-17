export default class Character {
    private name: string;
    private status: string;
    private location: string;
    private episode: string;
    
    constructor(data: any) {
        this.name = data.name;
        this.status = data.status;
        this.location = data.location;
        this.episode = data.episode
    }
    
    getName(): string {
        return this.name;
    }

    getStatus(): string {
        return this.status;
    }

    getLocation(): string {
        return this.location;
    }

    getEpisode(): string {
        return this.episode;
    }
}