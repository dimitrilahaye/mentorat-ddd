export class TravelerException extends Error {
    name = "TravelerException";

    constructor() {
        super("Error during traveler assignment");
    }
}

export type TravelerInput = {
    lastname: string;
    firstname: string;
};

export default class Traveler {
    #lastname: string;
    #firstname: string;
    constructor(value: TravelerInput) {
        // check value validity
        if (!this.validate(value)) {
            throw new TravelerException();
        }
        this.#lastname = value.lastname;
        this.#firstname = value.firstname;
    }

    protected validate(value: TravelerInput): boolean {
        // business rules
        return true;
    }

    get lastname(): string {
        return this.#lastname;
    }
    get firstname(): string {
        return this.#firstname;
    }
}
