import AgencyName, { AgencyNameInput } from "./agencyName";
import Currency, { CurrencyInput } from "./currency";

export type AgencyProps = {
    agencyName: AgencyNameInput;
    agencyCurrency: CurrencyInput;
};

export type AgencyOutput = {
    name: AgencyName;
    currency: Currency;
};

export type UpdateAgencyProps = Partial<AgencyProps>;

export default class Agency {
    private name: AgencyName;

    private currency: Currency;

    constructor(props: AgencyProps) {
        this.name = new AgencyName(props.agencyName);
        this.currency = new Currency(props.agencyCurrency);
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
            name: this.name,
            currency: this.currency,
        };
    }
}
