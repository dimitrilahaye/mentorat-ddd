import ValueObject from "../../../../../../shared/valueObject";

export class ProviderNameException extends Error {
    name = "ProviderNameException";

    constructor() {
        super("Error during Provider name assignment");
    }
}

export type ProviderNameInput = string;
export type ProviderNameOutput = string;

export default class ProviderName extends ValueObject<ProviderNameOutput> {
    constructor(value: ProviderNameInput) {
        super();
        // check value validity
        if (!this.validate()) {
            throw new ProviderNameException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }

    public get(): ProviderNameOutput {
        return this.value;
    }
}
