import ValueObject from "../../../../../../shared/valueObject";

export class CurrencyException extends Error {
    name = "CurrencyException";

    constructor() {
        super("Error during currency assignment");
    }
}

export type CurrencyInput = string;
export type CurrencyOutput = string;

export default class Currency extends ValueObject<CurrencyOutput> {
    constructor(value: CurrencyInput) {
        super();
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

    public get(): CurrencyOutput {
        return this.value;
    }
}
