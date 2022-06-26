import Station, { StationInput } from "./station";

export class ArrivalStationException extends Error {
    name = "ArrivalStationException";

    constructor() {
        super("Error during arrival station assignment");
    }
}

export type ArrivalStationInput = StationInput;

export default class ArrivalStation extends Station {}
