import {
    AgencyRoute,
    AgencyRouteSnapshot,
    BuyerRoute,
    BuyerRouteSnapshot,
    CarrierRoute,
    CarrierRouteSnapshot,
    ProviderRoute,
    ProviderRouteSnapshot,
} from "./pbRoute";

export interface PbActorInfoInput {
    name: string;
}

export type PbActorInfoSnapshot = PbActorInfoInput;

export class PbActorInfo {
    #name: string;
    constructor(input: PbActorInfoInput) {
        this.#name = input.name;
    }

    get name(): string {
        return this.#name;
    }

    get snapshot(): PbActorInfoSnapshot {
        return {
            name: this.#name,
        };
    }
}

export interface PbActorInput {
    info: PbActorInfo;
    total: number;
}

export type PbActorSnapshot = {
    info: PbActorInfoSnapshot;
    total: number;
};

export class PbActor {
    #total: number;
    #info: PbActorInfo;
    constructor(input: PbActorInput) {
        this.#info = input.info;
        this.#total = input.total;
    }

    get total(): number {
        return this.#total;
    }

    set total(total: number) {
        this.#total = total;
    }

    get info(): PbActorInfo {
        return this.#info;
    }

    get snapshot(): PbActorSnapshot {
        return {
            info: this.#info.snapshot,
            total: this.#total,
        };
    }
}

export interface PbAgencyInput extends PbActorInput {
    routes: AgencyRoute[];
}

export type PbAgencySnapshot = PbActorSnapshot & {
    routes: AgencyRouteSnapshot[];
};

export class PbAgency extends PbActor {
    #routes: AgencyRoute[];
    constructor(input: PbAgencyInput) {
        super(input);
        this.#routes = input.routes;
    }

    get routes(): AgencyRoute[] {
        return this.#routes;
    }

    get snapshot(): PbAgencySnapshot {
        return {
            ...super.snapshot,
            routes: this.#routes.map((route) => route.snapshot),
        };
    }
}

export interface PbProviderInput extends PbActorInput {
    routes: ProviderRoute[];
}

export type PbProviderSnapshot = PbActorSnapshot & {
    routes: ProviderRouteSnapshot[];
};

export class PbProvider extends PbActor {
    #routes: ProviderRoute[];
    constructor(input: PbProviderInput) {
        super(input);
        this.#routes = input.routes;
    }

    get routes(): ProviderRoute[] {
        return this.#routes;
    }

    get snapshot(): PbProviderSnapshot {
        return {
            ...super.snapshot,
            routes: this.#routes.map((route) => route.snapshot),
        };
    }
}

export interface PbCarrierInput extends PbActorInput {
    routes: CarrierRoute[];
}

export type PbCarrierSnapshot = PbActorSnapshot & {
    routes: CarrierRouteSnapshot[];
};

export class PbCarrier extends PbActor {
    #routes: CarrierRoute[];
    constructor(input: PbCarrierInput) {
        super(input);
        this.#routes = input.routes;
    }

    get routes(): CarrierRoute[] {
        return this.#routes;
    }

    get snapshot(): PbCarrierSnapshot {
        return {
            ...super.snapshot,
            routes: this.#routes.map((route) => route.snapshot),
        };
    }
}

export interface PbBuyerInput extends PbActorInput {
    routes: BuyerRoute[];
    discount: number;
}

export type PbBuyerSnapshot = PbActorSnapshot & {
    routes: BuyerRouteSnapshot[];
};

export class PbBuyer extends PbActor {
    #routes: BuyerRoute[];
    #discount: number;
    constructor(input: PbBuyerInput) {
        super(input);
        this.#routes = input.routes;
        this.#discount = input.discount;
    }

    get routes(): BuyerRoute[] {
        return this.#routes;
    }

    get discount(): number {
        return this.#discount;
    }

    set discount(discount: number) {
        this.#discount = discount;
    }

    get snapshot(): PbBuyerSnapshot {
        return {
            ...super.snapshot,
            routes: this.#routes.map((route) => route.snapshot),
        };
    }
}
