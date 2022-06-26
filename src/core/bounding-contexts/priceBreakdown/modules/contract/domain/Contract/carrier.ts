import CarrierName from "./carrierName";
import Currency from "./currency";

export type CarrierProps = {
    carrierName: CarrierName;
    carrierCurrency: Currency;
};

export type UpdateCarrierProps = Partial<CarrierProps>;

export type CarrierOutput = {
    name: CarrierName;
    currency: Currency;
};

export default class Carrier {
    private name: CarrierName;

    private currency: Currency;

    constructor(props: CarrierProps) {
        this.name = props.carrierName;
        this.currency = props.carrierCurrency;
    }

    public update({ carrierCurrency, carrierName }: UpdateCarrierProps): void {
        if (carrierCurrency) {
            this.currency = carrierCurrency;
        }
        if (carrierName) {
            this.name = carrierName;
        }
    }

    // to conserve entity immutability through adapters
    public get output(): CarrierOutput {
        return {
            name: this.name,
            currency: this.currency,
        };
    }
}
