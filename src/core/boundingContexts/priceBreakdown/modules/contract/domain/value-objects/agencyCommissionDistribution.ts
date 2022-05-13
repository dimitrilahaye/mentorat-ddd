import ValueObject from "../../../../../../shared/valueObject";

export class AgencyCommissionDistributionException extends Error {
    name = "AgencyCommissionDistributionException";

    constructor() {
        super("Error during Agency commission distribution assignment");
    }
}

export type AgencyCommissionDistributionInput = number;
export type AgencyCommissionDistributionOutput = number;

export default class AgencyCommissionDistribution extends ValueObject<AgencyCommissionDistributionOutput> {
    constructor(value: AgencyCommissionDistributionInput) {
        super();
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

    public get output(): AgencyCommissionDistributionOutput {
        return this.value;
    }
}
