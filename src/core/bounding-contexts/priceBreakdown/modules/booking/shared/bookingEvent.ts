import * as events from "events";

const BookingAchievedEvent = Symbol("BookingAchievedEvent");

export interface EmitBookingAchievedEventInterface {
    emitBookingAchieved(booking: any): void;
}
export interface ListenToBookingAchievedEventInterface {
    listenToBookingAchieved(booking: any): void;
    removeListenToBookingAchieved(): void;
}

// TODO: changer any pour la vraie classe Booking version Value Object

// TODO: Booking étendra EmitBookingAchievedEvent
export abstract class EmitBookingAchievedEvent implements EmitBookingAchievedEventInterface {
    protected eventEmitter: events;

    constructor() {
        this.eventEmitter = new events.EventEmitter();
    }

    emitBookingAchieved(booking: any): void {
        this.eventEmitter.emit(BookingAchievedEvent, booking);
    }
}

// TODO: un domain service PriceBreakdownCreation étendra ListenToBookingAchievedEvent
export abstract class ListenToBookingAchievedEvent
    implements ListenToBookingAchievedEventInterface
{
    protected eventEmitter: events;

    constructor() {
        this.eventEmitter = new events.EventEmitter();
        this.listenToBookingAchieved();
    }

    listenToBookingAchieved(): void {
        this.eventEmitter.addListener(BookingAchievedEvent, this.listenToBookingAchievedHandler);
    }

    removeListenToBookingAchieved(): void {
        this.eventEmitter.removeListener(BookingAchievedEvent, this.listenToBookingAchievedHandler);
    }

    abstract listenToBookingAchievedHandler(booking: any): void;
}
