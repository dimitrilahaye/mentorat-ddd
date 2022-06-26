export class ProviderCommissionDistributionException extends Error {
    name = "ProviderCommissionDistributionException";

    constructor() {
        super("Error during provider commission distribution assignment");
    }
}

export type ProviderCommissionDistributionInput = number;

export default class ProviderCommissionDistribution {
    readonly value: ProviderCommissionDistributionInput;
    constructor(value: ProviderCommissionDistributionInput) {
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
}
