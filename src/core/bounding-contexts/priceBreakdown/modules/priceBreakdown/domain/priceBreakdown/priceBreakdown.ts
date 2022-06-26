import {
    PbAgency,
    PbProvider,
    PbCarrier,
    PbBuyer,
    PbAgencySnapshot,
    PbBuyerSnapshot,
    PbCarrierSnapshot,
    PbProviderSnapshot,
} from "./pbActor";

export interface PriceBreakdownInput {
    agency: PbAgency;
    provider: PbProvider;
    carriers: PbCarrier[];
    buyer: PbBuyer;
}

export type PriceBreakdownSnapshot = {
    agency: PbAgencySnapshot;
    provider: PbProviderSnapshot;
    carriers: PbCarrierSnapshot[];
    buyer: PbBuyerSnapshot;
};

export default class PriceBreakdown {
    #agency: PbAgency;
    #provider: PbProvider;
    #carriers: PbCarrier[];
    #buyer: PbBuyer;
    constructor(input: PriceBreakdownInput) {
        this.#agency = input.agency;
        this.#provider = input.provider;
        this.#carriers = input.carriers;
        this.#buyer = input.buyer;
    }

    get agency(): PbAgency {
        return this.#agency;
    }
    get provider(): PbProvider {
        return this.#provider;
    }
    get carriers(): PbCarrier[] {
        return this.#carriers;
    }
    get buyer(): PbBuyer {
        return this.#buyer;
    }

    get snapshot(): PriceBreakdownSnapshot {
        return {
            agency: this.agency.snapshot,
            buyer: this.buyer.snapshot,
            carriers: this.carriers.map((carrier) => carrier.snapshot),
            provider: this.provider.snapshot,
        };
    }
}
