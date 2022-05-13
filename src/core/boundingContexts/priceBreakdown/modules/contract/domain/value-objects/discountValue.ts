import ValueObject from "../../../../../../shared/valueObject";

export class DiscountValueException extends Error {
    name = "DiscountValueException";

    constructor() {
        super("Error during discount value assignment");
    }
}

export type DiscountValueInput = number;
export type DiscountValueOutput = number;

export default class DiscountValue extends ValueObject<DiscountValueOutput> {
    constructor(value: DiscountValueInput) {
        super();
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

    public get(): DiscountValueOutput {
        return this.value;
    }
}
