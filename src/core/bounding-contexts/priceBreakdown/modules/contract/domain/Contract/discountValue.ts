export class DiscountValueException extends Error {
    name = "DiscountValueException";

    constructor() {
        super("Error during discount value assignment");
    }
}

export type DiscountValueInput = number;

export default class DiscountValue {
    readonly value: DiscountValueInput;
    constructor(value: DiscountValueInput) {
        // check value validity
        if (!this.validate()) {
            throw new DiscountValueException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }
}
