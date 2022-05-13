import ValueObject from "../../../../../../shared/valueObject";

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
export type StationOutput = {
    name: string;
    location: string;
};

export default class Station extends ValueObject<StationOutput> {
    constructor(value: StationInput) {
        super();
        // check value validity
        if (!this.validate()) {
            throw new StationException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }

    public get(): StationOutput {
        // break reference for immutability
        return { ...this.value };
    }
}
