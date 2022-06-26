import Agency, { AgencyOutput, UpdateAgencyProps } from "./agency";
import Carrier, { CarrierOutput, UpdateCarrierProps } from "./carrier";
import CommissionDistribution, {
    CommissionDistributionOutput,
    UpdateCommissionDistributionProps,
} from "./commissionDistribution";
import Discount, { DiscountOutput, DiscountProps, UpdateDiscountProps } from "./discount";
import Provider, { ProviderOutput, UpdateProviderProps } from "./provider";

export type ContractProps = {
    agency: Agency;
    provider: Provider;
    carrier: Carrier;
    commissionDistribution: CommissionDistribution;
};

export type ContractOutput = {
    discounts: DiscountOutput[];
    agency: AgencyOutput;
    carrier: CarrierOutput;
    provider: ProviderOutput;
    commissionDistribution: CommissionDistributionOutput;
};

export default class Contract {
    private discounts: Discount[] = [];

    private agency: Agency;

    private carrier: Carrier;

    private provider: Provider;

    private commissionDistribution: CommissionDistribution;

    constructor({ agency, carrier, commissionDistribution, provider }: ContractProps) {
        // could have some business rules to validate the insertion of those entities below
        // into a contract
        this.agency = agency;
        this.carrier = carrier;
        this.provider = provider;
        this.commissionDistribution = commissionDistribution;
    }

    // actors

    // parti-pris: ici on ne gère pas de règle pour remplacer un acteur par un autre
    // on se contente de modifier les données des acteurs
    // mais en vrai, on devrait creuser le sujet avec l'expert métier

    public updateAgency(props: UpdateAgencyProps): void {
        return this.agency.update(props);
    }

    public updateProvider(props: UpdateProviderProps): void {
        return this.provider.update(props);
    }

    public updateCarrier(props: UpdateCarrierProps): void {
        return this.carrier.update(props);
    }

    // commission distribution

    public updateCommissionDistribution(props: UpdateCommissionDistributionProps) {
        this.commissionDistribution.update(props);
    }

    // discount

    public addDiscount(props: DiscountProps) {
        this.discounts.push(new Discount(props));
    }

    public updateDiscountById(id: string, props: UpdateDiscountProps): void {
        // TODO: id there!
        const discount = this.discounts.find((d) => true);
        if (discount === undefined) {
            // TODO: throw not found error
        }
        discount?.update(props);
    }

    public removeDiscountById(id: string): void {
        // TODO: id there!
        const discount = this.discounts.find((d) => true);
        if (discount === undefined) {
            // TODO: throw not found error
        }
        this.discounts = this.discounts.filter((d) => true);
    }

    // to conserve entity immutability through adapters
    public get output(): ContractOutput {
        return {
            discounts: this.discounts.map((d) => d.output),
            agency: this.agency.output,
            carrier: this.carrier.output,
            provider: this.provider.output,
            commissionDistribution: this.commissionDistribution.output,
        };
    }
}
