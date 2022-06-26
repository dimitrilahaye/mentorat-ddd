export class CarrierPriceException extends Error {
    name = "CarrierPriceException";

    constructor() {
        super("Error during carrier price assignment");
    }
}

export type CarrierPriceInput = number;

export default class CarrierPrice {
    readonly value: number;
    constructor(value: CarrierPriceInput) {
        // check value validity
        if (!this.validate()) {
            throw new CarrierPriceException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }
}
