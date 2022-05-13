import ValueObject from "../../../../../../shared/valueObject";
import ArrivalStation, { ArrivalStationInput, ArrivalStationOutput } from "./arrivalStation";
import CarrierPrice, { CarrierPriceInput, CarrierPriceOutput } from "./carrierPrice";
import Commission, { CommissionInput, CommissionOutput } from "./commission";
import DepartureStation, {
    DepartureStationInput,
    DepartureStationOutput,
} from "./departureStation";

export class TrainLineException extends Error {
    name = "TrainLineException";

    constructor() {
        super("Error during trainline assignment");
    }
}

export type TrainLineInput = {
    carrierPrice: CarrierPriceInput;
    commission: CommissionInput;
    departure: DepartureStationInput;
    arrival: ArrivalStationInput;
};
export type TrainLineOutput = {
    carrierPrice: CarrierPrice;
    commission: Commission;
    departureStation: DepartureStation;
    arrivalStation: ArrivalStation;
};

// TODO: MANU contract id ?? Comment on sait déjà que tel trainline appartient à tel transporteur ?
// https://viewer.diagrams.net/?page-id=pt6Se_tUvXeLadXP1PDD&highlight=0000ff&edit=_blank&layers=1&nav=1&page-id=pt6Se_tUvXeLadXP1PDD#G1z4fm_wdGfCkWVOn2vbgdrpEKzWx28-Vm

export default class TrainLine extends ValueObject<TrainLineOutput> {
    constructor({ arrival, departure, carrierPrice, commission }: TrainLineInput) {
        super();
        // check value validity
        if (!this.validate()) {
            throw new TrainLineException();
        }
        // business transformation
        this.value.carrierPrice = new CarrierPrice(carrierPrice);
        this.value.commission = new Commission(commission);
        this.value.departureStation = new DepartureStation(departure);
        this.value.arrivalStation = new ArrivalStation(arrival);
    }

    protected validate(): boolean {
        // business rules
        return true;
    }

    public getCarrierPrice(): CarrierPriceOutput {
        return this.value.carrierPrice.get();
    }

    public getCommission(): CommissionOutput {
        return this.value.commission.get();
    }

    public getDepartureStation(): DepartureStationOutput {
        return this.value.departureStation.get();
    }

    public getArrivalStation(): ArrivalStationOutput {
        return this.value.arrivalStation.get();
    }

    public get(): TrainLineOutput {
        // break reference for immutability
        return { ...this.value };
    }
}
