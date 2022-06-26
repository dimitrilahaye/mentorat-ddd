export class RoutePlaceException extends Error {
    name = "RoutePlaceException";

    constructor() {
        super("Error during Route place assignment");
    }
}

export type RoutePlaceInput = Date;

export default class RoutePlace {
    readonly value: RoutePlaceInput;
    constructor(value: RoutePlaceInput) {
        // check value validity
        if (!this.validate(value)) {
            throw new RoutePlaceException();
        }
        this.value = value;
    }

    protected validate(value: RoutePlaceInput): boolean {
        // business rules
        return true;
    }
}
