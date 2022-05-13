import ValueObject from "../../../../../../shared/valueObject";

export class AgencyNameException extends Error {
    name = "AgencyNameException";

    constructor() {
        super("Error during Agency name assignment");
    }
}

export type AgencyNameInput = string;
export type AgencyNameOutput = string;

export default class AgencyName extends ValueObject<AgencyNameOutput> {
    constructor(value: AgencyNameInput) {
        super();
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

    public get output(): AgencyNameOutput {
        return this.value;
    }
}
