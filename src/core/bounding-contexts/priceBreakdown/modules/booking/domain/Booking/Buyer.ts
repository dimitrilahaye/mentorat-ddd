export class BuyerException extends Error {
    name = "BuyerException";

    constructor() {
        super("Error during buyer assignment");
    }
}

export type BuyerInput = {
    lastname: string;
    firstname: string;
    email: string;
    address: string;
};

export default class Buyer {
    readonly lastname: string;
    readonly firstname: string;
    readonly email: string;
    readonly address: string;
    constructor(value: BuyerInput) {
        // check value validity
        if (!this.validate(value)) {
            throw new BuyerException();
        }
        this.lastname = value.lastname;
        this.firstname = value.firstname;
        this.email = value.email;
        this.address = value.address;
    }

    protected validate(value: BuyerInput): boolean {
        // business rules
        return true;
    }
}
