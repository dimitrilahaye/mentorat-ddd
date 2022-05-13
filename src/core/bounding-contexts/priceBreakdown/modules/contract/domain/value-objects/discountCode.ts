import ValueObject from "../../../../../../shared/valueObject";

export class DiscountCodeException extends Error {
    name = "DiscountCodeException";

    constructor() {
        super("Error during discount code assignment");
    }
}

export type DiscountCodeInput = string;
export type DiscountCodeOutput = string;

export default class DiscountCode extends ValueObject<DiscountCodeOutput> {
    constructor(value: DiscountCodeInput) {
        super();
        // check value validity
        if (!this.validate()) {
            throw new DiscountCodeException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }

    public get output(): DiscountCodeOutput {
        return this.value;
    }
}
