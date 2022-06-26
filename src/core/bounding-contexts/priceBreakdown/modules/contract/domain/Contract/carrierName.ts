export class CarrierNameException extends Error {
    name = "CarrierNameException";

    constructor() {
        super("Error during Carrier name assignment");
    }
}

export type CarrierNameInput = string;

export default class CarrierName {
    readonly value: CarrierNameInput;
    constructor(value: CarrierNameInput) {
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
}
