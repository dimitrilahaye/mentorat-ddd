import Station, { StationInput, StationOutput } from "./station";

export class ArrivalStationException extends Error {
    name = "ArrivalStationException";

    constructor() {
        super("Error during arrival station assignment");
    }
}

export type ArrivalStationInput = StationInput;
export type ArrivalStationOutput = StationOutput;

export default class ArrivalStation extends Station {}
