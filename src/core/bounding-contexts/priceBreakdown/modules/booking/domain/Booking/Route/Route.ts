import { ContractOutput } from "../../../../contract/domain/Contract/contract";
import TrainLine from "../../../../trainline/domain/Trainline/trainLine";
import Arrival from "./Arrival";
import Departure from "./Departure";
import RoutePlace from "./RoutePlace";
import Traveler from "./Traveler";

export class RouteException extends Error {
    name = "RouteException";

    constructor() {
        super("Error during route assignment");
    }
}

export type RouteInput = {
    trainline: TrainLine;
    identifier: string;
    traveler: Traveler;
    contract: ContractOutput;
    departureDate: RoutePlace;
    arrivalDate: RoutePlace;
};

export default class Route {
    #trainline: TrainLine;
    #identifier: string;
    #traveler: Traveler;
    #departureDate: Departure;
    #arrivalDate: Arrival;
    #contract: ContractOutput;
    constructor(value: RouteInput) {
        // check value validity
        if (!this.validate(value)) {
            throw new RouteException();
        }
        this.#trainline = value.trainline;
        this.#identifier = value.identifier;
        this.#traveler = value.traveler;
        this.#departureDate = value.departureDate;
        this.#arrivalDate = value.arrivalDate;
        this.#contract = value.contract;
    }

    protected validate(value: RouteInput): boolean {
        // business rules
        return true;
    }

    get trainline(): TrainLine {
        return this.#trainline;
    }
    get identifier(): string {
        return this.#identifier;
    }
    get traveler(): Traveler {
        return this.#traveler;
    }
    get departureDate(): Departure {
        return this.#departureDate;
    }
    get arrivalDate(): Arrival {
        return this.#arrivalDate;
    }
    get contract(): ContractOutput {
        return this.#contract;
    }
}
