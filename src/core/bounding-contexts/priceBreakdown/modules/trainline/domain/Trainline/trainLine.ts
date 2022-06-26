import ArrivalStation, { ArrivalStationInput } from "./arrivalStation";
import CarrierPrice, { CarrierPriceInput } from "./carrierPrice";
import Commission, { CommissionInput } from "./commission";
import DepartureStation, { DepartureStationInput } from "./departureStation";

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

export default class TrainLine {
    readonly carrierPrice: CarrierPrice;
    readonly commission: Commission;
    readonly departureStation: DepartureStation;
    readonly arrivalStation: ArrivalStation;
    constructor({ arrival, departure, carrierPrice, commission }: TrainLineInput) {
        // check value validity
        if (!this.validate()) {
            throw new TrainLineException();
        }
        // business transformation
        this.carrierPrice = new CarrierPrice(carrierPrice);
        this.commission = new Commission(commission);
        this.departureStation = new DepartureStation(departure);
        this.arrivalStation = new ArrivalStation(arrival);
    }

    protected validate(): boolean {
        // business rules
        return true;
    }

    public getCarrierPrice(): CarrierPrice {
        return this.carrierPrice;
    }

    public getCommission(): Commission {
        return this.commission;
    }

    public getDepartureStation(): DepartureStation {
        return this.departureStation;
    }

    public getArrivalStation(): ArrivalStation {
        return this.arrivalStation;
    }
}
