import AgencyName, { AgencyNameOutput, AgencyNameInput } from "../value-objects/agencyName";
import Currency, { CurrencyInput, CurrencyOutput } from "../value-objects/currency";

export type AgencyProps = {
    agencyName: AgencyNameInput;
    agencyCurrency: CurrencyInput;
};

export type AgencyOutput = {
    name: AgencyNameOutput;
    currency: CurrencyOutput;
};

export type UpdateAgencyProps = Partial<AgencyProps>;

export default class Agency {
    private name: AgencyName;

    private currency: Currency;

    constructor(props: AgencyProps) {
        this.name = new AgencyName(props.agencyName);
        this.currency = new Currency(props.agencyCurrency);
    }

    public getName(): AgencyNameOutput {
        return this.name.get();
    }

    public getCurrency(): CurrencyOutput {
        return this.currency.get();
    }

    public update({ agencyCurrency, agencyName }: UpdateAgencyProps): void {
        if (agencyCurrency) {
            this.currency = new Currency(agencyCurrency);
        }
        if (agencyName) {
            this.name = new AgencyName(agencyName);
        }
    }

    // to conserve entity immutability through adapters
    public get output(): AgencyOutput {
        return {
            name: this.getName(),
            currency: this.getCurrency(),
        };
    }
}
