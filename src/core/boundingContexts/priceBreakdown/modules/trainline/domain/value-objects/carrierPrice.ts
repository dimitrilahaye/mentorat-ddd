import ValueObject from "../../../../../../shared/valueObject";

export class CarrierPriceException extends Error {
    name = "CarrierPriceException";

    constructor() {
        super("Error during carrier price assignment");
    }
}

export type CarrierPriceInput = number;
export type CarrierPriceOutput = number;

export default class CarrierPrice extends ValueObject<CarrierPriceOutput> {
    constructor(value: CarrierPriceInput) {
        super();
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

    public get(): CarrierPriceOutput {
        return this.value;
    }
}
