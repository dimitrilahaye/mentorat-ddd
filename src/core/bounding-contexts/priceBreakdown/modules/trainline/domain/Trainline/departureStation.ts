import Station, { StationInput } from "./station";

export class DepartureStationException extends Error {
    name = "DepartureStationException";

    constructor() {
        super("Error during departure station assignment");
    }
}

export type DepartureStationInput = StationInput;

export default class DepartureStation extends Station {}
