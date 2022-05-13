import Currency, { CurrencyInput, CurrencyOutput } from "../value-objects/currency";
import ProviderName, { ProviderNameInput, ProviderNameOutput } from "../value-objects/providerName";

export type ProviderProps = {
    providerName: ProviderNameInput;
    providerCurrency: CurrencyInput;
};

export type UpdateProviderProps = Partial<ProviderProps>;

export type ProviderOutput = {
    name: ProviderNameOutput;
    currency: CurrencyOutput;
};

export default class Provider {
    private name: ProviderName;

    private currency: Currency;

    constructor(props: ProviderProps) {
        this.name = new ProviderName(props.providerName);
        this.currency = new Currency(props.providerCurrency);
    }

    public update({ providerCurrency, providerName }: UpdateProviderProps): void {
        if (providerCurrency) {
            this.currency = new Currency(providerCurrency);
        }
        if (providerName) {
            this.name = new ProviderName(providerName);
        }
    }

    // to conserve entity immutability through adapters
    public get output(): ProviderOutput {
        return {
            name: this.name.output,
            currency: this.currency.output,
        };
    }
}
