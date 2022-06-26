export class DiscountCodeException extends Error {
    name = "DiscountCodeException";

    constructor() {
        super("Error during discount code assignment");
    }
}

export type DiscountCodeInput = string;

export default class DiscountCode {
    readonly value: DiscountCodeInput;
    constructor(value: DiscountCodeInput) {
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
}
