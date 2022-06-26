export class AgencyCommissionDistributionException extends Error {
    name = "AgencyCommissionDistributionException";

    constructor() {
        super("Error during Agency commission distribution assignment");
    }
}

export type AgencyCommissionDistributionInput = number;

export default class AgencyCommissionDistribution {
    readonly value: AgencyCommissionDistributionInput;
    constructor(value: AgencyCommissionDistributionInput) {
        // check value validity
        if (!this.validate()) {
            throw new AgencyCommissionDistributionException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }
}
