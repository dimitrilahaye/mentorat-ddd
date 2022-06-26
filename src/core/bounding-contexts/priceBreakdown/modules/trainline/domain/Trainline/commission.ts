export class CommissionException extends Error {
    name = "CommissionException";

    constructor() {
        super("Error during commission assignment");
    }
}

export type CommissionInput = number;

export default class Commission {
    readonly value: number;
    constructor(value: CommissionInput) {
        // check value validity
        if (!this.validate()) {
            throw new CommissionException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }
}
