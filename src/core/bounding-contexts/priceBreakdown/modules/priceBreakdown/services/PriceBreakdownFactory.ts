import Booking from "../../booking/domain/Booking/Booking";
import CarrierName from "../../contract/domain/Contract/carrierName";
import {
    PbBuyer,
    PbActorInfo,
    PbAgency,
    PbProvider,
    PbCarrier,
} from "../domain/priceBreakdown/pbActor";
import {
    AgencyRoute,
    ProviderRoute,
    CarrierRoute,
    BuyerRoute,
} from "../domain/priceBreakdown/pbRoute";
import PriceBreakdown from "../domain/priceBreakdown/priceBreakdown";

export default class PriceBreakdownFactory {
    getPriceBreakdown(booking: Booking): PriceBreakdown {
        const buyerPb = this.getBuyerPriceBreakdown(booking);
        const agencyPb = this.getAgencyPriceBreakdown(booking);
        const providerPb = this.getProviderPriceBreakdown(booking);
        const carrierPbs = this.getCarriersPriceBreakdown(booking);

        return new PriceBreakdown({
            agency: agencyPb,
            provider: providerPb,
            carriers: carrierPbs,
            buyer: buyerPb,
        });
    }
    private getBuyerPriceBreakdown(booking: Booking): PbBuyer {
        const info: PbActorInfo = new PbActorInfo({
            name: `${booking.buyer.firstname} ${booking.buyer.lastname}`,
        });
        const routes: BuyerRoute[] = [];
        let total = 0;
        booking.routes.forEach((route) => {
            routes.push(
                new BuyerRoute({
                    date: route.departureDate.value,
                    price: route.trainline.carrierPrice.value,
                    trainline: `${route.trainline.departureStation.name} - ${route.trainline.arrivalStation.name}`,
                    traveler: `${route.traveler.firstname} - ${route.traveler.lastname}`,
                }),
            );
            total += route.trainline.carrierPrice.value;
        });
        const discount = booking.discount?.value.value ?? 0;
        return new PbBuyer({
            info,
            routes,
            discount,
            total: total - discount,
        });
    }

    private getAgencyPriceBreakdown(booking: Booking): PbAgency {
        const info: PbActorInfo = new PbActorInfo({
            name: booking.agency.output.name.value,
        });
        const routes: AgencyRoute[] = [];
        let total = 0;
        let commd = 0;
        booking.routes.forEach((route) => {
            routes.push(
                new AgencyRoute({
                    date: route.departureDate.value,
                    price: route.trainline.carrierPrice.value,
                    repComm:
                        route.contract.commissionDistribution.agencyCommissionDistribution.value,
                    trainline: `${route.trainline.departureStation.name} - ${route.trainline.arrivalStation.name}`,
                }),
            );
            total += route.trainline.carrierPrice.value;
            commd += route.contract.commissionDistribution.agencyCommissionDistribution.value;
        });
        return new PbAgency({
            info,
            routes,
            total: total + commd,
        });
    }

    private getProviderPriceBreakdown(booking: Booking): PbProvider {
        const info: PbActorInfo = new PbActorInfo({
            name: booking.provider.output.name.value,
        });
        const routes: ProviderRoute[] = [];
        let total = 0;
        let commd = 0;
        booking.routes.forEach((route) => {
            routes.push(
                new ProviderRoute({
                    date: route.departureDate.value,
                    price: route.trainline.carrierPrice.value,
                    repComm:
                        route.contract.commissionDistribution.providerCommissionDistribution.value,
                    trainline: `${route.trainline.departureStation.name} - ${route.trainline.arrivalStation.name}`,
                }),
            );
            total += route.trainline.carrierPrice.value;
            commd += route.contract.commissionDistribution.providerCommissionDistribution.value;
        });
        return new PbProvider({
            info,
            routes,
            total: total + commd,
        });
    }

    private getCarriersPriceBreakdown(booking: Booking): PbCarrier[] {
        return booking.routes.map((route) => {
            return this.getCarrierPriceBreakdownByCarrierName(booking, route.contract.carrier.name);
        });
    }

    private getCarrierPriceBreakdownByCarrierName(booking: Booking, name: CarrierName): PbCarrier {
        const info: PbActorInfo = new PbActorInfo({
            name: name.value,
        });
        const routes: CarrierRoute[] = [];
        let total = 0;
        booking.routes
            .filter((route) => route.contract.carrier.name === name)
            .forEach((route) => {
                const carrierPrice = route.trainline.carrierPrice.value;
                const commission = route.trainline.commission.value;
                routes.push(
                    new CarrierRoute({
                        date: route.departureDate.value,
                        price: route.trainline.carrierPrice.value,
                        comm: route.trainline.commission.value,
                        trainline: `${route.trainline.departureStation.name} - ${route.trainline.arrivalStation.name}`,
                    }),
                );
                total += carrierPrice - carrierPrice * (commission / 100);
            });
        return new PbCarrier({
            info,
            routes,
            total: total - (booking.discount?.value.value ?? 0),
        });
    }
}
