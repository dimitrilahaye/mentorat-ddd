export class AgencyNameException extends Error {
    name = "AgencyNameException";

    constructor() {
        super("Error during Agency name assignment");
    }
}

export type AgencyNameInput = string;

export default class AgencyName {
    readonly value: AgencyNameInput;
    constructor(value: AgencyNameInput) {
        // check value validity
        if (!this.validate()) {
            throw new AgencyNameException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }
}
