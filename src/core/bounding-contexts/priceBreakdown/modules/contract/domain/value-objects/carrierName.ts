import ValueObject from "../../../../../../shared/valueObject";

export class CarrierNameException extends Error {
    name = "CarrierNameException";

    constructor() {
        super("Error during Carrier name assignment");
    }
}

export type CarrierNameInput = string;
export type CarrierNameOutput = string;

export default class CarrierName extends ValueObject<CarrierNameOutput> {
    constructor(value: CarrierNameInput) {
        super();
        // check value validity
        if (!this.validate()) {
            throw new CarrierNameException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }

    public get output(): CarrierNameOutput {
        return this.value;
    }
}
