import Booking from "../../booking/domain/Booking/Booking";
import CarrierName from "../../contract/domain/Contract/carrierName";
import Currency from "../../contract/domain/Contract/currency";
import PriceBreakdown from "../domain/priceBreakdown/priceBreakdown";
import CurrencyService from "../ports/currencyService/currencyService";
import PriceBreakdownFactory from "./PriceBreakdownFactory";

type CurrencyValueMemoization = number;

export default class PriceBreakdownService {
    #currencyMemoization = new Map<string, CurrencyValueMemoization>();

    constructor(
        private readonly currencyService: CurrencyService,
        private readonly priceBreakdownFactory: PriceBreakdownFactory,
    ) {}

    async getPriceBreakdown(booking: Booking): Promise<PriceBreakdown> {
        const priceBreakdown = this.priceBreakdownFactory.getPriceBreakdown(booking);

        await this.convertBuyerPrices(priceBreakdown, booking);
        await this.convertAgencyPrices(priceBreakdown, booking);
        await this.convertProviderPrices(priceBreakdown, booking);
        await this.convertCarriersPrices(priceBreakdown, booking);

        return priceBreakdown;
    }

    private async convertCarriersPrices(priceBreakdown: PriceBreakdown, booking: Booking) {
        const routesPrices: Promise<unknown>[] = [];
        await priceBreakdown.carriers.forEach(async (carrier) => {
            routesPrices.push(
                ...carrier.routes.map((route) => {
                    return new Promise(async (resolve) => {
                        const carrierOutput = booking.getCarrierByName(
                            new CarrierName(carrier.info.name),
                        );
                        if (!carrierOutput) {
                            throw new Error("Carrier not found");
                        }
                        const price = await this.currencyService.getValueByCurrency(
                            route.price,
                            carrierOutput.currency,
                        );
                        route.price = price;
                        const totalCarrier = await this.currencyService.getValueByCurrency(
                            carrier.total,
                            carrierOutput.currency,
                        );
                        carrier.total = totalCarrier;
                        const comm = await this.currencyService.getValueByCurrency(
                            route.comm,
                            carrierOutput.currency,
                        );
                        route.comm = comm;
                        resolve(price);
                    });
                }),
            );
        });
        await Promise.all(routesPrices);
    }

    private async convertProviderPrices(priceBreakdown: PriceBreakdown, booking: Booking) {
        const routesPrices = priceBreakdown.provider.routes.map((route) => {
            return new Promise(async (resolve) => {
                const price = await this.getValueByCurrency(
                    route.price,
                    booking.provider.output.currency,
                );
                route.price = price;
                const repComm = await this.getValueByCurrency(
                    route.repComm,
                    booking.provider.output.currency,
                );
                route.repComm = repComm;
                resolve(price);
            });
        });
        await Promise.all(routesPrices);

        const totalProvider = await this.getValueByCurrency(
            priceBreakdown.provider.total,
            booking.provider.output.currency,
        );
        priceBreakdown.provider.total = totalProvider;
    }

    private async convertAgencyPrices(priceBreakdown: PriceBreakdown, booking: Booking) {
        const routesPrices = priceBreakdown.agency.routes.map((route) => {
            return new Promise(async (resolve) => {
                const price = await this.getValueByCurrency(
                    route.price,
                    booking.agency.output.currency,
                );
                route.price = price;
                const repComm = await this.getValueByCurrency(
                    route.repComm,
                    booking.provider.output.currency,
                );
                route.repComm = repComm;
                resolve(price);
            });
        });
        await Promise.all(routesPrices);

        const totalAgency = await this.getValueByCurrency(
            priceBreakdown.agency.total,
            booking.agency.output.currency,
        );
        priceBreakdown.agency.total = totalAgency;
    }

    private async convertBuyerPrices(priceBreakdown: PriceBreakdown, booking: Booking) {
        const routesPrices = priceBreakdown.buyer.routes.map((route) => {
            return new Promise(async (resolve) => {
                const price = await this.getValueByCurrency(
                    route.price,
                    booking.agency.output.currency,
                );
                route.price = price;
                resolve(price);
            });
        });
        await Promise.all(routesPrices);

        const totalBuyer = await this.getValueByCurrency(
            priceBreakdown.buyer.total,
            booking.agency.output.currency,
        );
        priceBreakdown.buyer.total = totalBuyer;

        const discount = await this.getValueByCurrency(
            priceBreakdown.buyer.discount,
            booking.agency.output.currency,
        );
        priceBreakdown.buyer.discount = discount;
    }

    private async getValueByCurrency(value: number, currency: Currency): Promise<number> {
        if (
            this.#currencyMemoization.has(
                JSON.stringify({
                    currency,
                    value,
                }),
            )
        ) {
            return (
                this.#currencyMemoization.get(
                    JSON.stringify({
                        currency,
                        value,
                    }),
                ) ?? 0
            );
        }

        const convertedValue = await this.currencyService.getValueByCurrency(value, currency);
        this.#currencyMemoization.set(
            JSON.stringify({
                currency,
                value,
            }),
            convertedValue,
        );

        return convertedValue;
    }
}
