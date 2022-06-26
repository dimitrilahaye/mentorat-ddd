import Currency, { CurrencyInput } from "./currency";
import ProviderName, { ProviderNameInput } from "./providerName";

export type ProviderProps = {
    providerName: ProviderNameInput;
    providerCurrency: CurrencyInput;
};

export type UpdateProviderProps = Partial<ProviderProps>;

export type ProviderOutput = {
    name: ProviderName;
    currency: Currency;
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
            name: this.name,
            currency: this.currency,
        };
    }
}
