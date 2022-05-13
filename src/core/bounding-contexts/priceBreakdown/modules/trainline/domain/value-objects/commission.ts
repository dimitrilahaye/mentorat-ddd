import ValueObject from "../../../../../../shared/valueObject";

export class CommissionException extends Error {
    name = "CommissionException";

    constructor() {
        super("Error during commission assignment");
    }
}

export type CommissionInput = number;
export type CommissionOutput = number;

export default class Commission extends ValueObject<CommissionOutput> {
    constructor(value: CommissionInput) {
        super();
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

    public get output(): CommissionOutput {
        return this.value;
    }
}
