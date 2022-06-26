import AgencyCommissionDistribution, {
    AgencyCommissionDistributionInput,
} from "./agencyCommissionDistribution";
import ProviderCommissionDistribution, {
    ProviderCommissionDistributionInput,
} from "./providerCommissionDistribution";

export type CommissionDistributionProps = {
    agencyCommissionDistribution: AgencyCommissionDistributionInput;
    providerCommissionDistribution: ProviderCommissionDistributionInput;
};

export type UpdateCommissionDistributionProps = Partial<CommissionDistributionProps>;

export type CommissionDistributionOutput = {
    agencyCommissionDistribution: AgencyCommissionDistribution;
    providerCommissionDistribution: ProviderCommissionDistribution;
};

export default class CommissionDistribution {
    private agencyCommissionDistribution: AgencyCommissionDistribution;

    private providerCommissionDistribution: ProviderCommissionDistribution;

    constructor(props: CommissionDistributionProps) {
        this.agencyCommissionDistribution = new AgencyCommissionDistribution(
            props.agencyCommissionDistribution,
        );
        this.providerCommissionDistribution = new ProviderCommissionDistribution(
            props.providerCommissionDistribution,
        );
    }

    public update(props: UpdateCommissionDistributionProps) {
        if (props.agencyCommissionDistribution) {
            this.agencyCommissionDistribution = new AgencyCommissionDistribution(
                props.agencyCommissionDistribution,
            );
        }
        if (props.providerCommissionDistribution) {
            this.providerCommissionDistribution = new ProviderCommissionDistribution(
                props.providerCommissionDistribution,
            );
        }
    }

    public updateProviderCommissionDistribution(cd: ProviderCommissionDistributionInput) {
        this.providerCommissionDistribution = new ProviderCommissionDistribution(cd);
    }

    // to conserve entity immutability through adapters
    public get output(): CommissionDistributionOutput {
        return {
            agencyCommissionDistribution: this.agencyCommissionDistribution,
            providerCommissionDistribution: this.providerCommissionDistribution,
        };
    }
}
