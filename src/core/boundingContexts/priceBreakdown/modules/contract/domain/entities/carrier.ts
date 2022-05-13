import CarrierName, { CarrierNameInput, CarrierNameOutput } from "../value-objects/carrierName";
import Currency, { CurrencyInput, CurrencyOutput } from "../value-objects/currency";

export type CarrierProps = {
    carrierName: CarrierNameInput;
    carrierCurrency: CurrencyInput;
};

export type UpdateCarrierProps = Partial<CarrierProps>;

export type CarrierOutput = {
    name: CarrierNameOutput;
    currency: CurrencyOutput;
};

export default class Carrier {
    private name: CarrierName;

    private currency: Currency;

    constructor(props: CarrierProps) {
        this.name = new CarrierName(props.carrierName);
        this.currency = new Currency(props.carrierCurrency);
    }

    public getName(): CarrierNameOutput {
        return this.name.get();
    }

    public getCurrency(): CurrencyOutput {
        return this.currency.get();
    }

    public update({ carrierCurrency, carrierName }: UpdateCarrierProps): void {
        if (carrierCurrency) {
            this.currency = new Currency(carrierCurrency);
        }
        if (carrierName) {
            this.name = new CarrierName(carrierName);
        }
    }

    // to conserve entity immutability through adapters
    public get output(): CarrierOutput {
        return {
            name: this.getName(),
            currency: this.getCurrency(),
        };
    }
}
