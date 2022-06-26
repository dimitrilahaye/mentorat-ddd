export class ProviderNameException extends Error {
    name = "ProviderNameException";

    constructor() {
        super("Error during Provider name assignment");
    }
}

export type ProviderNameInput = string;

export default class ProviderName {
    readonly value: ProviderNameInput;
    constructor(value: ProviderNameInput) {
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
}
