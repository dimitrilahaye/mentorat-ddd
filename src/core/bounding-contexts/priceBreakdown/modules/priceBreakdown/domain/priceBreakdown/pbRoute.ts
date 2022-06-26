export interface PbRouteInput {
    trainline: string;
    date: Date;
    price: number;
}

export type PbRouteSnapshot = PbRouteInput;

export default class PbRoute {
    #trainline: string;
    #date: Date;
    #price: number;
    constructor(input: PbRouteInput) {
        this.#trainline = input.trainline;
        this.#date = input.date;
        this.#price = input.price;
    }

    get trainline(): string {
        return this.#trainline;
    }
    get date(): Date {
        return this.#date;
    }
    get price(): number {
        return this.#price;
    }
    set price(price: number) {
        this.#price = price;
    }

    get snapshot(): PbRouteSnapshot {
        return {
            date: this.#date,
            price: this.#price,
            trainline: this.#trainline,
        };
    }
}

export interface AgencyRouteInput extends PbRouteInput {
    repComm: number;
}

export type AgencyRouteSnapshot = AgencyRouteInput & {
    repComm: number;
};

export class AgencyRoute extends PbRoute {
    #repComm: number;
    constructor(input: AgencyRouteInput) {
        super(input);
        this.#repComm = input.repComm;
    }

    get repComm(): number {
        return this.#repComm;
    }

    set repComm(repComm: number) {
        this.#repComm = repComm;
    }

    get snapshot(): AgencyRouteSnapshot {
        return {
            ...super.snapshot,
            repComm: this.#repComm,
        };
    }
}

export interface ProviderRouteInput extends AgencyRouteInput {}

export type ProviderRouteSnapshot = AgencyRouteSnapshot;

export class ProviderRoute extends AgencyRoute {
    constructor(input: ProviderRouteInput) {
        super(input);
    }
}

export interface CarrierRouteInput extends PbRouteInput {
    comm: number;
}

export type CarrierRouteSnapshot = PbRouteInput & {
    comm: number;
};

export class CarrierRoute extends PbRoute {
    #comm: number;
    constructor(input: CarrierRouteInput) {
        super(input);
        this.#comm = input.comm;
    }

    get comm(): number {
        return this.#comm;
    }

    set comm(comm: number) {
        this.#comm = comm;
    }

    get snapshot(): CarrierRouteSnapshot {
        return {
            ...super.snapshot,
            comm: this.#comm,
        };
    }
}

export interface BuyerRouteInput extends PbRouteInput {
    traveler: string;
}

export type BuyerRouteSnapshot = PbRouteInput & {
    traveler: string;
};

export class BuyerRoute extends PbRoute {
    #traveler: string;
    constructor(input: BuyerRouteInput) {
        super(input);
        this.#traveler = input.traveler;
    }

    get traveler(): string {
        return this.#traveler;
    }
    get snapshot(): BuyerRouteSnapshot {
        return {
            ...super.snapshot,
            traveler: this.#traveler,
        };
    }
}
