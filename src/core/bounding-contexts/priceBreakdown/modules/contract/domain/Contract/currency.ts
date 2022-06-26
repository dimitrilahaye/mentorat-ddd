export class CurrencyException extends Error {
    name = "CurrencyException";

    constructor() {
        super("Error during currency assignment");
    }
}

export type CurrencyInput = string;

export default class Currency {
    readonly value: CurrencyInput;
    constructor(value: CurrencyInput) {
        // check value validity
        if (!this.validate()) {
            throw new CurrencyException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }
}
