export default class Character {
    private name: string;
    private status: string;
    private location: string;
    private gender: string;
    
    constructor(data: any) {
        this.name = data.name;
        this.status = data.status;
        this.location = data.location;
        this.gender = data.gender
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

    getGender(): string {
        return this.gender;
    }
}