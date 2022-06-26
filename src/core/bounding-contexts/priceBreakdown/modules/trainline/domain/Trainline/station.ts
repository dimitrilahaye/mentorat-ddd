export class StationException extends Error {
    name = "StationException";

    constructor() {
        super("Error during station assignment");
    }
}

export type StationInput = {
    name: string;
    location: string;
};

export default class Station {
    readonly name: string;
    readonly location: string;
    constructor(value: StationInput) {
        // check value validity
        if (!this.validate()) {
            throw new StationException();
        }
        // business transformation
        this.name = value.name;
        this.location = value.location;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }
}
