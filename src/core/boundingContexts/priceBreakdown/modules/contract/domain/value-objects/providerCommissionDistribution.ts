import ValueObject from "../../../../../../shared/valueObject";

export class ProviderCommissionDistributionException extends Error {
    name = "ProviderCommissionDistributionException";

    constructor() {
        super("Error during provider commission distribution assignment");
    }
}

export type ProviderCommissionDistributionInput = number;
export type ProviderCommissionDistributionOutput = number;

export default class ProviderCommissionDistribution extends ValueObject<ProviderCommissionDistributionOutput> {
    constructor(value: ProviderCommissionDistributionInput) {
        super();
        // check value validity
        if (!this.validate()) {
            throw new ProviderCommissionDistributionException();
        }
        // business transformation
        this.value = value;
    }

    protected validate(): boolean {
        // business rules
        return true;
    }

    public get(): ProviderCommissionDistributionOutput {
        return this.value;
    }
}
