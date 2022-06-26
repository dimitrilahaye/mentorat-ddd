import Agency from "../../../contract/domain/Contract/agency";
import { CarrierOutput } from "../../../contract/domain/Contract/carrier";
import CarrierName from "../../../contract/domain/Contract/carrierName";
import Provider from "../../../contract/domain/Contract/provider";
import { DiscountOutput } from "./../../../contract/domain/Contract/discount";
import Buyer from "./Buyer";
import Route from "./Route/Route";

export class BookingException extends Error {
    name = "BookingException";

    constructor() {
        super("Error during booking assignment");
    }
}

export type BookingInput = {
    provider: Provider;
    agency: Agency;
    buyer: Buyer;
    routes: Route[];
    discount?: DiscountOutput;
};

export default class Booking {
    #provider: Provider;
    #agency: Agency;
    #buyer: Buyer;
    #discount?: DiscountOutput;
    #routes: Route[];
    constructor(value: BookingInput) {
        // check value validity
        if (!this.validate(value)) {
            throw new BookingException();
        }
        this.#provider = value.provider;
        this.#agency = value.agency;
        this.#buyer = value.buyer;
        this.#routes = value.routes;
        this.#discount = value.discount;
    }

    getCarrierByName(name: CarrierName): CarrierOutput | undefined {
        const routeCarrier = this.#routes.find((route) => {
            return route.contract.carrier.name.value === name.value;
        });

        return routeCarrier?.contract.carrier;
    }

    get provider(): Provider {
        return this.#provider;
    }
    get agency(): Agency {
        return this.#agency;
    }
    get buyer(): Buyer {
        return this.#buyer;
    }
    get discount(): DiscountOutput | undefined {
        return this.#discount;
    }
    get routes(): Route[] {
        return this.#routes;
    }

    protected validate(value: BookingInput): boolean {
        // business rules
        return true;
    }
}
